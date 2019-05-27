<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: {
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
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .25rem
      min-width: 0
      .item-title
        font-size: .3rem
        height: .5rem;
        line-height: .5rem
        ellipsis()
      .item-desc
        font-size: .2rem
        height: .4rem
        line-height: .4rem
        color: #999  
        ellipsis()
      .item-button
        background: #ffb436
        color: #ffffff
        text-align: center 
        padding: .04rem .2rem
        height: .5rem
        font-size: .2rem
        cursor: pointer
        border-radius: .08rem
</style>