import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const mutations = {
  changeTab(state, tab) {
    Vue.set(state, 'currentTab', tab);
  },
  setAmount(state, amountInfo) {
    Vue.set(state.amounts, amountInfo.id, amountInfo.value);
  },
};

export default new Vuex.Store({
  state: {
    tabs: [
      { id: 'employer', title: 'Employer', description: 'enter maximum offer' },
      { id: 'employee', title: 'Employee', description: 'enter minimum salary' },
    ],
    currentTab: 'employer',
    amounts: { },
  },
  mutations,
  getters: {
    getAmount: state => amountId => state.amounts[amountId],
  },
});
