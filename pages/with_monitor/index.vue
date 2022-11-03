<template lang="pug">
div
  section-hero-for-monitor(:withFree="true")
  section-about-monitor
  section-about
  section-trainers(:trainers="trainers" :withFree="true")
  section-program-for-monitor
  section-faq(:faqList="faqList")
  section-access(:withFree="true")
  section-reserve
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
      order: "fields.position"
    })
    const faqList = faqRes.items

    return {
      trainers,
      faqList,
    }
  }
}
</script>

<style lang="sass" scoped>
</style>