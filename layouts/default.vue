<template lang="pug">
div
  parts-global-header(:menuList="menuList")
  nuxt
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          en: 'ABOUT',
          ja: 'LIXAとは',
        },
        {
          en: 'TRAINTERS',
          ja: 'トレーナー紹介',
        },
        {
          en: 'PROGRAM',
          ja: 'コース・料金',
        },
        {
          en: 'Q&A',
          ja: 'よくある質問',
        },
        {
          en: 'ACCESS',
          ja: '店舗アクセス',
        },
      ]
    }
  }
}
</script>
