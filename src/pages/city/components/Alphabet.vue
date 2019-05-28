<template>
  <ul class="alphabet">
    <li 
      v-for="(item, key) of cities" 
      class="item"
      :key="key"
    >{{key}}</li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  }
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