<template>
  <div>
    <div class="search">
      <input v-model="keyWord" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="searching">
      <ul>
        <li
          class="search-item border-bottom"
          @click="handleCityClick(item.name)"
          v-for="item of list"
          :key="item.id"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  data() {
    return {
      keyWord: "",
      list: [],
      timer: null
    };
  },
  props: {
    cities: Object
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
    searching() {
      return this.keyWord;
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  watch: {
    keyWord() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyWord) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyWord) > -1 ||
              value.name.indexOf(this.keyWord) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  }
};
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
  .search-content
    overflow: hidden
    position: absolute 
    top: 1.36rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    z-index: 99
    .search-item
      line-height: .62rem
      padding-left: .2rem 
      color: #666
      background:#fff
</style>