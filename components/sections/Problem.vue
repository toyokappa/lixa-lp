<template lang="pug">
section#problem
  h2.section-title
    p おカラダに関する
    p.emphasis-md
      span こんな
      span.emphasis-yellow お悩み
      span ありませんか？
  .container
    .bubble-problems
      .bubble-1
        img.bubble-image(src="@/assets/images/problem_bubble_1.png")
        .bubble-text
          p
            span 家族や友人に
            span.emphasis-yellow 「太った？」
          p と聞かれた...
      .bubble-2
        img.bubble-image(src="@/assets/images/problem_bubble_2.png")
        .bubble-text
          p
            span 医者に
            span.emphasis-yellow 「痩せましょう」
          p と言われた...
      .bubble-3
        img.bubble-image(src="@/assets/images/problem_bubble_3.png")
        .bubble-text
          p
            span.emphasis-yellow ぷよぷよお腹
            span を
          p どうにかしたい！
    .but けど...
    .bubble-desires
      .bubble-1
        img.bubble-image(src="@/assets/images/desire_bubble_1.png")
        .bubble-text
          p ジムに通っても
          p 長く続いたことがない
      .bubble-2
        img.bubble-image(src="@/assets/images/desire_bubble_2.png")
        .bubble-text
          p 頑張ってるつもりなのに
          p 理想のカラダにならない
      .bubble-3
        img.bubble-image(src="@/assets/images/desire_bubble_3.png")
        .bubble-text
          p そもそもジムに
          p 通ったことがない
      .bubble-4
        img.bubble-image(src="@/assets/images/desire_bubble_4.png")
        .bubble-text
          p 思うようにトレーニングが
          p できるか不安
    .desire-men
      img(src="@/assets/images/desire_men.png")
    .solution
      .emphasis-lg
        p
          span そんなお悩み
          span.emphasis-red LIXA
          span の
        p
          span.emphasis-red 美女トレーナー
          span たちが解決!!
      .vector-yellow
        img(src="@/assets/images/vector_yellow.png")
      .emphasis-lg
        p
          span.emphasis-red 女子との楽しいトレーニング
          span で
        p モチベーションを維持！
      .solution-woman
        img(src="@/assets/images/solution_woman.png")
      .emphasis-xl
        p 気に入った女子と
        p トレーニングを重ねて
        p 気づけば理想のカラダに！
  parts-cta-btn-red
</template>

<style lang="sass" scoped>
#problem
  background: linear-gradient(180deg, #E0F0FF 0%, #FFFFFF 76.04%, #FFFFFF 100%)
  padding-bottom: 30px
  letter-spacing: 0.05em
  .emphasis-md
    font-size: 16px
  .emphasis-lg
    font-size: 20px
    font-weight: bold
  .emphasis-xl
    font-size: 24px
    font-weight: bold
    text-shadow: $text-border-white
  .emphasis-red
    color: $accent-color
  .emphasis-yellow
    color: $emphasis-yellow
  .section-title
    font-size: 12px
    font-weight: bold
    text-align: center
    line-height: 1.4
    color: white
    background: linear-gradient(0deg, rgba(88, 107, 172, 0.89), rgba(88, 107, 172, 0.89)), url("@/assets/images/problem_bg.jpeg")
    background-size: cover
    background-position: center center
    width: 100%
    clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)
    padding: 20px
    margin-bottom: 30px
  .bubble-problems
    font-weight: bold
    width: 100%
    color: white
    .bubble-1, .bubble-2, .bubble-3
      margin-bottom: 30px
      width: fit-content
      position: relative
      .bubble-image
        height: 80px
        width: auto
      .bubble-text
        white-space: nowrap
        position: absolute
        top: 50%
        transform: translate(-50%, -50%)
    .bubble-1, .bubble-3
      .bubble-text
        left: calc(50% + 13px) // 吹き出し分 + 13px
    .bubble-2
      margin-left: auto
      .bubble-text
        left: calc(50% - 13px) // 吹き出し分 - 13px
  .but
    font-size: 36px
    font-weight: bold
    text-align: center
    margin-bottom: 30px
  .bubble-desires
    font-size: 14px
    font-weight: bold
    margin-bottom: 20px
    .bubble-1
      margin: 0 0 0 10px
      .bubble-image
        width: 203px
        height: auto
    .bubble-2
      margin: -20px 0 0 auto
      .bubble-image
        width: 203px
        height: auto
    .bubble-3
      margin: -20px 0 0 0
      .bubble-image
        width: 200px
        height: auto
    .bubble-4
      margin: 0 10px 0 auto
      .bubble-image
        width: 208px
        height: auto
    .bubble-1, .bubble-2, .bubble-3, .bubble-4
      width: fit-content
      position: relative
      .bubble-text
        white-space: nowrap
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
    .bubble-1, .bubble-2, .bubble-4
      .bubble-text
        top: calc(50% - 13px) // 吹き出し分 - 13px
    .bubble-3
      .bubble-text
        top: calc(50% - 8px) // 吹き出し分 - 8px
  .desire-men img
    width: 100%
    margin-bottom: 30px
  .solution
    text-align: center
    margin-bottom: 40px
    .vector-yellow
      margin: 20px 0
      img
        width: 100px
    .solution-woman
      height: 165px
      margin-top: 20px
      img
        width: 100%

@media screen and (min-width: $pc-width)
  #problem
    .emphasis-md
      font-size: 32px
    .emphasis-lg
      font-size: 36px
    .emphasis-xl
      font-size: 40px
      font-weight: bold
      text-shadow: $text-border-white
    .section-title
      font-size: 24px
    .bubble-problems
      width: 800px
      margin: 0 auto
      .bubble-1, .bubble-2, .bubble-3
        .bubble-image
          height: 120px
        .bubble-text
          font-size: 24px
    .but
      font-size: 48px
    .bubble-desires
      width: 600px
      font-size: 20px
      margin: 0 auto 20px
      .bubble-1
        .bubble-image
          width: 309px
      .bubble-2
        .bubble-image
          width: 309px
      .bubble-3
        .bubble-image
          width: 300px
      .bubble-4
        .bubble-image
          width: 312px
      .bubble-1, .bubble-2, .bubble-4
        .bubble-text
          top: calc(50% - 18px) // 吹き出し分 - 13px
      .bubble-3
        .bubble-text
          top: calc(50% - 8px) // 吹き出し分 - 8px
    .desire-men img
      display: block
      width: 600px
      margin: 0 auto 30px
    .solution
      text-align: center
      margin-bottom: 40px
      .vector-yellow
        margin: 20px 0
        img
          width: 100px
      .solution-woman
        height: 220px
        margin-top: 20px
        img
          height: 320px
          width: auto
</style>