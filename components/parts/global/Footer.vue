<template lang="pug">
footer.py-2
  ul.footer-nav
    li
      nuxt-link(to="/terms/") 利用規約
    li
      nuxt-link(to="/policy/") プライバシーポリシー
    li
      nuxt-link(to="/tokusho/") 特定商取引法に基づく表示
  .text-center &copy; LIXA 2022
</template>

<style lang="sass" scoped>
footer
  font-size: 12px
  font-weight: bold
  letter-spacing: 1px
  color: white
  background-color: $dark-color
  .footer-nav
    list-style: none
    text-align: center
    margin: 0
    padding: 10px 0
    li
      margin-bottom: 5px
      a
        color: inherit
        text-decoration: none
</style>