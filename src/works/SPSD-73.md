---
# =========================================================
# ■ 基本識別情報（必須）
# =========================================================

layout: "work.njk"
work_code: "SPSD-73"
title: "スパークルスターメルピュア！ 儚く消える星の輝き"
permalink: "/{{ work_code }}/"

# 公開設定
# draft: true


# =========================================================
# ■ ジャンル（1つ以上残す・不要なものを削除）
# slugは genresData.json と一致させる
# =========================================================

genres:
  - magic-girl


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

keyvisual: "images/SPSD-73_Pure-Aria_Pure-Abuel_Pure-Capella_Heroine.jpg"
keycolor: "linear-gradient(135deg, #5e96ff 0%, #5e96ff 35%, #ff5eb9 35%, #ff5eb9 65%, #fed86f 65%, #fed86f 100%)"


# =========================================================
# ■ 基本情報（必須）
# =========================================================

actress:
  - 美咲音
  - 楠木花菜
  - 由良かな

# slug形式（例: Yaya-Kohaku）
actress_slugs:
  - Actress-Slug

director: 監督名
director_slug: Director-Slug

# 数字のみ（分）
duration: "120"

# 形式: YYYY-MM-DD
release_date: "2025-09-026"


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
  <p>宇宙の光を消し去り暗黒に染めるためにナゲキー(泣き声の力)を集めるシャドーゾーン。</p>
  <p>その動きに対抗するためコメット王国の使者ミュータンが並行世界から探し出した伝説の戦士メルピュア。</p>
  <p>日々戦いをくり広げる彼女達のすぐ側にはメルピュアを内部から壊滅するためにシャドーゾーンの幹部が潜んでいた。</p>
  <p>アリアの想い人のサトウ先生(ウプシロン)と、そして４人目のメルピュア・シャララ。仲間も増え順調に見えたが、ついにメルピュア壊滅のために幹部が動き出す。</p>
  <p>その壊滅へのシナリオは巧妙に仕組まれており、３人はどんどん闇に呑み込まれていく。</p>
  <p>アビュールの明るさを嫌悪しているシャララはアビュールを毒で侵し破滅へ導き、アリアはサトウ先生に騙され手籠にされ、カペラはアビュールとアリアを助けるため自らを犠牲に差し出す…。</p>


# =========================================================
# ■ 動画ソース
# =========================================================

# ローカル研究用
# default_video_src: "/videos/SPSE-69.mp4"

# 本番用（R2等）
default_video_src: "https://pub-1739badb7e414655a6ebb4fbc6fd24ed.r2.dev/SPSD-73.mp4"


# =========================================================
# ■ SCENESパネル
# start/end は "00:01:23" 形式推奨
# Type: S/T align: L/C/R tail: L/C/R/N 
# =========================================================

scenes:
  -
    start: "00:01:56.8"
    end: "00:02:00.2"
    top:
      - { type: "S", align: "L", tail: "C", text: "プリキュア イルミネーション" }
    bottom:
      []

  -
    start: "00:02:53"
    end: "00:03:00"
    top:
      - { type: "S", align: "C", tail: "C", text: "幸せ育む 希望の光" }
    bottom:
      - { type: "S", align: "C", tail: "C", text: "キュアカペラ" }

  -
    start: "00:03:01"
    end: "00:03:08"
    top:
      - { type: "S", align: "C", tail: "C", text: "正義に導く 希望の光" }
    bottom:
      - { type: "S", align: "C", tail: "C", text: "キュアアリア" }

  -
    start: "00:03:09"
    end: "00:03:16"
    top:
      - { type: "S", align: "C", tail: "C", text: "悪を焦がす 希望の光" }
    bottom:
      - { type: "S", align: "C", tail: "C", text: "キュアアビュール" }

  -
    start: "01:13:19.4"
    end: "01:13:27"
    top:
      - { type: "S", align: "L", tail: "C", text: "ウプシロン様の…" }
    bottom:
      - { type: "S", align: "L", tail: "C", text: "はなまるください！" }
  
  -
    start: "01:14:06"
    end: "01:14:14.8"
    top:
      - { type: "S", align: "R", tail: "R", text: "ウプシロン様からの…はなまる…<br>　二人も欲しいでしょう？" }
    bottom:
      - { type: "S", align: "L", tail: "R", text: "そんなの欲しくない！" }

  -
    start: "01:22:40"
    end: "01:22:48.2"
    top:
      - { type: "S", align: "C", tail: "C", text: "ああぁ！ああぁ！ そこだめぇ！" }
    bottom:
      - { type: "S", align: "C", tail: "C", text: "あぁ イっっ！" }

  -
    start: "01:23:06"
    end: "01:23:08.4"
    top:
      - { type: "S", align: "L", tail: "L", text: "お前はこのままどうされたいんだ？" }
    bottom: 
      []

  -
    start: "01:23:09"
    end: "01:23:22"
    top:
      - { type: "S", align: "C", tail: "C", text: "ウプシロン様の…おちんちんに" }
    bottom: 
      - { type: "S", align: "C", tail: "C", text: "は…あぁ…はなまるの…白い精子ください" }

  -
    start: "01:23:24"
    end: "01:23:31"
    top:
      - { type: "S", align: "C", tail: "C", text: "あぁぁ あぁ 好き！ あぁぁぁ…" }
    bottom: 
      - { type: "S", align: "C", tail: "C", text: "あぁ…イクイクイクイクイクイクイク…" }

  -
    start: "01:23:31.4"
    end: "01:23:50"
    top:
      - { type: "S", align: "R", tail: "C", text: "イっちゃう！" }
    bottom: 
      - { type: "S", align: "R", tail: "C", text: "イク！イク！イクイクイク！" }

  -
    start: "01:23:45"
    end: "01:23:54.4"
    top:
      - { type: "S", align: "R", tail: "L", text: "あぁ… あっ…" }
    bottom: 
      - { type: "S", align: "C", tail: "R", text: "ハァ ハァ ハァ" }


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
