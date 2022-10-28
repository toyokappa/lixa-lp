<template lang="pug">
div
  section-hero
  section-about
  section-trainers(:trainers="trainers")
  section-program
  section-faq(:faqList="faqList")
  section-access
  section-reserve
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ app }) {
    const trainerRes = await app.$ctfClient.getEntries({
      content_type: "trainer",
      order: "fields.position"
    })
    const trainers = trainerRes.items

    const faqRes = await app.$ctfClient.getEntries({
      content_type: "faq"
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