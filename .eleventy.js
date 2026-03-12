// .eleventy.js

module.exports = function(eleventyConfig) {
  // 1. 環境変数の設定 (開発か本番か)
  const isProduction = process.env.NODE_ENV === 'production';
  const buildTarget = isProduction ? "web" : "local";
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

  // 5. publicフィールドによる出力制御
  // public: ["local", "web"] → 両方に出力
  // public: ["local"]        → ローカル用にのみ出力
  // public: ["web"]          → ウェブ用にのみ出力
  // public: []               → どこにも出力しない
  // publicフィールドなし     → 両方に出力（後方互換）
  const isPublicInBuild = (pub) => !Array.isArray(pub) || pub.includes(buildTarget);

  eleventyConfig.addPreprocessor("publicFilter", "md", (data) => {
    if (!isPublicInBuild(data.public)) {
      return false; // 出力しない、コレクションからも除外
    }
  });

  // 6. 作品コレクション
  eleventyConfig.addCollection("works", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/works/*.md")
      .filter(item => isPublicInBuild(item.data.public));
  });


  // 5. Eleventyの基本設定
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}; // ここで関数の終わり。これより下にコードを書いてはいけません