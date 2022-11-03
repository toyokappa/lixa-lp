<template lang="pug">
header.header-nav.navbar.navbar-expand-lg.fixed-top
  nav.container-fluid.px-0
    .navbar-bland.logo
      n-link(v-scroll-to="'#hero'" to) LIXA
    .collapse-menu
      .navbar-nav.mx-auto.menu
        .nav-item(v-for="menu in menuList" :key="menu.en")
          n-link.nav-link.px-4.py-0(v-scroll-to="menu.link" to)
            .text-en {{ menu.en }}
            .text-ja {{ menu.ja }}
    .navbar-bland.cta
      n-link(v-scroll-to="'#reserve'" to) {{ cta}}
    .menu-toggler
      client-only
        tasty-burger-button(
          type="spin"
          color="black"
          size="s"
          ref="burger"
          :active="isActive"
          @toggle="toggleNavMenu"
        )
  #navbarMenu(ref="navbarMenu")
    ul.navbar-nav(@click="toggleActive")
      li.nav-item(v-for="menu in menuList" :key="menu.en")
        n-link.nav-link.px-4.py-0(v-scroll-to="menu.link" to)
          .text-ja {{ menu.ja }}
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  props: {
    menuList: {
      type: Array,
      required: true,
    },
    cta: {
      type: String,
      default: 'オープン前予約'
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
    toggleNavMenu(active) {
      const nav = this.$refs.navbarMenu
      active ? nav.classList.add("visible") : nav.classList.remove("visible")
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
    padding: 0
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
        transform: skewX(-20deg) translateX(-15px)
    @include media-breakpoint-down(md)
      margin-left: 10px
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
    display: flex
    align-items: center
    justify-content: center
    overflow: hidden
    overflow: hidden
    white-space: nowrap
    position: relative
    @include media-breakpoint-up(lg)
      width: 250px
      height: 60px
    @include media-breakpoint-down(md)
      width: 160px
      height: 60px
      padding-left: 10px
      margin-left: auto
    &::before
      @include slash-bg
      background-color: $accent-color
      transform: skewX(-20deg) translateX(15px)
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
  .menu-toggler
    display: none
  #navbarMenu
    display: none
  @include media-breakpoint-down(md)
    .collapse-menu
      display: none
    .menu-toggler
      display: block
      padding: 0 20px
    #navbarMenu
      display: block !important
      position: fixed
      top: 60px
      left: 50%
      transform: translateX(-50%)
      width: 100%
      background-color: black
      visibility: hidden
      opacity: 0
      transition: 0.3s
      &.visible
        visibility: visible
        opacity: 1
      .navbar-nav
        width: 100%
        padding: 0 20px
        .nav-item
          padding: 15px 0
          border-bottom: 1px solid $base-grey
          margin-left: 0 !important
          &:last-child
            border-bottom: none
          .nav-link
            display: flex
            align-items: center
            justify-content: center
            color: white
            .text-ja
              font-size: 16px
</style>