const fs = require("fs");
const path = require("path");

const outputDirArg = process.argv[2] || "_site_web";
const outputDir = path.resolve(process.cwd(), outputDirArg);
const optimizedDir = path.join(outputDir, "images", "optimized");

if (!fs.existsSync(optimizedDir)) {
  console.log(`[prune-optimized] skip: ${optimizedDir} not found`);
  process.exit(0);
}

const htmlLikeExtensions = new Set([".html", ".xml"]);
const usedFiles = new Set();

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
  if (!htmlLikeExtensions.has(ext)) {
    continue;
  }

  const content = fs.readFileSync(filePath, "utf8");
  for (const match of content.matchAll(/images\/optimized\/([^\s"'<>?#]+)/g)) {
    usedFiles.add(match[1]);
  }
}

let deletedCount = 0;
const optimizedFiles = fs.readdirSync(optimizedDir).filter(name => name.toLowerCase().endsWith(".webp"));

for (const fileName of optimizedFiles) {
  if (usedFiles.has(fileName)) {
    continue;
  }
  fs.unlinkSync(path.join(optimizedDir, fileName));
  deletedCount += 1;
}

console.log(
  `[prune-optimized] kept=${optimizedFiles.length - deletedCount} deleted=${deletedCount} in ${path.relative(process.cwd(), optimizedDir)}`
);
