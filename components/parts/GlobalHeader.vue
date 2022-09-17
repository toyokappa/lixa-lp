<template lang="pug">
header.navbar.navbar-expand-lg.fixed-top.bg-black.py-0
  nav.container-fluid.px-0
    .navbar-bland.logo
      a(href="#") LIXA
    .navbar-nav.mx-auto.menu
      .nav-item(v-for="menu in menuList" :key="menu.en")
        a.nav-link.px-4.py-0(href="#")
          .text-en {{ menu.en }}
          .text-ja {{ menu.ja }}
    .navbar-bland.cta
      a(href="#")
        | オープン前予約
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
.logo
  display: flex
  align-items: center
  justify-content: center
  overflow: hidden
  width: 250px
  height: 60px
  position: relative
  &::before
    content: ''
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: white
    transform: skewX(-20deg) translateX(-10px)
    z-index: -1
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
  width: 250px
  height: 60px
  overflow: hidden
  white-space: nowrap
  position: relative
  &::before
    content: ''
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: $accent-color
    transform: skewX(-20deg) translateX(10px)
    z-index: -1
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