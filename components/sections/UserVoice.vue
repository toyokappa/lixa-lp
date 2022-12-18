<template lang="pug">
div
  parts-gold-title
    .emphasis-md 体験者の声
  section#userVoice
    .container
      .row.g-4
        .col-12
          .user-card
            .user-card-header
              img.user-icon(src="@/assets/images/user_1.png")
              .user-info
                span.value 男性M
                span.unit さん(36歳)
            .user-card-body
              p 一般のパーソナルはマッチョな男性が担当になるイメージなので少し抵抗があり、こちらのジムを選びました。
              p
                span.emphasis-red トレーナーは美人な方ばかりで、筋トレ中もモチベーション高く、楽しくトレーニングができます。
                span ちなみにトレーニング自体は結構きついです。笑
        .col-12
          .user-card
            .user-card-header
              img.user-icon(src="@/assets/images/user_2.png")
              .user-info
                span.value 男性T
                span.unit さん(43歳)
            .user-card-body
              p 年齢的にも痩せにくくお腹が出てきたので何とかしないと、という思いでLIXAさんの体験トレーニングに行きました。
              p 
                span.emphasis-red YUKI先生と会話をしながら楽しくトレーニングができた
                span ので入会を決めました。
                span 通い始めは筋肉痛の嵐でしたが、身体も少しずつ変化していて通うのが楽しくなってます！
        .col-12
          .user-card
            .user-card-header
              img.user-icon(src="@/assets/images/user_3.png")
              .user-info
                span.value 男性S
                span.unit さん(38歳)
            .user-card-body
              p
                span 毎回楽しく通わせていただいています。
                span.emphasis-red 程よい距離感で、時には笑いもありながらトレーニングをしています。
              p
                span 女性に見られているからなのか、少しかっこいい一面を見せないととということで
                span.emphasis-red 普段よりも頑張れるような気がします。
                span こんなジムが群馬にできたのは個人的に非常に嬉しいです！
</template>

<style lang="sass" scoped>
.emphasis-md
  font-size: 20px
.emphasis-red
  font-weight: bold
  color: $accent-color
  text-decoration: underline
  text-decoration-color: $emphasis-yellow
  text-decoration-thickness: 2px
#userVoice
  letter-spacing: 0.05em
  background-color: $dark-color
  padding: 30px 0
  .user-card
    background-color: white
    padding: 20px
    border-radius: 5px
    .user-card-header
      display: flex
      align-items: center
      justify-content: center
      margin-bottom: 10px
      .user-icon
        height: 40px
        width: 40px
        background-color: $base-grey
        object-fit: cover
        object-position: center center
        border-radius: 50%
        margin-right: 10px
      .user-info
        font-weight: bold
        .value
          font-size: 16px
        .unit
          font-size: 12px
@media screen and (min-width: $pc-width)
  .emphasis-md
    font-size: 32px
  #userVoice
    .user-card
      width: 600px
      padding: 20px
      border-radius: 5px
      margin: 0 auto
      .user-card-header
        .user-icon
          height: 60px
          width: 60px
        .user-info
          .value
            font-size: 20px
          .unit
            font-size: 16px
</style>