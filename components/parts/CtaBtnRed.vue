<template lang="pug">
.cta-btn-red
  nuxt-link.btn-area(to="/reserve/")
    .btn-text
      .first-text
        div
          span.emphasis-lg 無料体験
          span に
        div
          span 申し込む
      .second-text
        .d-flex.align-items-center
          span.emphasis-circle.me-1 簡単
          div
            span.emphasis-md 30
            span 秒で完了！
    .instructor-photo
      img(src="@/assets/images/button_woman.png")
  .bubble-area
    .bubble-text 無理な勧誘は一切ナシ！相談だけでもOK！
</template>

<style lang="sass" scoped>
.cta-btn-red
  text-align: center
  letter-spacing: 0.05em
  .btn-area
    display: block
    width: 340px
    height: 110px
    color: inherit
    background: $red-gradient
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    border-radius: 10px
    position: relative
    margin: 0 auto
    .btn-text
      .emphasis-lg
        font-size: 48px
        color: #ffe0a4
      .emphasis-md
        font-size: 24px
      .emphasis-circle
        font-size: 12px
        color: white
        background-color: black
        text-shadow: none
        padding: 4px 6px
        border-radius: 100%
        border: 1px white solid
      .first-text
        color: white
        font-size: 24px
        font-weight: bold
        line-height: 1.25
        text-align: center
        text-shadow: $text-border-red
        width: 100%
        position: absolute
        top: -20px
        right: 50%
        transform: translateX(50%)
      .second-text
        font-size: 14px
        font-weight: bold
        text-shadow: $text-border-white
        position: absolute
        top: 70px
        right: 50%
        transform: translateX(50%)
    .instructor-photo
      width: 70px
      height: 70px
      background-color: $base-grey
      border: 3px solid $accent-color
      border-radius: 50%
      position: absolute
      bottom: -8px
      left: -8px
      img
        width: 90px
        height: auto
        position: absolute
        bottom: 0
        right: -5px
  .bubble-area
    font-size: 15px
    font-weight: bold
    display: inline-block
    padding: 5px 10px
    border: 2px solid black
    border-radius: 10px
    margin: 20px 0 0
    position: relative
    &:before, &:after
      border: solid transparent
      position: absolute
      bottom: 100%
      content: ""
    &:before
      left: 16px
      border-top-width: 6px
      border-bottom-width: 6px
      border-left-width: 3px
      border-right-width: 3px
      border-bottom-color: white
      z-index: 2
    &:after
      left: 14px
      border-top-width: 10px
      border-bottom-width: 10px
      border-left-width: 5px
      border-right-width: 5px
      border-bottom-color: black
      z-index: 1
@media screen and (min-width: $pc-width)
  .cta-btn-red
    .btn-area
      display: block
      width: 640px
      height: 110px
      .btn-text
        .emphasis-lg
          font-size: 64px
        .emphasis-md
          font-size: 40px
        .emphasis-circle
          font-size: 20px
          color: white
          border: 2px white solid
        .first-text
          font-size: 40px
          div
            display: inline
        .second-text
          font-size: 24px
          top: 50px
      .instructor-photo
        width: 100px
        height: 100px
        bottom: -6px
        left: -20px
        img
          width: 130px
          height: auto
          position: absolute
          bottom: 0
          right: -6px
    .bubble-area
      font-size: 30px
      padding: 10px 20px
      margin: 25px 0 0
      &:before
        left: 22px
        border-top-width: 10px
        border-bottom-width: 10px
        border-left-width: 6px
        border-right-width: 6px
      &:after
        left: 20px
        border-top-width: 14px
        border-bottom-width: 14px
        border-left-width: 8px
        border-right-width: 8px
</style>