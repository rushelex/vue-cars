<template>
  <div class="cars-list">
    <Car
      v-for="item in this.filteredCarsList"
      :key="item.vin"
      :carData="item"
    />
  </div>
</template>

<script>
import Car from "./Car";

export default {
  props: {
    filteredCarsList: Array
  },

  components: {
    Car
  }
};
</script>

<style lang="scss" scoped>
@import "CarsList";
</style>
