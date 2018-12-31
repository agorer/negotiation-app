<template>
  <div id="app">
    <tabs></tabs>

    <number-input v-for="tab in tabs"
                  :key="tab.id"
                  v-show="tab.id == currentTab"
                  amount-id="tab.id"
                  placeholder="tab.description"></number-input>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Tabs from './components/tabs.vue';
import NumberInput from './components/number-input.vue';

export default {
  name: 'app',
  components: {
    Tabs,
    NumberInput,
  },
  computed: mapState(['tabs', 'currentTab']),
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
