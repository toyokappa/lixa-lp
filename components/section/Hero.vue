<template lang="pug">
section#hero
  img.hero-image(src="@/assets/images/hero.jpeg")
  h1.main-copy
    span 群馬初、女性トレーナーのみ！
    span 男性専用パーソナルジム
  .sub-copy 女性目線の徹底指導で"モテ"ボディメイク
  .open-info
    div
      span.value 2023
      span.unit 年
      span.value 1
      span.unit 月中旬、
    div
      span.value 前橋
      span.unit にオープン予定！
  parts-cta-button(:withFree="withFree")
</template>

<script>
export default {
  props: {
    withFree: {
      type: Boolean,
      default: false,
      required: false,
    }
  },
}
</script>

<style lang="sass" scoped>
#hero
  position: relative
  .hero-image
    width: 100%
    height: auto
    @include media-breakpoint-down(md)
      height: 480px
      object-fit: cover
      object-position: center center
  .main-copy
    font-size: 24px
    font-weight: bold
    color: white
    line-height: 1.5
    padding: 15px 40px 15px 30px
    position: absolute
    bottom: 100px
    left: -15px
    margin-bottom: 0
    overflow: hidden
    z-index: 1
    @include media-breakpoint-down(md)
      font-size: 16px
      bottom: 210px
      span
        display: block
    &::before
      @include slash-bg
      background-color: $accent-color
      transform: skewX(-20deg) translateX(-15px)
      z-index: -1
  .sub-copy
    font-size: 20px
    font-weight: bold
    color: $accent-color
    padding: 15px 40px 15px 30px
    position: absolute
    bottom: 25px
    left: -15px
    overflow: hidden
    z-index: 1
    @include media-breakpoint-down(md)
      font-size: 14px
      bottom: 145px
    &::before
      @include slash-bg
      background-color: rgba(255, 255, 255, 0.8)
      transform: skewX(-20deg) translateX(-15px)
      z-index: -1
  .open-info
    font-weight: bold
    @include media-breakpoint-up(lg)
      text-align: right
      text-shadow: 3px 3px 0 white
      line-height: 1.2
      position: absolute
      bottom: 200px
      right: 30px
      z-index: 1
      .value
        font-size: 40px
      .unit
        font-size: 32px
    @include media-breakpoint-down(md)
      padding: 10px 20px
      div
        display: inline
        .value
          font-size: 24px
        .unit
          font-size: 16px
</style>