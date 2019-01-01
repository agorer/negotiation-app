<template>
  <div id="app">
    <tabs></tabs>

    <number-input v-for="tab in tabs"
                  :key="tab.id"
                  v-show="tab.id == currentTab"
                  :amount-id="tab.id"
                  :placeholder="tab.description"></number-input>

    <div class="result" v-if="bothAmountsFilled">{{negotiationResult}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Tabs from './components/tabs.vue';
import NumberInput from './components/number-input.vue';
import { isEmpty } from './common/string-utils';

export default {
  name: 'app',
  components: {
    Tabs,
    NumberInput,
  },
  computed: {
    ...mapState(['tabs', 'currentTab', 'amounts']),
    bothAmountsFilled() {
      return !isEmpty(this.amounts.employer) && !isEmpty(this.amounts.employee);
    },
    negotiationResult() {
      return this.amounts.employee <= this.amounts.employer ? 'Success!' : 'Failure!';
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
