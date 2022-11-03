<template lang="pug">
section#program.main-section(:class="{ 'bg-base': isBase }")
  h2.section-title コース・料金
  .container-fluid.gx-lg-4.gx-0
    .row.gx-lg-4.gx-0.gy-lg-0.gy-4
      .offset-lg-1.col-lg-5.col-12
        img.imagine(src="@/assets/images/course.jpeg" alt="2ヶ月後のイメージ")
      .offset-lg-0.col-lg-5.offset-1.col-10
        .section-subtitle 2ヶ月コース（モニター限定）
        h3.section-subtitle.text-original.mb-4 短期集中で理想のモテボディへ。
        .proposal
          div LIXAに60日の時間をください。
          div 体質を改善し、健康で、太りにくく、
          div かっこいい理想の体作りを実現いたします。
        .course
          .row.align-items-center
            .col-4 入会金
            .col-8
              s.value.text-original 40,000
              span.unit 円(税込)
              span.value.mx-2 →
              span.value.text-original 無料
          .row.align-items-center
            .col-4 コース料金
            .col-8
              s.value.text-original 192,000
              span.unit 円(税込)
              span.value.mx-2 →
              span.value.text-original 無料
          .course-menu 全16回 (1回60分)
        .caption ※ デポジットとして40,000円をお預かりさせていただきます。
        .caption ※ デポジットはモニター完遂後にご返金いたします。
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
.imagine
  width: 100%
  height: auto
.proposal
  margin-bottom: 30px
  line-height: 1.75
.course
  padding: 30px 30px 25px
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
  .course-menu
    font-size: 20px
    font-weight: bold
    background-color: $base-grey
    padding: 0 10px
    position: absolute
    top: -16px
    left: 20px
    @include media-breakpoint-down(md)
      font-size: 16px
      top: -14px
.caption
  font-size: 12px
  @include media-breakpoint-up(lg)
    white-space: nowrap
</style>