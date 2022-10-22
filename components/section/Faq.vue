<template lang="pug">
section#faq.main-section
  h2.section-title よくあるご質問
  .container-fluid.gx-0
    .row.gx-0
      .offset-lg-2.col-lg-8.offset-1.col-10
        .faq-list
          .faq-item(v-for="faq in faqList" :key="faq.question")
            h3.section-subtitle.question Q. {{ faq.fields.question }}
            .answer
              span.me-2 A.
              span {{ faq.fields.answer }}
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
      margin-bottom: 20px
    .answer
      line-height: 1.75
    &:last-child
      margin-bottom: 0
</style>