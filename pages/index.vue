<template lang="pug">
div
  sections-hero
  sections-trainers(:trainers="trainers")
  sections-problem
  sections-feature
  sections-user-voice
  parts-cta-btn-green
  sections-diet
  parts-cta-btn-green
  sections-program
  sections-trial
  sections-gym-info
</template>

<script>
export default {
  async asyncData({ app }) {
    const trainerRes = await app.$ctfCdaClient.getEntries({
      content_type: "trainer",
      order: "fields.position"
    })
    const trainers = trainerRes.items
    return {
      trainers,
    }
  },
  head: {
    // afimaのトラッキングタグ
    script: [
      { src: "https://storage.googleapis.com/afima_media/js/afima.js" },
      { innerHTML: 'aAS();' },
    ],
    __dangerouslyDisableSanitizers: ['script']
  }
}
</script>