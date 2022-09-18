<template lang="pug">
section#reserve.main-section
  h2.section-title オープン前予約
  .row
    .offset-2.col-4
      .reserve-explanation
        img(src="@/assets/images/reserve-eyecatch.jpg" alt="予約トップ画像")
        .reserve-merit
          .title オープン前予約のメリット
          .merit-item(v-for="(merit, index) in meritList" :key="merit.title")
            .merit-header
              .merit-number.me-1 {{ index + 1 }}
              .merit-title {{ merit.title }}
            .merit-body
              .merit-description {{ merit.description }}
    .col-4
      form
        .mb-4
          label.form-label(for="reseveName")
            span.me-2 お名前
            span.badge.bg-original 必須
          input#reseveName.form-control(type="text")
        .mb-4
          label.form-label(for="reseveAge")
            span.me-2 ご年齢
            span.badge.bg-original 必須
          .input-group.align-items-center
            input#reseveAge.form-control(type="number")
            span.input-group-text 歳
        .mb-4
          label.form-label(for="reseveEmail")
            span.me-2 メールアドレス
            span.badge.bg-original 必須
          input#reseveEmail.form-control(type="email")
        .mb-4
          label.form-label(for="reseveTel")
            span.me-2 お電話番号
            span.badge.bg-original 必須
          input#reseveTel.form-control(type="tel")
        .mb-4
          label.form-label(for="reseveBody") ご質問など
          textarea#reseveBody.form-control(rows="5")
        .mb-4
          .form-check
            input#reservePolicy.form-check-input(type="checkbox")
            label.form-check-label(for="reservePolicy")
              a.policy-link(
                href="https://lixa.notion.site/4bb22e94aeab48b0a5f977f3f64e6b96"
                target="_blank"
                rel="noopener"
              ) プライバシーポリシー
              span に同意します。
        .d-grid
          button.btn.btn-original.py-2(type="submit") 上記の内容で申し込む
</template>

<script>
export default {
  data() {
    return {
      meritList: [
        {
          title: "優先的な本申込みが可能に！",
          description: "本オープン後に定員を超えた場合、本申込みの制限を掛ける場合がございます。その場合でも優先的に本申込みが可能となります。",
        },
        {
          title: "本申込み時のお得な割引特典をご用意！",
          description: "オープン前予約をいただいた方限定で、本申込み時の割引特典をご用意しております。具体的な内容は後日発表いたします。",
        },
        {
          title: "オープンに向けた最新情報をお届け！",
          description: "オープンに向けて現在鋭意準備中です。安心してご入会いただける様に、準備進捗や重要な情報を定期的にお届けいたします。",
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.reserve-explanation
  overflow: hidden
  img
    width: 100%
    height: auto
  .reserve-merit
    background-color: black
    padding: 0 0 10px 20px
    position: relative
    z-index: 1
    .title
      color: white
      font-size: 20px
      font-weight: bold
      margin-bottom: 10px
    .merit-item
      background-color: $base-grey
      padding: 10px
      margin-bottom: 20px
      .merit-header
        display: flex
        align-items: center
        .merit-number
          color: white
          text-align: center
          background-color: black
          width: 24px
          height: 24px
          border-radius: 50%
          line-height: 22px
          &::before
        .merit-title
          color: $accent-color
          font-weight: bold
      .merit-body
        .merit-description
          font-size: 12px
          font-weight: bold
    &::before
      content: ''
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      background-color: black
      transform: skewY(-7deg) translateY(-35px)
      z-index: -1
.policy-link
  color: $accent-color
  text-decoration: none
</style>