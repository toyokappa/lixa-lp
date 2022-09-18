<template lang="pug">
footer
  .footer-menu.d-flex
    .ads
      a(href="#")
        img(src="@/assets/images/ads-recruit.png" alt="求人バナー")
    ul.main-menu
      li.menu-item(v-for="menu in menuList" :key="menu.en")
        a.menu-link(href="#") {{ menu.ja }}
    ul.sub-menu
      li.menu-item(v-for="menu in subMenuList" :key="menu.text")
        a(
          :href="menu.link"
          :target="menu.external ? '_blank' : null"
          :rel="menu.external ? 'noopener' :  null"
        ).menu-link {{ menu.text }}
  .copyrights
    span.me-1 &copy;
    span.company.me-1 LIXA
    span 2022
</template>

<script>
export default {
  data() {
    return {
      subMenuList: [
        {
          text: "オープン前予約",
          link: "#",
        },
        {
          text: "運営者情報",
          link: "#",
        },
        {
          text: "プライバシーポリシー",
          link: "https://lixa.notion.site/4bb22e94aeab48b0a5f977f3f64e6b96",
          external: true
        }
      ]
    }
  },
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