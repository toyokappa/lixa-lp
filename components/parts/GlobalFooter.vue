<template lang="pug">
footer
  .container
    .footer-menu.row.gy-lg-0.gy-4
      .col-lg-7.col-12
        a.ads(href="https://en-gage.net/lixa/" target="_blank" rel="noopener")
          img.ads-recruit(src="@/assets/images/ads-recruit.png" alt="求人バナー")
      .col-lg-5.col-12
        .row
          .col-6
            ul.main-menu
              li.menu-item(v-for="menu in menuList" :key="menu.en")
                n-link.menu-link(v-scroll-to="menu.link" to) {{ menu.ja }}
          .col-6
            ul.sub-menu
              li.menu-item
                n-link.menu-link(v-scroll-to="'#reserve'" to) {{ cta }}
              li.menu-item
                a.menu-link(
                  href="https://lixa.notion.site/c09f75afdb2540f58248f08c09ffb6dd"
                  target="_blank"
                  rel="noopener"
                ) 運営者情報
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
    },
    cta: {
      type: String,
      default: 'オープン前予約'
    }
  }
}
</script>

<style lang="sass" scoped>
footer
  width: 100%
  background-color: black
  padding: 50px 0 20px
  @include media-breakpoint-down(md)
    padding: 30px 0 20px
    font-size: 14px
  .footer-menu
    margin-bottom: 40px
    .ads, .main-menu, .sub-menu
      margin-bottom: 0
    .main-menu, .sub-menu
      padding: 0
      .menu-item
        list-style: none
        margin-bottom: 15px
        .menu-link
          color: white
          text-decoration: none
        &:last-child
          margin-bottom: 0
    .ads
      .ads-recruit
        max-width: 100%
  .copyrights
    text-align: center
    font-size: 12px
    color: white
    .company
      font-weight: bold
</style>