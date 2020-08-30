<template>
  <div class="main">
    <Search @Search:input="onInput" :showResult="this.showCars" />
    <CarsList v-if="this.showCars" :filteredCarsList="this.filteredCarsList" />
  </div>
</template>

<script>
import carsArr from "@/data/cars.json";
import CarsList from "@/components/CarsList";
import Search from "@/components/Search";

export default {
  props: {},
  data() {
    return {
      carsArr: carsArr,
      showCars: false,
      car: "",
      filteredCarsList: []
    };
  },
  components: {
    Search,
    CarsList
  },

  methods: {
    onInput(data) {
      this.showCars = !!data;
      this.car = data;
      this.carsArr.forEach(carsObj =>
        this.recursive(carsObj, data.toLowerCase())
      );
    },
    recursive(o, inputData) {
      let v;
      for (let k in o) {
        v = o[k];
        if (typeof v === "string" && k === "type") {
          // console.log(k);
        } else if (
          typeof v === "string" &&
          k === "value" &&
          v.toLowerCase().includes(inputData)
        ) {
          // this.filteredCarsList = [o];
          // console.log(o);
          // console.log(k);
          // console.log(v);
          console.log(v);
        } else if (typeof v === "object" && k === "children") {
          setTimeout(() => {
            if (Array.isArray(v)) {
              v.forEach(o => this.recursive(o));
            } else {
              this.recursive(o);
            }
          }, 0);
          // console.log(Array.isArray(v));
          // console.log(v);
          // console.log("object", v);
          // v[k].forEach(o => this.recursive(o));
          // v.forEach(o => this.recursive(o));
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "Main";
</style>
