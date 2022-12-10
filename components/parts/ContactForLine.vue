<template lang="pug">
.contact-for-tel
  a.line.d-flex.align-items-center.justify-content-center.mb-3(
    href="https://lin.ee/8YeaWSz"
    target="_blank"
    rel="noopener"
    @click="trackLineClick()"
  )
    img(src="@/assets/images/line.png")
    .action LINEでのお問い合わせはコチラ
</template>

<script>
export default {
  props: {
    trackCd: {
      type: String,
      required: false,
      default: 'reserve'
    }
  },
  methods: {
    trackLineClick() {
      window.dataLayer = window.dataLayer || []
      dataLayer.push({
        'trackReserve': `/${this.trackCd}/click_line_button`,
        'event': 'loadready',
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.contact-for-tel
  text-align: center
  .line
    color: inherit
    text-decoration: none
    background-color: #06c755
    width: 300px
    padding: 10px
    border-radius: 5px
    margin: 0 auto
    img
      width: 36px
      height: auto
    .action
      color: white
      font-weight: bold
</style>