<template lang="pug">
section#hero
  img.hero-image(src="@/assets/images/hero.jpg")
  h1.main-copy 歳をとってもイケてる男性であり続けるためのパーソナルジム
  .sub-copy 女性目線の徹底指導で"モテ"ボディメイク
  n-link.top-cta(v-scroll-to="'#reserve'" to)
    .text オープン前予約で
    .action オトクな特典をGET!!
    .text 予約フォームはコチラ
</template>

<style lang="sass" scoped>
#hero
  position: relative
  overflow: hidden
  .hero-image
    width: 100%
    height: auto
  .main-copy
    font-size: 24px
    font-weight: bold
    color: white
    line-height: 1.5
    padding: 15px 25px 15px 30px
    position: absolute
    bottom: 100px
    left: -15px
    margin-bottom: 0
    z-index: 1
    &::before
      content: ''
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      background-color: $accent-color
      transform: skewX(-20deg)
      z-index: -1
  .sub-copy
    font-size: 20px
    font-weight: bold
    color: $accent-color
    padding: 15px 25px 15px 30px
    position: absolute
    bottom: 25px
    left: -15px
    z-index: 1
    &::before
      content: ''
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      background-color: rgba(255, 255, 255, 0.8)
      transform: skewX(-20deg)
      z-index: -1
  .top-cta
    text-align: right
    font-weight: bold
    color: white
    text-decoration: none
    padding: 20px 20px 20px 50px
    overflow: hidden
    position: absolute
    bottom: 35px
    right: 30px
    z-index: 1
    .text
      font-size: 20px
    .action
      font-size: 32px
    &::before
      content: ''
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      background: linear-gradient(to right, #FFC226, $accent-color)
      opacity: 0.8
      transform: skewX(-20deg) translateX(28px)
      z-index: -1
      transition: 0.3s
    &:hover::before
      opacity: 1
</style>