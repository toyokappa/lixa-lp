<template lang="pug">
n-link.cta(
  v-scroll-to="'#reserve'"
  to
)
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
.cta
  font-weight: bold
  color: white
  text-decoration: none
  width: 100%
  z-index: 1
  display: block
  background: linear-gradient(to right, #FFC226, $accent-color)
  padding: 10px 20px
  position: relative
  &:hover
    color: white
  .text
    display: inline
    font-size: 14px
  .action
    display: inline
    font-size: 20px
  @include line-move
</style>