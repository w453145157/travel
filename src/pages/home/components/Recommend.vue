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
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_200x200_50323152.jpg',
        title: '故宫',
        desc: '世界五大宫之首，穿越与您近在咫尺'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg',
        title: '古北水镇',
        desc: '亚洲唯一飞行式过山车等你来挑战'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/23/0265195fc4b7913a758674357c3cc8f6.jpg_200x200_b58ea00b.jpg',
        title: '北京欢乐水魔方',
        desc: '传统建筑结合中国人自己的水上乐园'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_200x200_ce3d2658.jpg',
        title: '北京海洋馆',
        desc: '一座恭王府，半部清代史'
      }]
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