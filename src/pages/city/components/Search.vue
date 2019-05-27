<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" id="">
  </div>
</template>
<script>
export default {
  name: "CitySearch"
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .68rem
    padding: 0 .1rem
    background: $bgColor
    input 
      height: .5rem
      line-height: .5rem
      width: 100%
      text-align: center
      border-radius: .08rem
      padding: 0 .2rem
      box-sizing: border-box
</style>