<template>
  <div class="car">
    <h2 v-if="carData.brand && carData.model" class="car__title">
      <span>{{ carData.brand }} </span><span>{{ carData.model }}</span>
    </h2>
    <p v-if="carData.country" class="car__field car__field--country">
      <span>Страна: </span><span>{{ carData.country }}</span>
    </p>
    <p v-if="carData.year" class="car__field car__field--year">
      <span>Год выпуска: </span><span>{{ carData.year }}</span>
    </p>
    <p v-else class="car__field car__field--year">
      <span>Год выпуска: </span><span>неизвестно</span>
    </p>
    <p v-if="carData.vin" class="car__field car__field--vin">
      <span>VIN-номер: </span><span>{{ carData.vin }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    carData: Object
  }
};
</script>

<style lang="scss" scoped>
@import "Car";
</style>
