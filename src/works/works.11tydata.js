// src/works/works.11tydata.js
// BUILD_TARGET に基づいて、公開対象外の作品ページのビルドをスキップする

module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      const buildTarget = process.env.BUILD_TARGET;
      // BUILD_TARGET未設定時 (開発サーバーなど) はそのままビルド
      if (!buildTarget) return data.permalink;

      const publicField = data.public;
      // public フィールドに buildTarget が含まれない場合はページをスキップ
      if (!Array.isArray(publicField) || !publicField.includes(buildTarget)) {
        return false;
      }
      return data.permalink;
    }
  }
};
