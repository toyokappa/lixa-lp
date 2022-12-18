<template lang="pug">
.cta-btn-tel
  a.btn-area(
    href="tel:08070048979"
    @click="() => trackBtnClick()"
  )
    .btn-text
      .first-text
        div
          span.emphasis-lg お電話
          span で
        div
          span 申し込む
      .second-text
        .d-flex.align-items-center
          span.emphasis-circle.me-1 簡単
          div
            span.emphasis-md 30
            span 秒で完了！
</template>

<script setup>
const trackBtnClick = () => {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    'trackReserve': `/reserve/click_tel_button`,
    'event': 'loadready',
  })
}
</script>

<style lang="sass" scoped>
.cta-btn-tel
  text-align: center
  letter-spacing: 0.05em
  .btn-area
    display: block
    color: inherit
    text-decoration: none
    width: 340px
    height: 110px
    background: $red-gradient
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    border-radius: 10px
    position: relative
    margin: 0 auto
    .btn-text
      .emphasis-lg
        font-size: 48px
        color: #ffe0a4
      .emphasis-md
        font-size: 24px
      .emphasis-circle
        font-size: 12px
        color: white
        background-color: black
        text-shadow: none
        padding: 4px 6px
        border-radius: 100%
        border: 1px white solid
      .first-text
        color: white
        font-size: 24px
        font-weight: bold
        line-height: 1.25
        text-align: center
        text-shadow: $text-border-red
        width: 100%
        position: absolute
        top: -20px
        right: 50%
        transform: translateX(50%)
      .second-text
        font-size: 14px
        font-weight: bold
        text-shadow: $text-border-white
        position: absolute
        top: 70px
        right: 50%
        transform: translateX(50%)
@media screen and (min-width: $pc-width)
  .cta-btn-tel
    .btn-area
      display: block
      width: 640px
      height: 110px
      .btn-text
        .emphasis-lg
          font-size: 64px
        .emphasis-md
          font-size: 40px
        .emphasis-circle
          font-size: 20px
          color: white
          border: 2px white solid
        .first-text
          font-size: 40px
          div
            display: inline
        .second-text
          font-size: 24px
          top: 50px
</style>