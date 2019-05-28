<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list clear-fix">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list clear-fix">
          <div
            class="button-wrapper"
            @click="handleCityClick(item.name)"
            :key="item.id"
            v-for="item of hotCities"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            v-for="city of item"
            @click="handleCityClick(city.name)"
            :key="city.id"
            class="item border-bottom"
          >{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  watch: {
    letter() {
      if (this.letter) {
        this.scroll.scrollToElement(this.$refs[this.letter][0]);
      }
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  }
};
</script>
<style lang="stylus" scoped>
  @import '~styles/common.css'
  .list
    position: absolute 
    top: 1.36rem
    left: 0
    bottom: 0
    right: 0
    overflow: auto
    .border-topbottom
      &:after
        border-color: #ccc
      &:before
        border-color: #ccc  
    .border-bottom    
      &:before
        border-color: #777
    .title
      height: .7rem
      background: #eaeaea
      line-height: .7rem
      padding-left: .3rem
      color: #666
    .button-list
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.33%
        float: left
        .button
          border: .02rem solid #ccc
          margin: .1rem
          text-align: center
          padding: .1rem 0
          border-radius: .06rem
    .item-list
      .item
        line-height: .6rem
        color: #666666
        padding-left: .2rem

</style>