<template lang="pug">
div
  parts-global-header
  nuxt
  parts-global-footer
</template>

<script>
export default {
}
</script>

<style lang="sass">
body
  font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
p
  padding: 0
  margin: 0
.contract
  padding: 1rem 0
  section
    margin-bottom: 2rem
  h1
    font-size: 2.5rem
    font-weight: bold
  h2
    font-size: 1.5rem
    font-weight: bold
  h3
    font-size: 1.2rem
    font-weight: bold
  p
    margin-bottom: 1.5rem
  ol li
    margin-bottom: 0.5rem
  ol ol li
    list-style-type: lower-roman
</style>