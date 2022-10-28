<template lang="pug">
section#faq.main-section
  h2.section-title よくあるご質問
  .container-fluid.gx-0
    .row.gx-0
      .offset-lg-3.col-lg-6.offset-1.col-10
        .faq-list
          .faq-item(v-for="faq in faqList" :key="faq.question")
            h3.section-subtitle.question Q. {{ faq.fields.question }}
            .answer
              span.me-2 A.
              span(v-text="faq.fields.answer" style="white-space: pre-wrap;")
</template>

<script>
export default {
  props: {
    faqList: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="sass" scoped>
.faq-list
  .faq-item
    margin-bottom: 40px
    .question
      line-height: 1.75
    .answer
      display: flex
      line-height: 1.75
    &:last-child
      margin-bottom: 0
</style>