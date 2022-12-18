<template lang="pug">
section#gymInfo
  .gym-info
    .container
      .section-title.text-center.mb-3 店舗情報
      .title 営業時間
      .content.mb-3 7:00〜22:00
      .title 住所
      .content.mb-4
        p 〒371-0842
        p 群馬県前橋市下石倉町12-4
        p AZBL BOXを利用
        p.caption.mt-1 ※ ご予約なしでのご来店はお控えくださいませ。
    .map
      iframe(src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4564.642914470674!2d139.05398959383797!3d36.38047622690952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8a4e5446f4dc5ed!2z44OR44O844K944OK44Or44OI44Os44O844OL44Oz44Kw44K444OgQVpCTCBQUklWQVRF5YmN5qmL5LiL55-z5YCJ5bqXIC8g44Os44Oz44K_44Or44K444OgQVpCTCBCT1jliY3mqYvkuIvnn7PlgInlupc!5e0!3m2!1sja!2sjp!4v1670689512120!5m2!1sja!2sjp" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade")
</template>

<style lang="sass" scoped>
#gymInfo
  color: white
  background-color: $dark-color
  padding: 30px 0 0
  .section-title
    font-size: 20px
    font-weight: bold
  .title
    font-size: 14px
    font-weight: bold
    margin-bottom: 5px
  .content
    font-size: 14px
    a
      color: inherit
  .caption
    font-size: 12px
  .map
    height: 240px
    background-color: $base-grey
@media screen and (min-width: $pc-width)
  #gymInfo
    padding-bottom: 30px
    .gym-info
      width: 800px
      margin: 0 auto
      .section-title
        font-size: 28px
        font-weight: bold
      .title
        font-size: 24px
        font-weight: bold
        margin-bottom: 5px
      .content
        font-size: 20px
      .caption
        font-size: 16px
      .map
        height: 400px
        background-color: $base-grey
</style>