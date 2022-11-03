<template lang="pug">
div
  parts-global-header(:menuList="menuList" cta="モニター応募")
  section-hero-for-monitor
  section-about-monitor
  section-about(:isBase="true")
  section-trainers(:trainers="trainers" :isMonitor="true")
  section-program-for-monitor(:isBase="true")
  section-condition(:conditionList="conditionList")
  section-faq(:faqList="faqList" :isBase="true")
  section-reserve-for-monitor
  parts-global-footer(:menuList="menuList" cta="モニター応募")
</template>

<script>
export default {
  name: 'MonitorPage',
  async asyncData({ app }) {
    const trainerRes = await app.$ctfCdaClient.getEntries({
      content_type: "trainer",
      order: "fields.position"
    })
    const trainers = trainerRes.items

    const faqRes = await app.$ctfCdaClient.getEntries({
      content_type: "faq",
      'fields.category[in]': 'monitor',
      order: "fields.position"
    })
    const faqList = faqRes.items

    const conditionRes = await app.$ctfCdaClient.getEntries({
      content_type: "condition",
      order: "fields.position"
    })
    const conditionList = conditionRes.items

    return {
      trainers,
      faqList,
      conditionList,
    }
  },
  data() {
    return {
      menuList: [
        {
          en: 'ABOUT',
          ja: '募集要項',
          link: '#aboutMonitor',
        },
        {
          en: 'LIXA',
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
          en: 'CONDITION',
          ja: '応募条件',
          link: '#condition',
        },
        {
          en: 'Q&A',
          ja: 'よくある質問',
          link: '#faq',
        },
      ]
    }
  }

}
</script>

<style lang="sass" scoped>
</style>