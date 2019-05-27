<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont back-home">&#xe624;</span>
    </router-link>
    <p>城市选择</p>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    background: $bgColor
    position: relative
    height: .68rem
    width: 100%
    color: #fff
    text-align: center
    .back-home
      position: absolute 
      width: .6rem 
      height: 100%
      left: 0
      line-height: .68rem
      top: 0
      font-size: .3rem
      color: #fff
    p
      width: 60%
      margin: 0 auto
      font-size: .3rem
      height: 100%
      line-height: 0.68rem
</style>