<template lang="pug">
section#about.main-section.bg-base
  h2.section-title
    span.text-original LIXA
    span が選ばれる理由
  .container
    .row.gx-5
      .col-4
        .icon
          img(src="@/assets/images/meal.svg" alt="食事管理")
        h3.title 「食べて痩せる」食事管理
        .description
          p
            div 摂取カロリーと消費カロリーのバランスに
            div
              | 着目し「
              span.text-original 食べて痩せる
              | 」食事管理を行います。
          p
            div 筋トレと同じくらい食事も大事。
          p
            div
              | 食事管理を通した
              span.text-original かっこいい体作り
              | を
            div サポートいたします。
      .col-4
        .icon
          img(src="@/assets/images/training.svg" alt="トレーニング")
        h3.title キメ細やかなトレーニング
        .description
          p
            div
              | お客様とトレーナーの
              span.text-original 1対1
              | で
            div トレーニングを行っていただきます。
          p
            div 個々人の目標に合わせたメニューをご提案。
          p
            div 正しく安全なフォームで筋トレが出来るよう
            div
              | トレーナーが
              span.text-original キメ細やかに指導
              | いたします。
      .col-4
        .icon
          img(src="@/assets/images/woman.svg" alt="女性トレーナー")
        h3.title 女性目線でモテボディ指導
        .description
          p
            div
              | LIXAのトレーナーは
              span.text-original 全員女性
              | です。
          p
            div 女性目線でかっこいい体に
            div なるための指導をいたします。
          p
            div
              span.text-original 理想のモテボディ
              | を手に入れるために
            div 一緒にトレーニングをしましょう。
</template>

<style lang="sass" scoped>
.icon
  text-align: center
  margin-bottom: 20px
  img
    width: 64px
    height: auto
.title
  text-align: center
  font-size: 24px
  font-weight: bold
  margin-bottom: 20px
.description
  text-align: center
  line-height: 1.75
</style>