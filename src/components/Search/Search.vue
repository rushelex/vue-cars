<template>
  <label class="search" :class="{ focused: this.focus || this.showResult }">
    <input
      ref="input"
      type="text"
      class="search__input"
      placeholder="Начните ввод"
      @focus="() => (this.focus = true)"
      @blur="() => (this.focus = false)"
      v-model.trim="inputValue"
    />
    <span v-if="!inputValue" class="search__icon material-icons">search</span>
    <span
      v-else
      class="search__icon search__icon--close material-icons"
      @click="() => (this.inputValue = '')"
      >close</span
    >
  </label>
</template>

<script>
export default {
  props: {
    showResult: Boolean
  },

  data() {
    return {
      focus: false,
      inputValue: ""
    };
  },

  watch: {
    inputValue(newVal) {
      this.$emit("Search:input", newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "Search";
</style>
