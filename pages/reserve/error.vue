<template lang="pug">
.complete
  img.complete-image(src="@/assets/images/reserve_error.png")
  .complete-title 申込に失敗しました
  .complete-text
    p この度は誠に申し訳ございません。
    p 申込処理中にエラーが発生し
    p.mb-3 申込に失敗しました。
    p 原因の究明に少しお時間を
    p.mb-3 頂く場合がございます。
    p もしよろしければLINEもしくはお電話にて
    p.mb-3 無料体験をお申し込みください。
  a.reserve-link.mb-3(
    href="https://lin.ee/8YeaWSz"
    target="_blank"
    rel="noopener"
  ) LINEで申し込む方はこちらから
  a.reserve-link.mb-3(
    href="tel:08070048979"
  ) お電話で申し込む方はこちらから
</template>

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
  .reserve-link
    display: block
    color: $accent-color
    text-decoration: none
</style>

<script>
export default {
  head: {
    title: `無料体験申込エラー | ${process.env.projectName}`
  }
}
</script>