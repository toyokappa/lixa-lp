<template lang="pug">
.campaign-card
  .campaign-card-text
    p.emphasis-md.mb-2 LIXAグランドオープン記念！
    p
      span.emphasis-md 2023
      span 年
      span.emphasis-md 1
      span 月末までに
    p 無料体験ご参加の方へ
    p.emphasis-md
      span もれなく入会金が
      span.emphasis-lg 0
      span 円に！
</template>

<style lang="sass" scoped>
.campaign-card
  background-color: $dark-color
  padding: 30px 0 20px
  .emphasis-md
    font-size: 20px
    font-weight: bold
  .emphasis-lg
    font-size: 36px
  .campaign-card-text
    background: $gold-gradient
    background-clip: text
    -webkit-text-fill-color: transparent
@media screen and (min-width: $pc-width)
  .campaign-card
    width: 800px
    margin: 0 auto
    .emphasis-md
      font-size: 28px
    .emphasis-lg
      font-size: 48px
</style>
