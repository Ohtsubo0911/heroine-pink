---
# =========================================================
# ■ 基本識別情報（必須）
# =========================================================

layout: "work.njk"
work_code: "GHMT-23"
title: "騎神戦隊レジェンミラー ホワイトユニコーン陥落"
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

keyvisual: "images/GHMT-23/GHMT-23_White-Unicorn_Heroine.jpg"
keycolor: "rgb(230, 230, 230)"
bannervisual: "images/GHMT-23/GHMT-23_L.jpg"

# バナーのリンク先を指定
affiliate_url: "https://www.yahoo.co.jp/"


# =========================================================
# ■ 基本情報（必須）
# =========================================================

actress:
  - 桐山結羽
director: 宇那月、
duration: "123"
release_date: "2020-12-25"


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
  <p>地熱エネルギー吸収プラントの作動エンジンの設計図を奪うため、ユゴース帝国の怪人プラシオンは白川楓を襲う。</p>
  <p>楓はホワイトユニコーンに変身して応戦しようとするが、変身デバイスであるメタオードが敵に襲われ、設計図との交換条件を持ちかけられるが楓はそれを拒んだ。</p>
  <p>しびれを切らしたプラシオンは楓を捕らえ、口を割らせようと楓を甚振る。</p>
  <p>なんとか楓は脱出し、ホワイトユニコーンとなって戦うのだが、そこに新たな強敵が出現するのだった・・・。</p>


# =========================================================
# ■ 動画ソース
# =========================================================

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

---
