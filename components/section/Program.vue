<template lang="pug">
section#program.main-section.bg-base
  h2.section-title コース・料金
  .container-fluid.gx-0
    .row.gx-lg-4.gx-0.gy-lg-0.gy-4
      .offset-lg-2.col-lg-4.col-12
        img.imagine(src="@/assets/images/course.jpeg" alt="2ヶ月後のイメージ")
      .offset-lg-0.col-lg-4.offset-1.col-10
        .section-subtitle 2ヶ月コース
        h3.section-subtitle.text-original.mb-4 短期集中で理想のモテボディへ。
        .proposal
          div LIXAに60日の時間をください。
          div 体質を改善し、健康で、太りにくく、
          div かっこいい理想の体作りを実現いたします。
        .course
          .row.align-items-center
            .col-5 入会金
            .col-7
              span.value.text-original 40,000
              span.unit 円(税込)
          .row.align-items-center
            .col-5 コース料金
            .col-7
              span.value.text-original 160,000
              span.unit 円(税込)
          .course-menu 全16回 (1回60分)
        .caption ※ LIXAを気に入っていただいた方へ2ヶ月後のコースもご用意しております。
</template>

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
  .value
    font-size: 32px
    font-weight: bold
  .unit
    font-weight: bold
  .course-menu
    font-size: 20px
    font-weight: bold
    background-color: $base-grey
    padding: 0 10px
    position: absolute
    top: -16px
    left: 20px
.caption
  font-size: 12px
  @include media-breakpoint-up(lg)
    white-space: nowrap
</style>