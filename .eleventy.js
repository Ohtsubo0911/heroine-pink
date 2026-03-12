// .eleventy.js

const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  // 1. 環境変数の設定 (ビルドターゲット: "local", "web", または未設定)
  const buildTarget = process.env.BUILD_TARGET;
  eleventyConfig.addGlobalData("buildTarget", buildTarget || null);

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
  eleventyConfig.addFilter("padStart", (string, targetLength, padString) => {
    return String(string).padStart(targetLength, padString);
  });

  // 5. 作品コレクション (publicフィールドによる公開制御)
  eleventyConfig.addCollection("works", function(collectionApi) {
    const allWorks = collectionApi.getFilteredByGlob("./src/works/*.md");
    if (!buildTarget) {
      // BUILD_TARGET未設定時 (開発サーバーなど) は全作品を対象とする
      return allWorks;
    }
    // BUILD_TARGET が設定されている場合は public フィールドでフィルタリング
    return allWorks.filter(work => {
      const publicField = work.data.public;
      return Array.isArray(publicField) && publicField.includes(buildTarget);
    });
  });

  // 6. 画像最適化ショートコード (Eleventy-img + publicフィールドによる公開判定)
  eleventyConfig.addAsyncShortcode("optimizedImage", async function(src, alt, publicField) {
    const safeAlt = (alt || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    // BUILD_TARGETが設定されていて、かつ公開対象外の場合はEleventy-imgをスキップ
    if (buildTarget && (!Array.isArray(publicField) || !publicField.includes(buildTarget))) {
      return `<img src="/${src}" alt="${safeAlt}">`;
    }

    const metadata = await Image(`./src/${src}`, {
      widths: [null],
      formats: ["webp", "jpeg"],
      outputDir: "./_site/images/",
      urlPath: "/images/"
    });

    return Image.generateHTML(metadata, {
      alt: safeAlt,
      loading: "lazy",
      decoding: "async"
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