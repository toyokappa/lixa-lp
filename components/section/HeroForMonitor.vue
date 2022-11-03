<template lang="pug">
section#hero
  img.hero-image-pc(src="@/assets/images/hero_for_monitor_pc.jpg")
  img.hero-image-sp(src="@/assets/images/hero_for_monitor_sp.jpg")
  img.monitor-limit(src="@/assets/images/monitor_limit.png")
  h2.sub-copy
    div 前橋にオープン予定！
    div トレーナーは女性のみ
    div 男性専用パーソナルジム
  h1.main-copy
    span.catch 無料モニター
    span.text 募集中！
  n-link.cta(v-scroll-to="'#reserve'" to)
    .cta-set
      .text 無料モニター応募締め切りまで
      .limit
        span.value 11
        span.unit 月
        span.value 11
        span.unit.me-2 日(金)
        span.value 23:59
        span.unit まで
    .text 応募フォームはコチラ
</template>

<style lang="sass" scoped>
#hero
  position: relative
  margin-top: 40px
  .hero-image-pc
    width: 100%
    height: auto
    max-height: calc(100vh - 40px)
    object-fit: cover
    @include media-breakpoint-down(md)
      display: none
  .hero-image-sp
    width: 100%
    height: auto
    object-fit: cover
    object-position: center center
    @include media-breakpoint-up(lg)
      display: none
  .monitor-limit
    width: 200px
    height: auto
    position: absolute
    bottom: 120px
    left: 470px
  .main-copy
    font-size: 64px
    font-weight: bold
    text-shadow: 3px 3px 0 black
    color: white
    position: absolute
    bottom: 20px
    left: 40px
    @include media-breakpoint-down(md)
      font-size: 14px
      bottom: 145px
    .catch
      color: #ffd600
  .sub-copy
    font-size: 40px
    font-weight: bold
    text-shadow: 3px 3px 0 black
    color: white
    line-height: 1.5
    position: absolute
    bottom: 120px
    left: 40px
    margin-bottom: 0
    @include media-breakpoint-down(md)
      font-size: 16px
      bottom: 210px
  .cta
    color: black
    font-weight: bold
    text-align: right
    text-decoration: none
    background-color: #ffd600
    padding: 20px 40px
    border-radius: 5px
    box-shadow: 10px 8px black

    position: absolute
    bottom: 30px
    right: 40px
    .text
      font-size: 24px
    .cta-set
      .limit
        .value
          font-size: 40px
        .unit
          font-size: 24px
</style>