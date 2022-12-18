<template lang="pug">
section#diet
  .section-catch
    img.catch-image(src="@/assets/images/diet_meal.jpeg")
    .catch-text
      .catch-title
        p 食事管理も
        p 並行して
        p 最大限の効果を。
      .catch-description
        p 筋トレと食事の両立で
        p 理想のモテボディをGET！
  .section-title
    p
      span.emphasis-yellow 1日3食
      span 、しっかり食べて
    p
      span スッキリ痩せる
      span.emphasis-yellow 食事管理
      span 。
  .container.diet-section
    .row.g-2
      .col-6
        .diet-card
          .diet-card-header
            img.diet-card-image(src="@/assets/images/diet_with_eat.png")
          .diet-card-body
            p あなたの食事内容に
            p 合わせてカスタマイズ。
            p.emphasis-orange 食べて痩せるダイエット
      .col-6
        .diet-card
          .diet-card-header
            img.diet-card-image(src="@/assets/images/diet_with_cal.png")
          .diet-card-body
            p わかりやすい。
            p 続けやすい。
            p.emphasis-orange 簡単な理論に基づいて指導
  .section-catch
    img.catch-image(src="@/assets/images/line_man.png")
    .catch-text
      .catch-title
        p
          span.emphasis-line 専用LINE
          span で
        p 毎日の管理も
        p らっくらく
      .catch-description
        p 専用LINEに食事の写真を
        p 送るだけ。管理は最小限に。
  .container.line-section
    .row.g-3
      .col-6
        img.line-image(src="@/assets/images/line_send.png")
      .col-6
        .line-title 入力はラクラク
        .line-description
          div
            p 毎食食べる前に写真を
            p 1枚撮影し、専用LINEに
            p 送るだけ。
          div
            p カロリー計算も不要。
            p 入力の手間もなく楽ちん。
      .col-6
        img.line-image(src="@/assets/images/line_advice.png")
      .col-6
        .line-title 毎日アドバイス
        .line-description
          div
            p 1日の終りに専用LINEに
            p 食事の内容から
            p アドバイスが届く！
          div
            p 相談事もお気軽に。
  .container
    .diet-conclusion
      .conclusion-title
        span 簡単な理論で
        span.emphasis-yellow 身につく習慣
      .conclusion-detail
        p
          span カロリー計算に基づいた
          span.emphasis-yellow 誰でも覚えられる
        p 食事管理方法を提供します。
        p
          span 難しい考えは不要。
          span.emphasis-yellow プログラム終了後
          span も
        p
          span.emphasis-yellow 習慣が身につき
          span ずっと継続できます。
</template>

<style lang="sass" scoped>
#diet
  letter-spacing: 0.05em
  background-color: $dark-color
  padding: 30px 0
  .emphasis-yellow
    color: $emphasis-yellow
  .emphasis-orange
    font-weight: bold
    color: $emphasis-orange
  .emphasis-line
    color: $line-color
  .section-catch
    display: flex
    justify-content: center
    background-color: white
    padding-top: 30px
    margin-bottom: 30px
    .catch-image
      width: auto
      height: 150px
      background-color: $base-grey
      margin-right: 20px
    .catch-text
      .catch-title
        font-size: 20px
        font-weight: bold
        margin-bottom: 8px
      .catch-description
        font-size: 12px
  .section-title
    font-size: 20px
    font-weight: bold
    color: white
    text-decoration: underline
    text-underline-offset: 6px
    text-align: center
    line-height: 1.8
    margin-bottom: 20px
  .diet-section
    margin-bottom: 30px
    .diet-card
      .diet-card-header
        .diet-card-image
          width: 100%
          height: 180px
          object-fit: cover
          object-position: center center
    .diet-card-body
      font-size: 12px
      text-align: center
      background-color: #E9E7D3
      padding: 14px 0
  .line-section
    color: white
    margin-bottom: 30px
    .line-image
      width: 100%
    .line-title
      font-weight: bold
      margin-bottom: 10px
    .line-description
      font-size: 12px
      div
        margin-bottom: 10px
  .diet-conclusion
    text-align: center
    color: white
    padding: 20px 0
    border: 2px solid white
    .conclusion-title
      font-size: 20px
      font-weight: bold
      margin-bottom: 15px
    .conclusion-detail
      font-size: 14px
@media screen and (min-width: $pc-width)
  #diet
    .section-catch
      padding-top: 30px
      margin-bottom: 30px
      .catch-image
        height: 240px
      .catch-text
        .catch-title
          font-size: 32px
        .catch-description
          font-size: 20px
    .section-title
      font-size: 32px
      margin-bottom: 30px
    .diet-section
      width: 800px
      .diet-card
        .diet-card-header
          .diet-card-image
            height: 400px
      .diet-card-body
        font-size: 20px
    .line-section
      width: 800px
      .line-title
        font-size: 28px
      .line-description
        font-size: 16px
    .diet-conclusion
      width: 800px
      margin: 0 auto
      .conclusion-title
        font-size: 32px
      .conclusion-detail
        font-size: 20px
</style>