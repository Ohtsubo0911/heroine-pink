const fs = require("fs");
const path = require("path");

const outputDirArg = process.argv[2] || "_site_web";
const outputDir = path.resolve(process.cwd(), outputDirArg);
const optimizedDir = path.join(outputDir, "images", "optimized");
const imagesDir = path.join(outputDir, "images");

if (!fs.existsSync(imagesDir)) {
  console.log(`[prune-images] skip: ${imagesDir} not found`);
  process.exit(0);
}

const textExtensions = new Set([
  ".html",
  ".xml",
  ".css",
  ".js",
  ".json",
  ".txt",
  ".map",
  ".svg",
  ".webmanifest"
]);
const usedImagePaths = new Set();

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(filePath, out);
    } else {
      out.push(filePath);
    }
  }
  return out;
}

for (const filePath of walk(outputDir)) {
  const ext = path.extname(filePath).toLowerCase();
  if (!textExtensions.has(ext)) {
    continue;
  }

  let content = "";
  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch {
    continue;
  }

  // /images/foo.png, ./images/foo.png, ../images/foo.png などを抽出
  for (const match of content.matchAll(/(?:\.\.\/|\.\/|\/)?(images\/[^\s"'()<>?#]+)/g)) {
    const relativePath = match[1].replace(/\\/g, "/").replace(/\/+/g, "/");
    usedImagePaths.add(relativePath);
  }
}

let deletedOptimized = 0;
let deletedOriginals = 0;

for (const filePath of walk(imagesDir)) {
  const relativePath = path
    .relative(outputDir, filePath)
    .replace(/\\/g, "/")
    .replace(/\/+/g, "/");

  if (usedImagePaths.has(relativePath)) {
    continue;
  }

  fs.unlinkSync(filePath);
  if (relativePath.startsWith("images/optimized/")) {
    deletedOptimized += 1;
  } else {
    deletedOriginals += 1;
  }
}

// 空ディレクトリの掃除
function removeEmptyDirs(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const child = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      removeEmptyDirs(child);
    }
  }
  if (dir !== imagesDir && fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
  }
}

removeEmptyDirs(imagesDir);

const remainingOptimized = fs.existsSync(optimizedDir)
  ? walk(optimizedDir).filter(file => file.toLowerCase().endsWith(".webp")).length
  : 0;

const remainingOriginals = walk(imagesDir).filter(file => !file.includes(`${path.sep}optimized${path.sep}`)).length;

console.log(`[prune-images] deleted originals=${deletedOriginals} optimized=${deletedOptimized}`);
console.log(`[prune-images] kept originals=${remainingOriginals} optimized=${remainingOptimized}`);
