<template lang="pug">
div
  parts-global-header(:menuList="menuList")
  section-hero
  section-about(:isBase="true")
  section-trainers(:trainers="trainers")
  section-program(:isBase="true")
  section-faq(:faqList="faqList")
  section-access(:isBase="true")
  section-reserve
  parts-global-footer(:menuList="menuList")
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ app }) {
    const trainerRes = await app.$ctfCdaClient.getEntries({
      content_type: "trainer",
      order: "fields.position"
    })
    const trainers = trainerRes.items

    const faqRes = await app.$ctfCdaClient.getEntries({
      content_type: "faq",
      'fields.category[in]': 'normal',
      order: "fields.position"
    })
    const faqList = faqRes.items

    return {
      trainers,
      faqList,
    }
  },
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

<style lang="sass" scoped>
</style>