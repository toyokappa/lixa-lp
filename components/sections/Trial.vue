<template lang="pug">
div
  parts-gold-title
    p.caption その前に、あなたの人生を変える
    p.emphasis-md 無料体験のご案内
  section#trial
    .emphasis-md.mb-2 無料体験では何をやる？
    .caption.mb-2.mb-lg-4 60分間で下記の3ステップを体験いただきます。
    .container.step-section
      parts-step-card(
        v-for="step in stepList"
        :key="step.number"
        :stepNumber="step.number"
        :stepImage="step.image"
        :stepTexts="step.texts"
      )
    .container.campaign-section
      parts-campaign-card
    parts-cta-btn-red
</template>

<script>
import constants from "@/utils/constants"

export default {
  data() {
    return {
      stepList: constants.stepList
    }
  }
}
</script>

<style lang="sass" scoped>
.caption
  font-size: 14px
.emphasis-md
  font-size: 20px
  font-weight: bold
#trial
  text-align: center
  letter-spacing: 0.05em
  padding: 30px 0
  .step-section
    margin-bottom: 30px
  .campaign-section
    margin-bottom: 40px
@media screen and (min-width: $pc-width)
  .caption
    font-size: 18px
  .emphasis-md
    font-size: 32px
  #trial
    .step-section
      width: 800px
    .campaign-section
      margin-bottom: 40px
</style>