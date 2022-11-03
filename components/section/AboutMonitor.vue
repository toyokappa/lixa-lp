<template lang="pug">
section#aboutMonitor.main-section(:class="{ 'bg-base': isBase }")
  h2.section-title 無料モニター募集について
  .contaier
    .text-center.monitor-description
      p 2023年初旬に「男性専用パーソナルジムLIXA」がオープン致します。
      p そちらに先駆けトレーニングプログラムを試験的に
      p 受けていただく無料モニターを募集いたします。
      p 募集の概要については以下の要項を御覧ください。
    .row
      .offset-lg-3.col-lg-6
        .offer
          .row.align-items-center.mb-2
            .col-4 対象者:
            .col-8 30代〜50代男性
          .row.align-items-center.mb-2
            .col-4 募集人数:
            .col-8 2名
          .row.align-items-center.mb-2
            .col-4 モニター期間:
            .col-8 11月下旬〜翌年1月下旬（約2ヶ月間）
          .row.align-items-center.mb-2
            .col-4 場所:
            .col-8 前橋市内のレンタルジムを利用
          .row.align-items-center.mb-2
            .col-4 料金:
            .col-8 無料
          .offer-title 募集要項
</template>

<script>
export default {
  props: {
    isBase: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="sass" scoped>
.monitor-description
  margin-bottom: 60px
  @include media-breakpoint-down(md)
    margin-bottom: 40px
.offer
  font-size: 20px
  font-weight: bold
  padding: 40px 40px 20px
  border: 3px solid black
  margin-bottom: 10px
  position: relative
  @include media-breakpoint-down(md)
    padding: 20px 20px 15px
  .value
    font-size: 32px
    font-weight: bold
    @include media-breakpoint-down(md)
      font-size: 28px
  .unit
    font-weight: bold
    @include media-breakpoint-down(md)
      font-size: 12px
  .offer-title
    font-size: 20px
    font-weight: bold
    background-color: white
    padding: 0 10px
    position: absolute
    top: -16px
    left: 30px
    @include media-breakpoint-down(md)
      font-size: 16px
      top: -14px
</style>
