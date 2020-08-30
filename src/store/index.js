import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputData: "",
    filteredCarsList: []
  },
  mutations: {
    setInputData(state, payload) {
      this.state.inputData = payload;
    },
    setFilteredCarsList(state, payload) {
      this.state.filteredCarsList = [];
      this.state.filteredCarsList = payload;
    }
  },
  actions: {
    setInputData({ commit }, payload) {
      commit("setInputData", payload);
    },
    setFilteredCarsList({ commit }, payload) {
      commit("setFilteredCarsList", payload);
    }
  },
  modules: {}
});
