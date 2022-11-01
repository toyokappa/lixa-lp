<template lang="pug">
section#trainers.main-section
  h2.section-title トレーナー紹介
  .container
    .row
      .col-lg-8.offset-lg-2.col-12
        .row.trainers
          .col-lg-3.col-6.trainer.mb-lg-0.mb-5(
            v-for="trainer in trainers"
            :key="trainer.sys.id"
            @click="showModal(trainer)"
          )
            img.photo(:src="trainerPhoto(trainer)" :alt="trainer.fields.name")
            .title {{ trainer.fields.title }}
            .name {{ trainer.fields.name }}
    .text-center
      a(href="https://en-gage.net/lixa/" target="_blank" rel="noopener")
        img.ads-recruit(src="@/assets/images/ads-recruit.png" alt="求人広告")
  #trainerModal.trainer-modal.modal.fade(ref="trainerModal")
    .modal-dialog.modal-lg.modal-dialog-centered
      .modal-content.overflow-hidden
        .modal-body.p-0
          .container-fluid.position-relative(v-if="currentTrainer")
            .row
              .col-lg-6.p-0.position-relative
                img.photo(:src="trainerPhoto(currentTrainer)")
                parts-cta-button-sm(:onStart="() => trainerModal.hide()")
              .col-lg-6.p-3
                .name {{ currentTrainer.fields.name }}
                .title.mb-3 {{ currentTrainer.fields.title }}
                .profile(v-text="currentTrainer.fields.profile" style="white-space: pre-wrap;")
            img.close(
              src="@/assets/images/close.svg"
              @click="trainerModal.hide()"
            )
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
      currentTrainer: null,
      trainerModal: null,
    }
  },
  mounted() {
    this.trainerModal = new this.$bsModal(this.$refs.trainerModal)
  },
  methods: {
    showModal(trainer) {
      this.currentTrainer = trainer
      this.trainerModal.show()
    },
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
.trainer-modal
  .photo
    width: 100%
    height: auto
  .cta
    font-weight: bold
    color: white
    text-decoration: none
    width: 100%
    z-index: 1
    display: block
    background: linear-gradient(to right, #FFC226, $accent-color)
    padding: 10px 20px

    position: absolute
    bottom: 0px
    left: 0px
    .text
      display: inline
      font-size: 14px
    .action
      display: inline
      font-size: 20px
  .close
    width: 30px
    height: 30px

    position: absolute
    top: 10px
    right: 10px
  .name
    font-size: 24px
    font-weight: bold
  .title
    font-weight: bold
  .profile
</style>