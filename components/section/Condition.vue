<template lang="pug">
section#condition.main-section.position-relative(:class="{ 'bg-base': isBase }")
  h2.section-title
    .mb-4 モニターへのご応募にあたり
    .section-subtitle 以下の応募条件をご確認くださいませ。
  .container-fluid.gx-0
    .row.gx-0.mb-lg-5.mb-4
      .offset-lg-3.col-lg-6.offset-1.col-10
        .condition-list
          .condition-item(v-for="condition in conditionList" :key="condition.title")
            h3.section-subtitle.title
              img.me-2.checkbox(src="@/assets/images/checkbox.svg")
              span {{ condition.fields.title }}
            .description
              span(v-text="condition.fields.description" style="white-space: pre-wrap;")
  parts-cta-button-for-monitor-block
</template>

<script>
export default {
  props: {
    conditionList: {
      type: Array,
      required: true,
    },
    isBase: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="sass" scoped>
.condition-list
  .condition-item
    margin-bottom: 40px
    .title
      display: flex
      align-items: center
      line-height: 1.75
      .checkbox
        width: 30px
        height: auto
    .description
      line-height: 1.75
    &:last-child
      margin-bottom: 0
</style>