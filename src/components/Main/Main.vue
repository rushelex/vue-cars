<template>
  <div class="main">
    <Search @Search:input="onInput" :showResult="!!this.getInputData" />
    <CarsList
      v-if="!!this.getInputData && this.filteredCarsList.length !== 0"
      :filteredCarsList="this.filteredCarsList"
    />
    <img
      v-else
      class="main__searcher"
      src="@/assets/searcher.png"
      alt="Searcher"
    />
  </div>
</template>

<script>
import allCarsData from "@/data/cars.json";
import CarsList from "@/components/CarsList";
import Search from "@/components/Search";

export default {
  components: {
    Search,
    CarsList
  },

  methods: {
    onInput(data) {
      this.$store.dispatch("setInputData", data);
      this.$store.dispatch(
        "setFilteredCarsList",
        this.findDeep(allCarsData, this.getInputData.toLowerCase())
      );
    },

    findDeep(arr, inputData) {
      const allCarsArr = arr.reduce((acc, country) => {
        country.children.forEach(brand => {
          brand.children.forEach(model => {
            if (model.children.type === "year") {
              model.children.children.forEach(vin => {
                acc.push({
                  country: country.value,
                  brand: brand.value,
                  model: model.value,
                  year: model.children.value,
                  vin: vin.value
                });
              });
            } else if (model.children.type === "vin") {
              acc.push({
                country: country.value,
                brand: brand.value,
                model: model.value,
                vin: model.children.value
              });
            } else {
              acc.push({
                country: country.value,
                brand: brand.value,
                model: model.value
              });
            }
          });
        });

        return acc;
      }, []);

      return allCarsArr.filter(
        car =>
          (car.country && car.country.toLowerCase().includes(inputData)) ||
          (car.brand && car.brand.toLowerCase().includes(inputData)) ||
          (car.model && car.model.toLowerCase().includes(inputData)) ||
          (car.year && car.year.toString().includes(inputData)) ||
          (car.vin && car.vin.toLowerCase().includes(inputData))
      );
    }
  },

  computed: {
    getInputData() {
      return this.$store.state.inputData;
    },
    filteredCarsList() {
      return this.$store.state.filteredCarsList;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "Main";
</style>
