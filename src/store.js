import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const mutations = {
  changeTab(state, tab) {
    state.currentTab = tab;
  },
  setAmount(state, amountInfo) {
    state.amounts[amountInfo.id] = amountInfo.value;
  },
};

export default new Vuex.Store({
  state: {
    currentTab: 'Employer',
    amounts: { },
  },
  mutations,
});
