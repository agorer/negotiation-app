<template>
  <div class="number-input">
    <div v-show="isVisible">
      <input class="text-input" v-model="amount" :placeholder="placeholder" />
    </div>
    <div v-show="isVisible">
      <button class="submit-button" :disabled="isInvalid" @click="submitAmount">Submit</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { isEmpty, isPositiveNumber } from '../common/string-utils';

export default {
  props: ['amountId', 'placeholder'],
  data() {
    return {
      amount: '',
    };
  },
  computed: {
    ...mapGetters(['getAmount']),
    isInvalid() {
      return isEmpty(this.amount) || !isPositiveNumber(this.amount);
    },
    isVisible() {
      return isEmpty(this.getAmount(this.amountId));
    },
  },
  methods: {
    ...mapMutations(['setAmount']),
    submitAmount() {
      this.setAmount({
        id: this.amountId,
        value: parseInt(this.amount, 10),
      });
    },
  },
};
</script>
