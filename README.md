# HEROINE PINK

**対ヒロイン研究分析機関** — 魔法少女・セーラー・レンジャー・アメコミ・バトルスーツ・特撮ヒロイン作品のレビューサイト。

---

## プロジェクト概要

[Eleventy (11ty)](https://www.11ty.dev/) v3 を使ったシンプルな静的サイトです。  
作品データは `src/works/` 以下の Markdown ファイル（YAML フロントマター）で管理し、Nunjucks テンプレートで HTML を生成します。

```
heroine-pink/
├── .eleventy.js          # Eleventy 設定ファイル
├── package.json
├── src/
│   ├── _data/            # グローバルデータ（ジャンル定義など）
│   ├── _includes/        # レイアウトテンプレート（Nunjucks）
│   │   ├── base.njk      # 共通ベースレイアウト（トップページ用）
│   │   └── work.njk      # 作品詳細ページレイアウト
│   ├── css/              # スタイルシート
│   ├── images/           # 画像素材（JPG・PNG・SVG）
│   ├── js/               # JavaScript
│   ├── videos/           # 動画素材（.gitignore で管理外）
│   ├── works/            # 作品データ（Markdown + YAML）
│   └── index.njk         # トップページ（作品一覧）
└── _site/                # ビルド出力先（.gitignore で管理外）
```

---

## セットアップ

### 必要環境

- Node.js 18 以上

### インストール

```bash
npm install
```

### 開発サーバー起動（ライブリロード付き）

```bash
npm start
```

ブラウザで `http://localhost:8080` を開くとサイトを確認できます。  
`src/works/` を編集すると自動的に再ビルドされます。

### 本番ビルド

```bash
npm run build
```

`_site/` ディレクトリに静的ファイルが生成されます。

---

## 作品データの追加方法

`src/works/` に Markdown ファイルを追加します。ファイル名がそのままURLのスラッグになります。

```yaml
---
layout: work.njk
title: "作品タイトル"
work_code: "XXXX-00"
keyvisual: "images/XXXX-00_Heroine.jpg"   # 作品詳細のメイン画像
keycolor: "rgb(250, 20, 20)"               # テーマカラー
release_date: "2025-01-01"
actress:
  - "女優名"
director: "監督名"
duration: 120
# ... その他フィールド
---
```

---

## 画像の WebP 最適化（eleventy-img）

### 背景

従来は `src/images/` の JPEG をそのまま `<img src>` で参照していましたが、  
[eleventy-img](https://www.11ty.dev/docs/plugins/image/) を導入し、ビルド時に **WebP（不可逆）** へ自動変換するようにしました。

### 第1段階の実装内容（作品詳細ページのキービジュアル）

`.eleventy.js` に `webpKeyvisual` という非同期ショートコードを追加しています。  
以下は README 用に各行に日本語コメントを付けたものです（実コードでは省略）。

```js
eleventyConfig.addAsyncShortcode("webpKeyvisual", async function(src, alt) {
  // パストラバーサル攻撃を防ぐバリデーション
  const path = require("node:path");
  const normalizedSrc = path.normalize(src);
  if (path.isAbsolute(normalizedSrc) || normalizedSrc.startsWith("..")) {
    throw new Error(`webpKeyvisual: 不正な画像パスです: ${src}`);
  }

  const metadata = await Image(`src/${normalizedSrc}`, {
    widths: ["auto"],          // 元画像より大きくリサイズしない
    formats: ["webp"],         // WebP（不可逆）のみ出力
    outputDir: "_site/images/",
    urlPath: "/images/",
    sharpWebpOptions: {
      quality: 65,             // 画質：60〜70 の中間値
      effort: 6,               // エンコード負荷：高め（最大6）
    },
  });

  return Image.generateHTML(metadata, {
    id: "keyvisual",
    alt: alt,
    loading: "lazy",           // 遅延読み込み
    decoding: "async",         // 非同期デコード
  });
});
```

テンプレート（`src/_includes/work.njk`）での呼び出し：

```njk
{% set keyvisualAlt %}{{ title }} {% for name in actress %}{{ name }}{% if not loop.last %} {% endif %}{% endfor %}主演 特撮ヒロイン作品 {{ release_date }}{% endset %}
{% webpKeyvisual keyvisual, keyvisualAlt %}
```

生成される HTML：

```html
<img src="/images/xxxxxxxxxx-480.webp"
     id="keyvisual"
     alt="作品タイトル 女優名主演 特撮ヒロイン作品 2025-01-01"
     loading="lazy"
     decoding="async"
     width="480"
     height="680">
```

### エンコード設定の根拠

| 設定 | 値 | 理由 |
|------|-----|------|
| `formats` | `["webp"]` | JPEGより高圧縮・高画質。モダンブラウザは全対応済み |
| `quality` | `65` | 60〜70 の中間。視覚的劣化が少なく、ファイルサイズを大幅削減 |
| `effort` | `6` | 最大値（0〜6）。ビルド時間は増えるが出力サイズが最小になる |
| `widths` | `["auto"]` | 元画像と同サイズのみ生成。アップスケールによる品質劣化を防ぐ |

### 段階的ロールアウト計画

| 段階 | 対象 | 状態 |
|------|------|------|
| 第1段階 | 作品詳細ページのキービジュアル（`#keyvisual`） | ✅ 実装済み |
| 第2段階 | 一覧ページのサムネイル画像 | 未実装 |
| 第3段階 | バナー・シーン画像 | 未実装 |

### 効果（実測値）

| ファイル | 変換前（JPEG） | 変換後（WebP） | 削減率 |
|----------|---------------|----------------|--------|
| `GHMT-87_Sailor-Deore_Heroine.jpg` | 203 KB | 54 KB | **−73%** |
| `SPSE-69_Cosplayder_Heroine.jpg` | 526 KB | 87 KB | **−83%** |

---

## 技術スタック

| 技術 | 用途 |
|------|------|
| [Eleventy 3.x](https://www.11ty.dev/) | 静的サイトジェネレーター |
| [Nunjucks](https://mozilla.github.io/nunjucks/) | テンプレートエンジン |
| [@11ty/eleventy-img](https://www.11ty.dev/docs/plugins/image/) | 画像最適化（WebP変換） |
| [sharp](https://sharp.pixelplumbing.com/) | 画像処理エンジン（eleventy-img の内部依存） |

---

## ライセンス

© HEROINE PINK 2025
