// .eleventy.js

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

  // genres コレクション
  eleventyConfig.addCollection("genres", function(collectionApi) {
    const genresData = require("./src/_data/genresData.json");
    return Object.entries(genresData);
  });

  // ★これを追加：環境変数から IS_LOCAL の値を取得
  const isLocal = process.env.IS_LOCAL === 'true';
  // ★これを追加：テンプレートで isLocal を使えるようにする
  eleventyConfig.addGlobalData("isLocal", isLocal);

  // .eleventy.js 内の relative フィルターを以下に差し替えてください
  eleventyConfig.addFilter("relative", (url, page) => {
    if (!url || url.startsWith("http") || url.startsWith("#")) return url;
    
    // パスの計算
    const pageUrl = page.url || "";
    const path = pageUrl.replace(/\/$/, "");
    const depth = path.split("/").filter(Boolean).length;
    const prefix = depth > 0 ? "../".repeat(depth) : "./";
    
    let target = url.replace(/^\//, "");

    // ★重要：ダブルクリックで動くよう、リンク先の末尾が / なら index.html を足す
    if (target === "" || target.endsWith("/")) {
      target += "index.html";
    } else if (!target.includes(".")) {
      // 拡張子がない（フォルダ指定の）場合も index.html を補完
      target += "/index.html";
    }

    return prefix + target;
  });

  // 5. Eleventyの基本設定
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    pathPrefix: ""
  };
}; // ここで関数の終わり。これより下にコードを書いてはいけません