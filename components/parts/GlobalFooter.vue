<template lang="pug">
footer
  .footer-menu.d-flex
    .ads
      a(href="#")
        img(src="@/assets/images/ads-recruit.png" alt="求人バナー")
    ul.main-menu
      li.menu-item(v-for="menu in menuList" :key="menu.en")
        n-link.menu-link(v-scroll-to="menu.link" to) {{ menu.ja }}
    ul.sub-menu
      li.menu-item
        n-link.menu-link(v-scroll-to="'#reserve'" to) オープン前予約
      li.menu-item
        a.menu-link(href="#") 運営者情報
      li.menu-item
        a.menu-link(
          href="https://lixa.notion.site/4bb22e94aeab48b0a5f977f3f64e6b96"
          target="_blank"
          rel="noopener"
        ) プライバシーポリシー
  .copyrights
    span.me-1 &copy;
    span.company.me-1 LIXA
    span 2022
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
footer
  width: 100%
  background-color: black
  padding: 50px 0 20px
  .footer-menu
    justify-content: center
    margin-bottom: 40px
    .ads, .main-menu, .sub-menu
      margin-bottom: 0
    .ads, .main-menu
      margin-right: 60px
    .main-menu, .sub-menu
      .menu-item
        list-style: none
        margin-bottom: 15px
        .menu-link
          color: white
          text-decoration: none
        &:last-child
          margin-bottom: 0
  .copyrights
    text-align: center
    font-size: 12px
    color: white
    .company
      font-weight: bold
</style>