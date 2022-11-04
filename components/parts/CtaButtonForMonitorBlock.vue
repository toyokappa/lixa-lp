<template lang="pug">
n-link.cta(v-scroll-to="'#reserve'" to)
  .cta-set
    .text モニター応募締切
    .limit
      span.value 11
      span.unit 月
      span.value 11
      span.unit.me-2 日(金)
      span.value 23:59
      span.unit まで
  .text 応募フォームはコチラ
</template>

<style lang="sass" scoped>
.cta
  color: black
  font-weight: bold
  text-align: right
  text-decoration: none
  background-color: #ffd600
  width: 100%
  display: block
  padding: 10px 20px
  margin: 0 auto

  position: relative
  @include media-breakpoint-up(lg)
    text-align: center
    width: 400px
    border-radius: 5px
  @include media-breakpoint-down(md)
    position: absolute
    bottom: 0
    right: 0
  &:hover
    color: black
  .text
    font-size: 14px
  .cta-set
    .text
      display: inline
      margin-right: 0.25rem
    .limit
      display: inline
      .value
        font-size: 24px
      .unit
        font-size: 12px
</style>