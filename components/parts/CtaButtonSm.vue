<template lang="pug">
n-link.cta(
  v-scroll-to="scrollOptions"
  to
)
  .cta-set
    .text {{ ctaText }}
    .action {{ ctaAction }}
  .text 予約フォームはコチラ
</template>

<script>
export default {
  props: {
    onStart: {
      type: Function,
      required: false
    },
    withFree: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    scrollOptions() {
      const options = { el: '#reserve' }
      if (this.onStart) options.onStart = () => this.onStart()

      return options
    },
    ctaText() {
      return this.withFree ? '今ならオープン前予約で' : 'オープン前予約で'
    },
    ctaAction() {
      return this.withFree ? '入会金が無料に!!' : 'オトクな特典をGET!!'
    },
  }
}
</script>

<style lang="sass" scoped>
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
</style>