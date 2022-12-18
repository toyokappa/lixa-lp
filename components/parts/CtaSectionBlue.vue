<template lang="pug">
.cta-section-blue
  .section-area
  .section-text
    .first-text
      div
        span.emphasis-lg フォーム
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

<style lang="sass" scoped>
.cta-section-blue
  text-align: center
  letter-spacing: 0.05em
  margin-bottom: 20px
  position: relative
  .section-area
    width: 100%
    height: 120px
    background: linear-gradient(180deg, #A7D5FF 0%, #68B3F9 39.58%)
    clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)
    padding: 20px
    position: relative
  .section-text
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
      text-shadow: 1px 1px 0 #68B3F9, -1px -1px 0 #68B3F9, -1px 1px 0 #68b3f9, 1px -1px 0 #68b3f9, 0px 1px 0 #68b3f9,  0-1px 0 #68b3f9, -1px 0 0 #68b3f9, 1px 0 0 #68b3f9
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
  .cta-section-blue
    .section-text
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