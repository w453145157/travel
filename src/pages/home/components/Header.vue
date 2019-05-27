<template>
  <div class="header">
    <span class="header-back iconfont">&#xe624;</span>
    <div class="header-input">
      <span class="header-search iconfont">&#xe632;</span>
      <span>输入城市/景点/游玩/主题</span>
    </div>
    <router-link tag="div" to="/city" class="header-right">
      <span class="city">{{city}}</span>
      <span class="iconfont">&#xe64a;</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header 
  height: 0.88rem
  display: flex
  background: $bgColor
  line-height: .88rem
  .header-back
    font-size: 0.16rem
    float: left
    width: .64rem
    color: #fff
    text-align: center
    font-size: .4rem
  .header-input
    flex: 1
    background: #ffffff
    color: #999
    margin: .1rem;
    height: .68rem
    line-height: .68rem
    border-radius: .06rem
    .header-search
      padding: 0 .1rem
  .header-right
    float: right
    color: #fff
    width: 1.24rem
    font-size: .3rem
    .iconfont
      font-size: .24rem
      padding-left: .1rem
</style>