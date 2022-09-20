<template lang="pug">
section#faq.main-section
  h2.section-title よくあるご質問
  .container-fluid.gx-0
    .row.gx-0
      .offset-lg-2.col-lg-8.offset-1.col-10
        .faq-list
          .faq-item(v-for="faq in faqList" :key="faq.question")
            h3.question Q. {{ faq.question }}
            .answer
              span.me-2 A.
              span {{ faq.answer }}
</template>

<script>
export default {
  data() {
    return {
      faqList: [
        {
          question: "食事指導はありますか？",
          answer: "はい、食事指導はあります。「食べて痩せる」をコンセプトに、摂取カロリーと消費カロリーのバランスを管理する方針を取っています。"
        },
        {
          question: "トレーニング時の持ち物はありますか？",
          answer: "LIXAではトレーニングウェア、シューズ、タオル、プロテインなど必要なものはすべて無料貸出し & 無料提供しております。"
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.faq-list
  .faq-item
    margin-bottom: 40px
    .question
      font-size: 24px
      font-weight: bold
      margin-bottom: 20px
    .answer
      line-height: 1.75
    &:last-child
      margin-bottom: 0
</style>