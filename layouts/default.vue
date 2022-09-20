<template lang="pug">
div
  parts-global-header(:menuList="menuList")
  nuxt
  parts-global-footer(:menuList="menuList")
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          en: 'ABOUT',
          ja: 'LIXAとは',
          link: '#about',
        },
        {
          en: 'TRAINTERS',
          ja: 'トレーナー紹介',
          link: '#trainers',
        },
        {
          en: 'PROGRAM',
          ja: 'コース・料金',
          link: '#program',
        },
        {
          en: 'Q&A',
          ja: 'よくある質問',
          link: '#faq',
        },
        {
          en: 'ACCESS',
          ja: '店舗アクセス',
          link: '#access',
        },
      ]
    }
  }
}
</script>

<style lang="sass">
body
  font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
.main-section
  padding: 100px 0
  @include media-breakpoint-down(md)
    padding: 75px 0
.section-title
  font-size: 32px !important
  font-weight: bold !important
  text-align: center
  margin-bottom: 90px !important
  @include media-breakpoint-down(md)
    font-size: 28px !important
    margin-bottom: 60px !important
.section-subtitle
  font-size: 24px !important
  font-weight: bold !important
  @include media-breakpoint-down(md)
    font-size: 20px !important
.btn-original
  background-color: $accent-color !important
  color: white !important
  &:hover
    background-color: #CE2121 !important
    color: white !important
.text-original
  color: $accent-color
.bg-original
  background-color: $accent-color
  color: white
.bg-base
  background-color: $base-grey
</style>