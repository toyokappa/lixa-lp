<template lang="pug">
section#reserveForm
  parts-cta-section-blue
  .container
    .reserve-description
      p フォームでのお申込み後に担当より
      p 体験日時の調整のご連絡を差し上げます。
    //- form(
    //-   @submit.prevent="sendMail"
    //- )
    //-   .mb-4
    //-     label.form-label(for="reserveName")
    //-       span.me-2 お名前
    //-       span.badge.bg-original 必須
    //-     input#reserveName.form-control(
    //-       type="text"
    //-       v-model="name"
    //-       name="name"
    //-       :class="{ 'is-invalid': nameError }"
    //-       @focus="data.formClicked = true"
    //-     )
    //-     .invalid-feedback(v-if="nameError") {{ nameError }}
    //-   .mb-4
    //-     label.form-label(for="reserveEmail")
    //-       span.me-2 メールアドレス
    //-       span.badge.bg-original 必須
    //-     input#reserveName.form-control(
    //-       type="email"
    //-       v-model="email"
    //-       name="email"
    //-       :class="{ 'is-invalid': emailError }"
    //-       @focus="data.formClicked = true"
    //-     )
    //-     .invalid-feedback(v-if="emailError") {{ emailError }}
    //-   .mb-4
    //-     label.form-label(for="reserveMessage") ご質問など
    //-     textarea#reserveMessage.form-control(
    //-       v-model="message"
    //-       name="message"
    //-       rows="5"
    //-       @focus="data.formClicked = true"
    //-     )
    //-   .mb-4
    //-     .form-check
    //-       input#reservePolicy.form-check-input(
    //-         type="checkbox"
    //-         v-model="policy"
    //-         name="policy"
    //-         :class="{ 'is-invalid': policyError }"
    //-       )
    //-       label.form-check-label(for="reservePolicy")
    //-         a.policy-link(
    //-           href="https://lixa.notion.site/4bb22e94aeab48b0a5f977f3f64e6b96"
    //-           target="_blank"
    //-           rel="noopener"
    //-         ) プライバシーポリシー
    //-         span に同意します。
    //-       .invalid-feedback.mb-2(v-if="policyError") {{ policyError }}
    //-   button.btn-complete(
    //-     type="submit"
    //-     :disabled="!meta.valid"
    //-   ) 上記の内容で申し込む
</template>

<script>
</script>

<style lang="sass" scoped>
#reserveForm
  padding: 30px 0
  .bg-original
    background-color: $accent-color
  .reserve-description
    text-align: center
    margin-bottom: 20px
  .policy-link
    color: $accent-color
    text-decoration: none
  .btn-complete
    font-size: 24px
    font-weight: bold
    text-align: center
    letter-spacing: 0.05em
    color: white
    background: $green-gradient
    width: 100%
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    border: none
    border-radius: 10px
    padding: 10px
    &:disabled
      background: lightgrey 
@media screen and (min-width: $pc-width)
  #reserveForm
    .reserve-description
      font-size: 18px
    form
      width: 600px
      margin: 0 auto
      .policy-link
        color: $accent-color
        text-decoration: none
</style>