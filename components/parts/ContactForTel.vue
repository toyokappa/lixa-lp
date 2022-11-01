<template lang="pug">
.contact-for-tel
  .caption お電話でのお問い合わせの方は
  a.tel.d-flex.justify-content-center(href="tel:08070048979")
    img.icon.me-1(src="@/assets/images/tel.svg" alt="電話でのお問い合わせ")
    .number 080-7004-8979
  .caption 7:00-22:00[年中無休]
</template>

<style lang="sass" scoped>
.contact-for-tel
  text-align: center
  .caption
  .tel
    color: inherit
    text-decoration: none
    .icon
      width: 28px
      height: auto
    .number
      font-size: 32px
      font-weight: bold
</style>