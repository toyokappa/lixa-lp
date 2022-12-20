<template lang="pug">
section#reserveForm
  parts-cta-section-blue
  .container
    .reserve-description
      p フォームでのお申込み後に担当より
      p 体験日時の調整のご連絡を差し上げます。
    validation-observer(
        v-slot="{ invalid }"
        tag="form"
        @submit.prevent="sendMail"
        ref="reserveForm"
      )
        .mb-4
          validation-provider(
            v-slot="{ errors }"
            rules="required"
            name="お名前"
          )
            label.form-label(for="reseveName")
              span.me-2 お名前
              span.badge.bg-original 必須
            input#reseveName.form-control(
              type="text"
              :class="{ 'is-invalid': errors[0] }"
              v-model="reserveForm.name"
              @focus="formClicked=true"
            )
            .invalid-feedback(v-show="errors[0]") {{ errors[0] }}
        .mb-4
          validation-provider(
            v-slot="{ errors }"
            rules="required|email"
            name="メールアドレス"
          )
            label.form-label(for="reseveEmail")
              span.me-2 メールアドレス
              span.badge.bg-original 必須
            input#reseveEmail.form-control(
              type="email"
              :class="{ 'is-invalid': errors[0] }"
              v-model="reserveForm.email"
              @focus="formClicked=true"
            )
            .invalid-feedback(v-show="errors[0]") {{ errors[0] }}
        .mb-4
          validation-provider(
            v-slot="{ errors }"
            rules="required"
            name="お電話番号"
          )
            label.form-label(for="reseveTel")
              span.me-2 お電話番号
              span.badge.bg-original 必須
            input#reseveEmail.form-control(
              type="tel"
              :class="{ 'is-invalid': errors[0] }"
              v-model="reserveForm.tel"
              @focus="formClicked=true"
            )
            .invalid-feedback(v-show="errors[0]") {{ errors[0] }}
        .mb-4
          label.form-label(for="reseveMessage") ご質問など
          textarea#reseveMessage.form-control(
            rows="5"
            v-model="reserveForm.message"
            @focus="formClicked=true"
          )
        .mb-4
          validation-provider(
            v-slot="{ errors }"
            rules="accept"
            name="プライバシーポリシーへの同意"
          )
            .form-check
              input#reservePolicy.form-check-input(
                type="checkbox"
                :class="{ 'is-invalid': errors[0] }"
                v-model="reserveForm.policy"
              )
              label.form-check-label(for="reservePolicy")
                a.policy-link(
                  href="https://lixa.notion.site/4bb22e94aeab48b0a5f977f3f64e6b96"
                  target="_blank"
                  rel="noopener"
                ) プライバシーポリシー
                span に同意します。
              .invalid-feedback(v-show="errors[0]") {{ errors[0] }}
        button.btn-complete(
          type="submit"
          :disabled="invalid"
        ) 上記の内容で申し込む
</template>

<script>
export default {
  props: {
    isBase: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      reserveForm: {
        name: "",
        email: "",
        tel: "",
        message: "",
        policy: false,
      },
      formClicked: false
    }
  },
  methods: {
    async sendMail() {
      const { name, email, tel, message } = this.reserveForm;
      this.$nuxt.$loading.start();

      const uuid = Math.random().toString(32).substring(2)
      const mailOption = {
        from: `${process.env.projectName} 無料体験申込みフォーム <info@${process.env.host}>`,
        to: [email],
        bcc: [process.env.mailBcc],
        subject: `【${process.env.projectName}】無料体験申込みを受け付けました`,
        text: `
以下の内容でホームページより無料体験申込みを受け付けました。
送信いただいた情報をもとに担当から折り返しますので今しばらくお待ち下さい。

---
# お名前
${name} 様

# メールアドレス
${email}

# お電話番号
${tel}

# 内容
${message}

# お問い合わせ番号
${uuid}
---

引き続き${process.env.projectName}をよろしくおねがいします！

※ コチラのメールへの返信は受け付けておりません。

====================================

# ${process.env.projectName} 公式サイト
https://${process.env.domain}

====================================
`,
      };
      try {
        await this.appendCustomer()
        await this.$mgClient.messages.create(
          `mg.${process.env.host}`,
          mailOption
        );
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
          'trackReserve': '/reserve/complete',
          'event': 'loadready',
        })
        this.$router.push(`/reserve/complete/?uuid=${uuid}`)
      } catch (err) {
        this.$router.push(`/reserve/error/`)
        console.log(err);
        throw err;
      } finally {
        this.$nuxt.$loading.finish();
      }
    },
    appendCustomer() {
      const { name, email, tel, message } = this.reserveForm;
      this.$ctfCmaClient.createEntry(
        'customer',
        {
          fields: {
            name: {
              'en-US': name,
            },
            email: {
              'en-US': email,
            },
            tel: {
              'en-US': tel,
            },
            message: {
              'en-US': message,
            },
            category: {
              'en-US': 'reserve',
            }
          }
        }
      )
    },
    resetForm() {
      this.reserveForm = {
        name: "",
        email: "",
        tel: "",
        message: "",
        policy: false
      };
      this.$refs.reserveForm.reset()
    },
  },
  watch: {
    formClicked: () => {
      window.dataLayer = window.dataLayer || []
      dataLayer.push({
        'trackReserve': '/reserve/input',
        'event': 'loadready',
      })
    }
  }
}
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