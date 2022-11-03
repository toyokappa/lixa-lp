<template lang="pug">
n-link.top-cta(v-scroll-to="'#reserve'" to)
  .cta-set
    .text オープン前予約で
    .action 今なら入会金が無料!!
  .text 予約フォームはコチラ
  .cta-animation-box
    .cta-animation
    .cta-animation
    .cta-animation
    .cta-animation
</template>

<style lang="sass" scoped>
.top-cta
  font-weight: bold
  color: white
  text-decoration: none
  z-index: 1
  @include media-breakpoint-up(lg)
    text-align: right
    padding: 20px 20px 20px 50px
    overflow: hidden
    position: absolute
    bottom: 35px
    right: 30px
    &::before
      @include slash-bg
      background: linear-gradient(to right, #FFC226, $accent-color)
      opacity: 0.8
      transform: skewX(-20deg) translateX(28px)
      z-index: -1
      transition: 0.3s
    &:hover::before
      opacity: 1
    .text
      font-size: 20px
    .action
      font-size: 32px
  &:hover
    color: white
  @include media-breakpoint-down(md)
    display: block
    background: linear-gradient(to right, #FFC226, $accent-color)
    padding: 10px 20px
    position: relative
    .text
      display: inline
      font-size: 14px
    .action
      display: inline
      font-size: 20px
    @include line-move
</style>