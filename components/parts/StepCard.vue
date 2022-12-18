<template lang="pug">
.step-card
  .step-left
    .step-number step{{ stepNumber }}
    img.step-image(:src="stepImage")
  .step-right
    .step-text
      p(v-for="text in stepTexts" :key="text") {{ text }}
</template>

<script>
export default {
  props: {
    stepNumber: {
      type: Number,
      required: true
    },
    stepImage: {
      type: String,
      required: true
    },
    stepTexts: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.step-card
  display: flex
  align-items: center
  background-color: lightgrey
  padding: 10px 20px
  margin-bottom: 10px
  .step-left
    position: relative
    margin-right: 15px
    .step-number
      font-size: 12px
      font-weight: bold
      background-color: white
      padding: 13px 3px
      border-radius: 50%
      position: absolute
      top: -5px
      left: -15px
    .step-image
      width: 100px
      height: 80px
      background-color: $base-grey
      object-fit: cover
      object-position: center center
  .step-right
    .step-text
      font-size: 14px
      font-weight: bold
      text-align: left
      white-space: nowrap
@media screen and (min-width: $pc-width)
  .step-card
    padding: 10px 20px
    margin-bottom: 20px
    .step-left
      position: relative
      margin-right: 15px
      .step-number
        font-size: 20px
        padding: 18px 5px
      .step-image
        width: 320px
        height: 200px
    .step-right
      .step-text
        font-size: 20px
</style>