<template lang="pug">
section#program
  .section-title
    p.emphasis-sm 無料体験後の
    p.emphasis-md 正規会員への入会は
    p.emphasis-md シンプルプライス
  .price-section
    table
      tr
        td.emphasis-sm 入会金
        td.price
          span.emphasis-lg.emphasis-red 40,000
          span 円(税込)
      tr
        td.emphasis-sm 2ヶ月コース
        td.price
          span.emphasis-lg.emphasis-red 192,000
          span 円(税込)
  .proposal
    p
      span 2ヶ月で
      span.emphasis-red 理想のカラダ
      span を手に入れる。
    p 体質を改善し、健康で太りにくく
    p
      span.emphasis-red かっこいいモテボディ
      span を作りましょう！
  .next-program
    .next-title 更にその先へ...
    .emphasis-sm
      p 2ヶ月コースを無事に終了した方に向けて
      p 特別な専用コースもご用意しております。
</template>

<style lang="sass" scoped>
#program
  text-align: center
  letter-spacing: 0.05em
  padding: 30px 0 0
  .emphasis-md
    font-size: 20px
    font-weight: bold
  .emphasis-lg
    font-size: 32px
  .emphasis-red
    color: $accent-color
  .section-title
    margin-bottom: 30px
  .price-section
    padding: 0 20px
    margin-bottom: 30px
    table
      font-weight: bold
      width: 100%
      .price
        text-align: right
  .proposal
    font-weight: bold
    margin-bottom: 30px
  .next-program
    font-weight: bold
    color: white
    background-color: $dark-color
    padding: 30px 0
    .next-title
      font-size: 20px
      margin-bottom: 10px
@media screen and (min-width: $pc-width)
  #program
    .emphasis-sm
      font-size: 20px
    .emphasis-md
      font-size: 28px
    .emphasis-lg
      font-size: 48px
    .price-section
      padding: 0 20px
      margin-bottom: 30px
      table
        width: 420px
        margin: 0 auto
    .proposal
      font-size: 24px
    .next-program
      .next-title
        font-size: 32px
</style>