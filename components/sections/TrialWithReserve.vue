<template lang="pug">
div
  parts-gold-title
    p.caption あなたの人生を変える
    p.emphasis-md 無料体験のご案内
  section#trial
    .container.campaign-section
      parts-campaign-card
    .emphasis-md.mb-2
      span.emphasis-red LIXA
      span は無料でここまでできます！
    .caption.mb-2 60分間で下記の3ステップを体験いただきます。
    .container.step-section
      parts-step-card(
        v-for="step in stepList"
        :key="step.number"
        :stepNumber="step.number"
        :stepImage="step.image"
        :stepTexts="step.texts"
      )
    parts-cta-btn-line
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
.emphasis-red
  color: $accent-color
#trial
  text-align: center
  letter-spacing: 0.05em
  padding: 30px 0 20px
  .step-section
    margin-bottom: 40px
  .campaign-section
    margin-bottom: 30px
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