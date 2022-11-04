<template lang="pug">
section#hero
  .hero-image
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
  parts-cta-button-for-monitor
</template>

<style lang="sass" scoped>
#hero
  position: relative
  margin-top: 40px
  .hero-image
    position: relative
    &::before
      content: ''
      width: 100%
      background-color: rgba(black, 0.15)
      position: absolute
      top: 0
      bottom: 0
      right: 0
      left: 0
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
    @include media-breakpoint-down(md)
      width: 100px
      bottom: 140px
      left: 230px
  .main-copy
    font-size: 64px
    font-weight: bold
    text-shadow: 3px 3px 0 black
    color: white
    position: absolute
    bottom: 20px
    left: 40px
    @include media-breakpoint-down(md)
      font-size: 32px
      left: 20px
      bottom: 90px
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
      font-size: 20px
      text-shadow: 2px 2px 0 black
      left: 20px
      bottom: 140px
</style>