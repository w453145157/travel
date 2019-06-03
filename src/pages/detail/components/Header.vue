<template>
  <div>
    <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
      <span class="header-back iconfont">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont back-home">&#xe624;</span>
      </router-link>
      <p>城市选择</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute 
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height:.8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0, 0, 0, .8)
    span 
      color: #fff
      font-size: .4rem
  .header-fixed
    background: $bgColor
    position: fixed
    height: .68rem
    width: 100%
    color: #fff
    text-align: center
    top: 0
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