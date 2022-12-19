<template lang="pug">
.complete
  img.complete-image(src="@/assets/images/complete.png")
  .complete-title 申込が完了しました
  .complete-text
    p この度は無料体験へお申し込みいただき
    p.mb-3 誠にありがとうございました。
    p 担当よりご連絡いたしますので
    p.mb-3 今しばらくお待ち下さい。
    p このままページを閉じていただいて
    p.mb-3 問題ございません。
    p トップページへ戻られる方は
    p 下記のリンクをクリックしてください。
  nuxt-link.back-link(to="/") トップページへ戻る
</template>

<script>
export default {
  head() {
    // afimaのCVタグ
    return {
      title: `無料体験申込完了 | ${process.env.projectName}`,
      script: [
        { src: "https://storage.googleapis.com/afima_media/js/afima.js" },
        { innerHTML: `cCV(942, 0, "${this.$route.query.uuid}");` }
      ],
       __dangerouslyDisableSanitizers: ['script']
    }
  }
}
</script>

<style lang="sass" scoped>
.complete
  text-align: center
  letter-spacing: 0.05em
  padding: 50px 0 80px
  .complete-image
    margin-bottom: 30px
  .complete-title
    font-size: 24px
    font-weight: bold
    margin-bottom: 30px
  .complete-text
    margin-bottom: 30px
  .back-link
    color: $accent-color
    text-decoration: none
</style>