<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="getLetter"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted() {
    this.getCityInfo();
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.getCitySucc);
    },
    getCitySucc(res) {
      if (res.data.ret) {
        let data = res.data.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    getLetter(val) {
      this.letter = val;
    }
  }
};
</script>
<style lang="stylus" scoped></style>

