import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const mutations = {
  changeTab(state, tab) {
    state.currentTab = tab;
  },
};

export default new Vuex.Store({
  state: {
    currentTab: 'Employer',
  },
  mutations,
});
