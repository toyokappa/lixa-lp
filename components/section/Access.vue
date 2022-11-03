<template lang="pug">
section#access.main-section(:class="{ 'bg-base': isBase }")
  h2.section-title 店舗アクセス
  .map
    .tmp-map
      img(src="@/assets/images/map.png")
      .open-info
        div
          span.value 2023
          span.unit 年
          span.value 1
          span.unit 月中旬
        div
          span.value 前橋
          span.unit にオープン予定！
    parts-cta-button(:withFree="withFree")
</template>

<script>
export default {
  props: {
    withFree: {
      type: Boolean,
      default: false,
      required: false,
    },
    isBase: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="sass">
.map
  position: relative
  .tmp-map
    position: relative
    &::after
      content: ''
      background-color: rgba(black, 0.3)
      width: 100%
      height: 100%
      position: absolute
      top: 0
      bottom: 0
      right: 0
      left: 0
    img
      width: 100%
      height: auto
      @include media-breakpoint-down(md)
        height: 240px
        object-fit: cover
        object-position: center center
    .open-info
      width: 100%
      font-weight: bold
      text-align: center
      color: white
      line-height: 1.2
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      z-index: 1
      text-shadow: 4px 4px 0 black
      @include media-breakpoint-down(md)
        text-shadow: 3px 3px 0 black
      .value
        font-size: 56px
        @include media-breakpoint-down(md)
          font-size: 36px
      .unit
        font-size: 40px
        @include media-breakpoint-down(md)
          font-size: 24px
</style>