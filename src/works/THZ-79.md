---
# =========================================================
# ■ 基本識別情報（必須）
# =========================================================

layout: "work.njk"
work_code: "THZ-79"
title: "スーパーヒロイン絶体絶命！！Vol.79 騎神戦隊レジェンミラー ブルーフェンリル編"
permalink: "/{{ work_code }}/"
public: ["web"]


# =========================================================
# ■ ジャンル（1つ以上残す・不要なものを削除）
# slugは genresData.json と一致させる
# =========================================================

genres:
  - ranger


# =========================================================
# ■ タグ（自由入力）
# tagsData.json を参照
# 例: tentacle, crucifixion, mind-break など
# =========================================================

tags:
  - tag-slug-1
  - tag-slug-2


# =========================================================
# ■ ビジュアル設定
# =========================================================

keyvisual: "images/{{ work_code }}/{{ work_code }}_Blue-Fenrir_Heroine.jpg"
keycolor: "rgb(40, 180, 230)"
bannervisual: "images/{{ work_code }}/{{ work_code }}_L.jpg"

# バナーのリンク先を指定
affiliate_url: "https://www.yahoo.co.jp/"


# =========================================================
# ■ 基本情報（必須）
# =========================================================

actress:
  - 渚みつき
director: 宇那月、
duration: "81"
release_date: "2020-10-09"


# =========================================================
# ■ Schema.org用（SEO補助）
# =========================================================

# 例: "4.5"
schema_rating: "4.0"

# 形式: YYYY-MM-DD
date_published: "2026-02-18"

schema_review_body: "作品全体の要約を200文字程度で入力"


# =========================================================
# ■ STORYセクション
# HTMLで記述（pタグ必須）
# =========================================================

story_lead: |
  <p>騎神戦隊レジェンミラー、ブルーフェンリルはユゴース帝国怪人ピラノイアの毒によって身動きできないフェニックス、ユニコーンに代わり、一人敵地に乗り込んだ。</p>
  <p>その前に立ちはだかるユゴースの幹部プラシオン！</p>
  <p>不気味なデスワームの攻撃も加わり、苦戦に追い込まれる。</p>
  <p>更にピラノイアに求婚されてしまうブルーフェンリル。</p>
  <p>解毒剤を得るために彼女は花嫁となるのか？</p>
  <p>それとも毒液攻撃のもと、命を落としてしまうのか？</p>
  <p>屈辱に満ちた戦いを繰り広げるフェンリルに絶対の危機が迫る！</p>


# =========================================================
# ■ 動画ソース
# =========================================================

# ローカル研究用
# default_video_src: "/videos/SPSE-69.mp4"

# 本番用（R2等）
default_video_src: "https://example.com/SPSE-69.mp4"


# =========================================================
# ■ SCENESパネル（ローカルのみ）
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
# ■ SCENES img パネル（ウェブのみ）
# Type: S/T align: L/C/R tail: L/C/R/N 
# =========================================================

scenes_img:
  -
    img: "images/SPSB-09/SPSB-09_01.jpg"
    top:
      - { type: "S", align: "L", tail: "R", text: "【画像シーン】拘束直後の表情変化を確認" }
    bottom: []

  -
    img: "images/SPSB-09/SPSB-09_02.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
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


# =========================================================
# ■ SEE ALSO（関連ページ）
# url: 作品ページのパス（例: "/SPSE-69/"）
# img: サムネイル画像のパス（例: "images/SPSE-69/SPSE-69_Heroine.jpg"）
# =========================================================

see_also:
  - url: "/GHLS-70/"
    img: "images/GHLS-70/GHLS-70_Red-Phoenix_White-Unicorn_Blue-Fenril_Heroines.jpg"
  - url: "/THZ-79/"
    img: "images/THZ-79/THZ-79_Blue-Fenrir_Heroine.jpg"
  - url: "/GHMT-23/"
    img: "images/GHMT-23/GHMT-23_White-Unicorn_Heroine.jpg"
  - url: "/GHMT-45/"
    img: "images/GHMT-45/GHMT-45_Blue-Fenril_Heroine.jpg"
  - url: "/TBB-97/"
    img: "images/TBB-97/TBB-97_Blue-Fenrir_Heroine.jpg"
  - url: "/DHRY-17/"
    img: "images/DHRY-17/DHRY-17_Blue-Fenril_Heroine.jpg"
  - url: "/GHOV-36/"
    img: "images/GHOV-36/GHOV-36_Red-Phoenix_White-Unicorn_Blue-Fenrir_Heroines.jpg"
  - url: "/GHOV-41/"
    img: "images/GHOV-41/GHOV-41_Red-Phoenix_White-Unicorn_Blue-Fenrir_Heroines.jpg"
  - url: "/STHP-02/"
    img: "images/STHP-02/STHP-02_Red-Phoenix_Heroine.jpg"
  - url: "/GHOV-93/"
    img: "images/GHOV-93/GHOV-93_White-Unicorn_Heroine.jpg"
  - url: "/SPSA-47/"
    img: "images/SPSA-47/SPSA-47_Vallnarga_Heroine.jpg"

---
