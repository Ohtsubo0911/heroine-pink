---
# =========================================================
# ■ 基本識別情報（必須）
# =========================================================

layout: "work.njk"
work_code: "SPSA-47"
title: "破壊の堕天使ヴァルナーガ ヒーロー陥落"
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

keyvisual: "images/{{ work_code }}/{{ work_code }}_Vallnarga_Heroine.jpg"
keycolor: "rgb(124, 113, 246)"
bannervisual: "images/{{ work_code }}/{{ work_code }}_L.jpg"

# バナーのリンク先を指定
affiliate_url: "https://www.yahoo.co.jp/"


# =========================================================
# ■ 基本情報（必須）
# =========================================================

actress:
  - 渚みつき
director: 宇那月、

# 数字のみ（分）
duration: "128"

# 形式: YYYY-MM-DD
release_date: "2023-05-12"


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
  <p>騎神戦隊レジェンミラーの一員・ブルーフェンリルであった蒼井涼は、ユゴース帝国に捕まり洗脳され、破壊の堕天使ヴァルナーガとして、悪の尖兵となっていた。</p>
  <p>ヴァルナーガは、更なる力を得ようと地球のほかの戦隊チームに目を付ける。</p>
  <p>新星戦隊リュウセイジャーの戦いに遭遇したヴァルナーガは、ブルーフェンリルの姿となり彼らに加勢し近づく。</p>
  <p>思惑通りレッド、イエロー、グリーンとそれぞれに接近し、女の色気を使って手籠めにしていくヴァルナーガ。</p>
  <p>リュウセイジャーの３戦士の精気を吸い取り、更なる力を手に入れたヴァルナーガは、恐るべき破壊と絶望の使者へと変貌を遂げるのだった・・・！</p>


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
    img: "images/{{ work_code }}/{{ work_code }}_01.jpg"
    top:
      - { type: "S", align: "L", tail: "R", text: "【画像シーン】拘束直後の表情変化を確認" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_02.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_03.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_04.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_05.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []

  -
    img: "images/{{ work_code }}/{{ work_code }}_06.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_07.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_08.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_09.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_10.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []

  -
    img: "images/{{ work_code }}/{{ work_code }}_11.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_12.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_13.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_14.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_15.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []

  -
    img: "images/{{ work_code }}/{{ work_code }}_16.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_17.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_18.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_19.jpg"
    top:
      - { type: "T", align: "C", tail: "C", text: "【画像シーン】視線の落ち方と受動姿勢が強い" }
    bottom: []
  -
    img: "images/{{ work_code }}/{{ work_code }}_20.jpg"
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
    img: "images/THZ-79/THZ-79_Blue-Fenril_Heroine.jpg"
  - url: "/GHMT-23/"
    img: "images/GHMT-23/GHMT-23_White-Unicorn_Heroine.jpg"
  - url: "/GHMT-45/"
    img: "images/GHMT-45/GHMT-45_Blue-Fenril_Heroine.jpg"
  - url: "/TBB-97/"
    img: "images/TBB-97/TBB-97_Blue-Fenril_Heroine.jpg"
  - url: "/DHRY-17/"
    img: "images/DHRY-17/DHRY-17_Blue-Fenril_Heroine.jpg"
  - url: "/GHOV-36/"
    img: "images/GHOV-36/GHOV-36_Red-Phoenix_White-Unicorn_Blue-Fenril_Heroines.jpg"
  - url: "/GHOV-41/"
    img: "images/GHOV-41/GHOV-41_Red-Phoenix_White-Unicorn_Blue-Fenril_Heroines.jpg"
  - url: "/STHP-02/"
    img: "images/STHP-02/STHP-02_Red-Phoenix_Heroine.jpg"
  - url: "/GHOV-93/"
    img: "images/GHOV-93/GHOV-93_White-Unicorn_Heroine.jpg"
  #- url: "/SPSA-47/"
  #  img: "images/SPSA-47/SPSA-47_Vallnarga_Heroine.jpg"

---
