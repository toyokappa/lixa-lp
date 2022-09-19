<template lang="pug">
header.header-nav.navbar.navbar-expand-lg.fixed-top
  nav.container-fluid.px-0
    .navbar-bland.logo
      n-link(v-scroll-to="'#hero'" to) LIXA
    .navbar-collapse.collapse
      .navbar-nav.mx-auto.menu
        .nav-item(v-for="menu in menuList" :key="menu.en")
          n-link.nav-link.px-4.py-0(v-scroll-to="menu.link" to)
            .text-en {{ menu.en }}
            .text-ja {{ menu.ja }}
    .navbar-bland.cta
      n-link(v-scroll-to="'#reserve'" to)
        | オープン前予約
    button.navbar-toggler
      span.navbar-toggler-icon
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="sass" scoped>
.header-nav
  @include media-breakpoint-up(lg)
    background-color: black
    padding-top: 0 !important
    padding-bottom: 0 !important
  @include media-breakpoint-down(md)
    background-color: white
  .logo
    @include media-breakpoint-up(lg)
      width: 250px
      height: 60px
      display: flex
      align-items: center
      justify-content: center
      overflow: hidden
      position: relative
      &::before
        @include slash-bg
        background-color: white
        transform: skewX(-20deg) translateX(-10px)
    a
      font-size: 32px
      font-weight: bold
      color: $accent-color
      text-decoration: none
  .menu
    white-space: nowrap
    a
      color: white
  .cta
    @include media-breakpoint-up(lg)
      display: flex
      align-items: center
      justify-content: center
      overflow: hidden
      width: 250px
      height: 60px
      overflow: hidden
      white-space: nowrap
      position: relative
      &::before
        @include slash-bg
        background-color: $accent-color
        transform: skewX(-20deg) translateX(10px)
    a
      font-size: 16px
      font-weight: bold
      color: white
      text-decoration: none
  .text-en
    font-size: 16px
    font-weight: bold
  .text-ja
    font-size: 10px
    font-weight: bold
</style>