---
# =========================================================
# ■ 基本識別情報（必須）
# =========================================================

layout: "work.njk"
work_code: "GHOV-36"
title: "騎神戦隊レジェンミラー2 前編"
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

keyvisual: "images/GHOV-36/GHOV-36_Red-Phoenix_White-Unicorn_Blue-Fenril_Heroines.jpg"
keycolor: "linear-gradient(135deg, rgb(230, 230, 230) 35%, rgb(240, 60, 60) 35%, rgb(240, 60, 60) 65%, rgb(40, 180, 230) 65%)"
bannervisual: "images/GHOV-36/GHOV-36_L.jpg"
affiliate_url: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Fvideo.dmm.co.jp%2Fav%2Fcontent%2F%3Fid%3Dh_173ghov00036&af_id=aycarumba-009&ch=toolbar&ch_id=package_large"


# =========================================================
# ■ 基本情報（必須）
# =========================================================

actress:
  - 沙月恵奈
  - 渚みつき
  - 宇流木さら
director: 宇那月、
duration: "84"
release_date: "2022-06-10"


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
  <p>騎神戦隊レジェンミラー・・・。</p>
  <p>彼女たちは地上を支配しようとしたユゴース帝国との戦いに挑んだが・・・。</p>
  <p>彼らの圧倒的な力の前に倒れ、三人の戦士たちはバラバラになってしまった。</p>
  <p>世界の大半は彼らに侵略され、地上は蹂躙され続けていた。</p>
  <p>しかし、その中でレジェンミラーの意思を受け継ぐ新たな戦士たちが現れる。</p>
  <p>レッドフェニックスとホワイトユニコーンの力を受け継いだ美紅と蓮は、ユゴース帝国へ再び戦いを挑むため行方不明のブルーフェンリルを探しにいくのだが・・・。</p>


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
  - GHLS-70
  - THZ-79
  - GHMT-23
  - GHMT-45
  - TBB-97
  - DHRY-17
  - GHOV-36
  - GHOV-41
  - STHP-02
  - GHOV-93
  - SPSA-47

---
