// .eleventy.js

const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  // 1. 環境変数の設定 (開発か本番か)
  const isProduction = process.env.NODE_ENV === 'production';
  eleventyConfig.addGlobalData("isProduction", isProduction);

  // 2. パススルーコピー (srcフォルダ内の素材をそのまま出力フォルダへ)
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/videos");
  eleventyConfig.addWatchTarget("./src/works/");
  
  // 3. カスタムフィルター: 配列から特定のフィールドでオブジェクトを検索
  eleventyConfig.addFilter("findByField", (array, field, value) => {
    return array.find(item => item[field] === value);
  });

  // 4. カスタムフィルター: 0埋め (例: 1 -> 01)
  // ※ ここが module.exports の内側に収まっている必要があります
  eleventyConfig.addFilter("padStart", (string, targetLength, padString) => {
    return String(string).padStart(targetLength, padString);
  });

    // 5. 作品コレクション
  eleventyConfig.addCollection("works", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/works/*.md");
  });


  // 6. WebP キービジュアル生成ショートコード (第1段階: 作品詳細のメイン画像)
  eleventyConfig.addAsyncShortcode("webpKeyvisual", async function(src, alt) {
    const path = require("node:path");
    const normalizedSrc = path.normalize(src);
    if (path.isAbsolute(normalizedSrc) || normalizedSrc.startsWith("..")) {
      throw new Error(`webpKeyvisual: 不正な画像パスです: ${src}`);
    }
    const metadata = await Image(`src/${normalizedSrc}`, {
      widths: ["auto"],
      formats: ["webp"],
      outputDir: "_site/images/",
      urlPath: "/images/",
      sharpWebpOptions: {
        quality: 65,
        effort: 6,
      },
    });
    return Image.generateHTML(metadata, {
      id: "keyvisual",
      alt: alt,
      loading: "lazy",
      decoding: "async",
    });
  });

  // 7. Eleventyの基本設定
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}; // ここで関数の終わり。これより下にコードを書いてはいけません