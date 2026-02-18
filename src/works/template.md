---
# =========================================================
# ■ 基本識別情報（必須）
# =========================================================

layout: "work.njk"

# 例: "SPSE-69"
work_code: "XXXX-XX"

# 例: "触手十字架地獄13"
title: "作品タイトルを入力"

# 自動URL生成
permalink: "/{{ work_code }}/"

# 公開設定
draft: true


# =========================================================
# ■ ジャンル（1つ以上残す・不要なものを削除）
# slugは genresData.json と一致させる
# =========================================================

genres:
  - magic-girl
  - sailor-suits
  - ranger
  - comics
  - battle-suit


# =========================================================
# ■ タグ（自由入力）
# tagData.json を参照
# 例: tentacle, crucifixion, mind-break など
# =========================================================

tags:
  - tag-slug-1
  - tag-slug-2


# =========================================================
# ■ ビジュアル設定
# =========================================================

# images/XXXX-XX_ヒロイン名_Heroine.jpg を推奨
# 例: keyvisual: "images/SPSE-69_Cosplayder_Heroine.jpg"
keyvisual: "images/SPSE-69_Cosplayder_Heroine.jpg"

# 単色例: "rgb(250, 20, 20)"
# 二色例: "linear-gradient(135deg, #f0bc68 50%, #c4d7d1 50%)"
keycolor: "rgb(250, 20, 20)"


# =========================================================
# ■ 基本情報（必須）
# =========================================================

actress:
  - 女優名を入力

# slug形式（例: Yaya-Kohaku）
actress_slugs:
  - Actress-Slug

director: 監督名
director_slug: Director-Slug

# 数字のみ（分）
duration: "120"

# 形式: YYYY-MM-DD
release_date: "2026-01-01"


# =========================================================
# ■ Schema.org用（SEO補助）
# =========================================================

# 例: "4.5"
schema_rating: "4.0"

schema_review_body: "作品全体の要約を200文字程度で入力"


# =========================================================
# ■ STORYセクション
# HTMLで記述（pタグ必須）
# =========================================================

story_lead: |
  <p>導入文1</p>
  <p>導入文2</p>


# =========================================================
# ■ 動画ソース
# =========================================================

# ローカル研究用
# default_video_src: "/videos/SPSE-69.mp4"

# 本番用（R2等）
default_video_src: "https://example.com/SPSE-69.mp4"


# =========================================================
# ■ SCENESパネル
# start/end は "00:01:23" 形式推奨
# Type: S/T align: L/C/R tail: L/C/R/N 
# =========================================================

scenes:
  -
    start: "00:00:10"
    end: "00:00:20"
    top:
      - { type: "S", align: "L", tail: "R", text: "解説テキスト" }
    bottom: []

  -
    start: "00:05:30"
    end: "00:05:40"
    top:
      - { type: "T", align: "C", tail: "C", text: "ハイライト解説" }
    bottom: []


# =========================================================
# ■ REVIEW構造
# reviewers.json を参照
# id: critic/judge/madame/dr/analyzer/star/noir/bot
# =========================================================

review:

  reviewers:
    judge:
      position: "left"
      description: "構造・論理を分析"

    madame:
      position: "right"
      description: "官能・屈服を分析"

  sections:

    - title: "序論"
      dialogue:
        - speaker: "judge"
          text: "分析テキスト"
        - speaker: "madame"
          text: "官能テキスト"

    - title: "結論"
      dialogue:
        - speaker: "judge"
          text: "総括"
        - speaker: "madame"
          text: "官能的結語"

---
