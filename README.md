# HEROINE PINK 対ヒロイン研究分析機関

特撮・魔法少女・セーラー・レンジャー・アメコミ・バトルスーツ系ヒロイン作品の紹介・研究分析サイト。  
静的サイトジェネレーター **[Eleventy (11ty)](https://www.11ty.dev/)** を使用して構築されています。

---

## 目次

1. [ディレクトリ構成](#ディレクトリ構成)
2. [セットアップ](#セットアップ)
3. [開発サーバーの起動](#開発サーバーの起動)
4. [本番ビルド](#本番ビルド)
5. [作品ファイルの追加・編集](#作品ファイルの追加編集)
6. [public フィールドによる出力制御](#public-フィールドによる出力制御)

---

## ディレクトリ構成

```
heroine-pink/
├── .eleventy.js          # Eleventy 設定ファイル（コレクション・フィルター・出力制御）
├── package.json          # npm スクリプトと依存パッケージ
└── src/                  # ソースディレクトリ（Eleventy の input）
    ├── _data/            # グローバルデータ（JSON）
    │   ├── genresData.json   # ジャンル定義
    │   └── reviewers.json    # レビュアープロフィール
    ├── _includes/        # Nunjucks テンプレート
    │   ├── base.njk          # 共通 HTML レイアウト
    │   └── work.njk          # 作品詳細ページテンプレート
    ├── css/              # スタイルシート
    ├── images/           # 画像素材
    ├── js/               # JavaScript（動画再生コントローラなど）
    ├── videos/           # 動画ファイル（.gitignore 対象）
    ├── works/            # 作品コンテンツファイル（Markdown）
    │   ├── SPSE-69.md
    │   ├── ghmt-87.md
    │   └── ghls-87.md
    └── index.njk         # トップページテンプレート
```

ビルド後の成果物は `_site/` ディレクトリに出力されます（`.gitignore` 対象）。

---

## セットアップ

Node.js がインストールされている環境で、以下のコマンドを実行してください。

```bash
npm install
```

---

## 開発サーバーの起動

```bash
npm run start
```

ローカル開発サーバーが起動し、`http://localhost:8080` でサイトを確認できます。  
`src/` 以下のファイルを変更すると自動でリビルドされます。

> **環境判定：** `NODE_ENV` が `production` 以外のとき、ビルドターゲットは `"local"` になります。

---

## 本番ビルド

```bash
NODE_ENV=production npm run build
```

`_site/` ディレクトリに本番用の静的ファイルが生成されます。

> **環境判定：** `NODE_ENV=production` のとき、ビルドターゲットは `"web"` になります。

---

## 作品ファイルの追加・編集

作品は `src/works/` 以下に Markdown ファイルとして作成します。  
ファイル先頭の YAML フロントマターで全メタデータを管理します。

### フロントマターの主なフィールド

| フィールド | 型 | 説明 |
|---|---|---|
| `layout` | 文字列 | 使用するテンプレート（通常 `"work.njk"`） |
| `title` | 文字列 | 作品タイトル |
| `work_code` | 文字列 | 作品コード（例：`"SPSE-69"`） |
| `public` | 配列 | **出力先の制御**（後述） |
| `keyvisual` | 文字列 | キービジュアル画像のパス |
| `keycolor` | CSS値 | テーマカラー（例：`rgb(250, 20, 20)`） |
| `actress` | 配列 | 出演者名 |
| `actress_slugs` | 配列 | 出演者名のスラッグ（URL用） |
| `director` | 文字列 | 監督名 |
| `director_slug` | 文字列 | 監督名のスラッグ（URL用） |
| `duration` | 文字列 | 収録時間（分） |
| `release_date` | 文字列 | 発売日（`YYYY-MM-DD`） |
| `story_lead` | 文字列（複数行） | ストーリーのリードテキスト（HTML可） |
| `panels` | 配列 | コミックパネルのデータ |
| `scenes` | 配列 | 動画シーンのデータ |
| `review` | オブジェクト | レビューセクションのデータ |

### 作品ファイルの例

```yaml
---
layout: "work.njk"
title: "作品タイトル"
work_code: "XXXX-00"
public: ["local", "web"]
keyvisual: "images/XXXX-00_keyvisual.jpg"
keycolor: rgb(250, 20, 20)
actress:
  - 出演者名
actress_slugs:
  - actress-slug
director: 監督名
director_slug: director-slug
duration: "90"
release_date: "2025-01-01"
story_lead: |
  <p>ストーリーのあらすじ。</p>
---
```

---

## public フィールドによる出力制御

各作品ファイルのフロントマターに `public` フィールドを設定することで、  
**ローカル環境と本番（Web）環境のどちらに出力するか**を個別に制御できます。

### 設定値と動作

| 設定値 | ローカルビルド<br>（`npm run start` / `npm run build`） | 本番ビルド<br>（`NODE_ENV=production npm run build`） |
|---|:---:|:---:|
| `public: ["local", "web"]` | ✅ 出力 | ✅ 出力 |
| `public: ["local"]` | ✅ 出力 | ❌ 出力しない |
| `public: ["web"]` | ❌ 出力しない | ✅ 出力 |
| `public: []` | ❌ 出力しない | ❌ 出力しない |
| `public` フィールドなし | ✅ 出力 | ✅ 出力 |

### 使用例

```yaml
# 公開済み作品（ローカルでも本番でも表示）
public: ["local", "web"]

# 作業中の下書き（ローカルでのみ確認できる）
public: ["local"]

# 本番のみ公開（ローカル環境では非表示にしたい場合）
public: ["web"]

# 完全非表示（一時的に全環境で出力を止める）
public: []
```

### 仕組み（`.eleventy.js`）

`addPreprocessor` を使い、`public` フィールドの値と現在のビルドターゲット（`"local"` または `"web"`）を比較します。  
条件を満たさない場合はページ生成をスキップし、`works` コレクションからも除外されます。

```js
const buildTarget = isProduction ? "web" : "local";
const isPublicInBuild = (pub) => !Array.isArray(pub) || pub.includes(buildTarget);

eleventyConfig.addPreprocessor("publicFilter", "md", (data) => {
  if (!isPublicInBuild(data.public)) {
    return false; // ページ生成をスキップ・コレクションからも除外
  }
});
```
