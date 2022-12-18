<template lang="pug">
section#trainers
  h2.section-title
    p アナタとトレーニングを共にする
    p.emphasis-md
      span.emphasis-yellow 美女トレーナー
      span たち
  .container.mb-4.mb-lg-5
    .trainer-list.row.g-3
      .col-6.col-lg-3(v-for="trainer in trainers" :key="trainer.sys.id")
        .trainer(@click="showModal(trainer)")
          img(:src="trainerPhoto(trainer)")
          .name {{ trainer.fields.name }}
  h3.cta-text
    p 彼女たちと楽しく
    p トレーニングしませんか？
  parts-cta-btn-red
  .trainer-modal.modal(v-show="modalVisible")
    .modal-dialog.modal-lg.modal-dialog-centered
      .modal-content.overflow-hidden
        .modal-body.p-0
          .container-fluid.position-relative(v-if="currentTrainer")
            .row
              .col-lg-6.p-0.position-relative
                img.photo(:src="trainerPhoto(currentTrainer)")
              .col-lg-6.p-3
                .name {{ currentTrainer.fields.name }}
                .title.mb-3 {{ currentTrainer.fields.title }}
                .profile(v-text="currentTrainer.fields.profile" style="white-space: pre-wrap;")
            img.close(
              src="@/assets/images/close.svg"
              @click="modalVisible = false"
            )
</template>

<script>
import noTrainerPhoto from "@/assets/images/no_trainer_photo.png"

export default {
  props: {
    trainers: {
      type: Array,
      required: true
    }
  },
  methods: {
    trainerPhoto(trainer) {
      return trainer.fields.photo?.fields.file.url || noTrainerPhoto
    }
  }
}
</script>

<style lang="sass" scoped>
#trainers
  padding-bottom: 30px
  letter-spacing: 0.05em
  .section-title
    font-size: 12px
    font-weight: bold
    text-align: center
    line-height: 1.4
    color: white
    background-color: $accent-color
    width: 100%
    clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)
    padding: 20px
    margin-bottom: 30px
    .emphasis-md
      font-size: 16px
    .emphasis-yellow
      color: $emphasis-yellow
  .trainer-list
    .trainer
      position: relative
      img
        width: 100%
        height: 200px
        object-fit: cover
        object-position: center center
      .name
        font-size: 16px
        font-weight: bold
        color: white
        background-color: #000000aa
        padding: 5px 10px
        position: absolute
        bottom: 0px
        left: 0px
  .cta-text
    font-size: 16px
    font-weight: bold
    text-align: center
    line-height: 1.4
    margin-bottom: 30px
.trainer-modal
  display: block
  background-color: #000000da
  .photo
    width: 100%
    height: auto
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
    font-size: 14px

@media screen and (min-width: $pc-width)
  #trainers
    .section-title
      font-size: 24px
      width: 100%
      padding: 20px
      margin-bottom: 30px
      .emphasis-md
        font-size: 32px
    .trainer-list
      .trainer
        img
          width: 100%
          height: 400px
    .cta-text
      font-size: 32px
      margin-bottom: 50px
</style>