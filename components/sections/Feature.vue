<template lang="pug">
section#feature
  .section-title
    p
      span トレーニングは
      span.emphasis-red 週2回
    p
      span 女子トレーナーと
      span.emphasis-red 楽しく60分
  .container
    .feature-section.row
      .col-12.col-lg-6.feature-box
        img.feature-image(src="@/assets/images/feature_1.jpg")
        .feature-title 美女トレーナーが密着指導
      .col-12.col-lg-6.feature-detail 所属トレーナーは女子のみ！正しいフォームを密着指導！女子目線でモテるカラダ作りを徹底的にアドバイスします。
    .feature-section.row
      .col-12.col-lg-6.feature-box
        img.feature-image(src="@/assets/images/feature_2.jpg")
        .feature-title 個室なので気にせず通える
      .col-12.col-lg-6.feature-detail 予約制の完全個室なのでプライベートな空間で安心してご利用いただけます。感染対策もバッチリなのでご安心ください。
    .feature-section.row
      .col-12.col-lg-6.feature-box
        img.feature-image(src="@/assets/images/feature_3.jpg")
        .feature-title 初心者向けのプログラムも充実
      .col-12.col-lg-6.feature-detail 筋トレを全くやったことがない！という方でも安心して通えるよう、初心者向けのプログラムもご用意しております。
</template>

<style lang="sass" scoped>
#feature
  color: white
  letter-spacing: 0.05em
  background-color: $dark-color
  padding: 30px 0 10px
  .section-title
    font-size: 20px
    font-weight: bold
    text-decoration: underline
    text-underline-offset: 6px
    text-align: center
    line-height: 1.8
    margin-bottom: 20px
  .emphasis-red
    color: $accent-color
  .feature-section
    font-size: 14px
    margin-bottom: 20px
    .feature-box
      margin-bottom: 10px
      .feature-image
        height: 200px
        width: 100%
        background-color: $base-grey
        object-fit: cover
        object-position: center center
        border: 2px solid $accent-color
      .feature-title
        font-weight: bold
        text-align: center
        color: white
        background-color: $accent-color
        padding: 10px 0
@media screen and (min-width: $pc-width)
  #feature
    .section-title
      font-size: 32px
      margin-bottom: 30px
    .feature-section
      font-size: 18px
      width: 800px
      margin: 0 auto 20px
</style>