﻿// .eleventy.js

const fs = require("fs");
const path = require("path");
const Image = require("@11ty/eleventy-img");
const MarkdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Nunjucks用 typeofフィルター
  eleventyConfig.addFilter("typeof", (value) => typeof value);
  // 1. 環境変数の設定 (開発か本番か)
  const isProduction = process.env.NODE_ENV === 'production';
  eleventyConfig.addGlobalData("isProduction", isProduction);

  // 公開ターゲット (local / web)
  const isLocal = process.env.IS_LOCAL === 'true';
  const publishTarget = isLocal ? "local" : "web";
  const eleventyImgPhase = Number.parseInt(process.env.ELEVENTY_IMG_PHASE || "1", 10);
  const imageBuildOutputDir = isLocal ? "_site_local" : "_site_web";

  const phaseByImageCategory = {
    main: 1,
    thumb: 2,
    banner: 3,
    scene: 3
  };

  const reviewMarkdown = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true
  });

  const shouldConvertToWebp = (category) => {
    const requiredPhase = phaseByImageCategory[category] || Number.POSITIVE_INFINITY;
    return eleventyImgPhase >= requiredPhase;
  };

  const normalizeImagePath = (src) => {
    return src.replace(/^[./]+/, "").replace(/\\/g, "/").replace(/\/+/g, "/");
  };

  eleventyConfig.addNunjucksAsyncFilter("toWebp", async (src, category = "main", callback) => {
    try {
      if (typeof src !== "string" || src.length === 0 || !shouldConvertToWebp(category)) {
        callback(null, src);
        return;
      }

      const normalizedSrc = normalizeImagePath(src);
      const inputPath = path.join(process.cwd(), "src", normalizedSrc);

      if (!fs.existsSync(inputPath)) {
        callback(null, src);
        return;
      }

      const metadata = await Image(inputPath, {
        widths: [null],
        formats: ["webp"],
        outputDir: path.join(process.cwd(), imageBuildOutputDir, "images/optimized"),
        urlPath: "/images/optimized/",
        sharpWebpOptions: {
          quality: 65,
          effort: 6
        }
      });

      const webp = metadata.webp && metadata.webp[0];
      if (!webp || !webp.url) {
        callback(null, src);
        return;
      }

      callback(null, webp.url.replace(/^\//, ""));
    } catch (error) {
      console.warn(`[toWebp] Failed to convert image: ${src}`);
      callback(null, src);
    }
  });

  eleventyConfig.addGlobalData("isLocal", isLocal);
  eleventyConfig.addGlobalData("publishTarget", publishTarget);
  eleventyConfig.addGlobalData("eleventyImgPhase", eleventyImgPhase);

  // public 未指定時は draft を後方互換として扱う
  const isVisibleForTarget = (data, target = publishTarget) => {
    if (!data || typeof data !== "object") return true;

    if (Array.isArray(data.public)) {
      return data.public.includes(target);
    }

    if (typeof data.public === "string") {
      return data.public === target;
    }

    return !data.draft;
  };

  eleventyConfig.addFilter("isPublic", (data, target = publishTarget) => {
    return isVisibleForTarget(data, target);
  });

  // 2. パススルーコピー (srcフォルダ内の素材をそのまま出力フォルダへ)
  // ※ CSS/JS はテンプレート内の `_includes` に配置されているため、出力先をマップしてコピーする
  eleventyConfig.addPassthroughCopy({ "src/_includes/css": "css" });
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy({ "src/_includes/js": "js" });
  eleventyConfig.addPassthroughCopy("src/videos");
  eleventyConfig.addWatchTarget("./src/works/");
  
  // 3. カスタムフィルター: 配列から特定のフィールドでオブジェクトを検索
  eleventyConfig.addFilter("findByField", (array, field, value) => {
    if (!Array.isArray(array)) return undefined;
    // 比較前にtrim()を適用し、item.data[field]で比較
    return array.find(item => {
      const itemValue = (item.data && item.data[field]) ? String(item.data[field]).trim() : undefined;
      const targetValue = (typeof value === 'string') ? value.trim() : value;
      return itemValue === targetValue;
    });
  });

  // 文字列の末尾から指定の文字を削る（sitemap で使用）
  eleventyConfig.addFilter("trimEnd", (str, search) => {
    if (typeof str !== "string" || typeof search !== "string") return str;
    while (str.endsWith(search)) {
      str = str.slice(0, -search.length);
    }
    return str;
  });

  // 4. カスタムフィルター: 0埋め (例: 1 -> 01)
  // ※ ここが module.exports の内側に収まっている必要があります
  eleventyConfig.addFilter("padStart", (string, targetLength, padString) => {
    return String(string).padStart(targetLength, padString);
  });

  // 女優の名前から slug を取得するフィルター
  eleventyConfig.addFilter("getActressSlug", (name) => {
    const actressesData = require("./src/_data/actressesData.json");
    const actress = actressesData.find(a => {
      if (a.name === name) return true;
      return Array.isArray(a.aliases) && a.aliases.includes(name);
    });
    return actress ? actress.slug : null;
  });

  // 監督の名前から slug を取得するフィルター
  eleventyConfig.addFilter("getDirectorSlug", (name) => {
    const directorsData = require("./src/_data/directorsData.json");
    const director = directorsData.find(d => d.name === name);
    return director ? director.slug : null;
  });

  eleventyConfig.addFilter("renderReviewText", (text) => {
    if (typeof text !== "string" || text.length === 0) {
      return "";
    }

    return reviewMarkdown.renderInline(text);
  });

  // 5. 作品コレクション (public で公開範囲を制御)
  eleventyConfig.addCollection("works", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/works/*.md").filter(
      item => isVisibleForTarget(item.data)
    );
  });

  // genres コレクション
  eleventyConfig.addCollection("genres", function(collectionApi) {
    const genresData = require("./src/_data/genresData.json");
    return Object.entries(genresData);
  });
  
  // 女優データ (actressesData.json) を、作品が存在する女優のみにフィルタリングして返すコレクション
  eleventyConfig.addCollection("actresses", function(collectionApi) {
    const actressesData = require("./src/_data/actressesData.json");
    const works = collectionApi.getFilteredByGlob("./src/works/*.md").filter(item => isVisibleForTarget(item.data));

    const activeActressSlugs = new Set();
    const getActressSlugByName = (name) => {
      const actress = actressesData.find(a => {
        if (a.name === name) return true;
        return Array.isArray(a.aliases) && a.aliases.includes(name);
      });
      return actress ? actress.slug : null;
    };

    for (const work of works) {
      if (work.data.actress && Array.isArray(work.data.actress)) {
        for (const actressName of work.data.actress) {
          const slug = getActressSlugByName(actressName);
          if (slug) activeActressSlugs.add(slug);
        }
      } else if (work.data.actress && typeof work.data.actress === 'string') {
        // 文字列で指定されている場合も考慮して追加
        const slug = getActressSlugByName(work.data.actress);
        if (slug) activeActressSlugs.add(slug);
      }
    }

    return actressesData.filter(actress => activeActressSlugs.has(actress.slug));
  });

  // 監督データ (directorsData.json) を、作品が存在する監督のみにフィルタリングして返すコレクション
  eleventyConfig.addCollection("directors", function(collectionApi) {
    const directorsData = require("./src/_data/directorsData.json");
    const works = collectionApi.getFilteredByGlob("./src/works/*.md").filter(item => isVisibleForTarget(item.data));
    
    const activeDirectors = new Set();
    for (const work of works) {
      if (work.data.director) {
        activeDirectors.add(work.data.director);
      }
    }

    return directorsData.filter(director => activeDirectors.has(director.name));
  });

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