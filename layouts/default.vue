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
</style>