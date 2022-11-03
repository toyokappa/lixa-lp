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
  @include media-breakpoint-up(lg)
    padding: 20px 40px
    border-radius: 5px
    box-shadow: 10px 8px black

    position: absolute
    bottom: 30px
    right: 40px
    .text
      font-size: 24px
    .cta-set
      .limit
        .value
          font-size: 40px
        .unit
          font-size: 24px
  @include media-breakpoint-down(md)
    display: block
    padding: 10px 20px
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