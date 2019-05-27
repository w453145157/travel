<template>
  <ul class="alphabet">
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet"
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .alphabet
    position: absolute 
    right: 0
    top: 1.4rem
    bottom: 0
    width: .4rem
    display: flex
    flex-direction: column
    justify-content: center
    .item
      text-align: center
      line-height: .44rem
      color: $bgColor
</style>