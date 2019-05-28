<template>
  <ul class="alphabet">
    <li
      v-for="item of letters"
      class="item"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for (let key in this.cities) {
        letters.push(key);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 68;
          const index = Math.floor((touchY - this.startY) / 22);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 20);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
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