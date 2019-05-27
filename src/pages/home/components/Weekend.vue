<template>
  <div>
    <p class="title">周末去哪儿</p>
    <ul>
      <li
        class="item"
        v-for="item of weekendList"
        :key="item.id"
      >
        <img :src="item.imgUrl" alt="" class="item-img">
        <p class="item-title">{{ item.title }}</p>
        <p class="item-desc">{{ item.desc }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .4rem
  .item
    .item-img
      height: 2.87rem
      width: 100%
    .item-title
      color: #212121
      font-size: .3rem
      height: .6rem
      line-height: .6rem
      padding-left: .2rem
      ellipsis()
    .item-desc
      color: #999999
      padding-left: .2rem
      font-size: .22rem
      height: .6rem
      line-height: .4rem
      ellipsis()
</style>