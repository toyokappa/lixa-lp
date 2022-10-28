<template lang="pug">
section#trainers.main-section
  h2.section-title トレーナー紹介
  .container
    .row
      .col-lg-8.offset-lg-2.col-12
        .row.trainers
          .col-lg-3.col-6.trainer.mb-lg-0.mb-5(v-for="trainer in trainers" :key="trainer.sys.id")
            img.photo(:src="trainerPhoto(trainer)" :alt="trainer.fields.name")
            .title {{ trainer.fields.title }}
            .name {{ trainer.fields.name }}
    .text-center
      a(href="https://en-gage.net/lixa/" target="_blank" rel="noopener")
        img.ads-recruit(src="@/assets/images/ads-recruit.png" alt="求人広告")
</template>

<script>
import noTrainerPhoto from '@/assets/images/no-trainer-photo.png'

export default {
  props: {
    trainers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      noTrainerPhoto,
    }
  },
  methods: {
    trainerPhoto(trainer) {
      return trainer.fields.photo?.fields.file.url || this.noTrainerPhoto
    }
  }
}
</script>

<style lang="sass" scoped>
.trainers
  margin-bottom: 80px
  @include media-breakpoint-down(md)
    margin-bottom: 0px
  .trainer
    text-align: center
    .photo
      width: 100%
      max-width: 160px
      height: auto
      margin-bottom: 10px
      border-radius: 50%
    .name
      font-weight: bold
.ads-recruit
  max-width: 100%
</style>