<template lang="pug">
section#hero
  .hero-area
    video.hero-image(
      playsinline
      muted
      autoplay
      loop
    )
      source(src="@/assets/videos/hero.mp4" type="video/mp4")
    h1.main-copy
      div 男性人気No.1！
      div
        span.emphasis-red 美女が教える
        span パーソナルジム
      div 前橋下石倉にグランドオープン！
  .container.campaign-area
    parts-campaign-card
  parts-cta-btn-red
</template>

<style lang="sass" scoped>
#hero
  padding-bottom: 30px
  .emphasis-red
    color: $accent-color
  .hero-area
    position: relative
    margin-bottom: 20px
    .hero-image
      width: 100%
      aspect-ratio: 4/3
      background-color: $base-grey
      object-fit: cover
      object-position: center top
    .main-copy
      color: white
      font-size: 20px
      font-weight: bold
      text-align: right
      text-shadow: 2px 2px black
      line-height: 1.5
      padding: 0 5px
      position: absolute
      right: 0
      bottom: 0
      .copy-lg
        font-size: 32px
  .campaign-area
    margin-bottom: 32px
@media (min-width: $pc-width)
  #hero
    .hero-area
      .hero-image
        height: calc(100vh - 56px) // ヘッダー分
        aspect-ratio: 16/9
      .main-copy
        font-size: 48px
        text-align: left
        text-shadow: 3px 3px black
        top: 10px
        left: 10px
        .copy-lg
          font-size: 54px
</style>