<template>
  <div class="container">
    <h1 class="title">Currency Converter</h1>
    <h2 class="amount" v-if="convertedAmount >0">{{convertedAmount}} <span class="currency">{{selected_to[0]}}</span></h2>

    <div class="forms">
      <div class="layout">
        <div class="amount">
          <label>AMOUNT</label>
          <input v-model='amount' type="text" placeholder="$ 0.00"/>
        </div>
        <div class="select">
          <label>FROM</label>
          <select v-model="selected_from">
            <option value="" selected disabled>Select</option>
            <option :key="index" :value="rate[1]" v-for="(rate,index) in Object.entries(get_rates)">{{ rate[0] }}</option>
          </select>
        </div>
        <div class="select">
          <label>TO</label>
          <select v-model="selected_to">
            <option value="" selected disabled>Select</option>
            <option :key="index" :value="rate" v-for="(rate,index) in Object.entries(get_rates)">{{ rate[0] }}</option>
          </select>
        </div>
      </div>
      <button @click="convertAmount">CONVERT
      </button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      amount: 0,
      selected_from: "",
      selected_to: "",
      convertedAmount: 0.00
    }
  },
  methods: {
    convertAmount() {
      this.convertedAmount = ((this.selected_to[1]) / (this.selected_from) * this.amount || 0).toFixed(4)
    }
  },
  created() {
    this.$store.dispatch('GET_CURRENCY_RATES');
  },
  computed:{
    ...mapGetters(["get_rates"])
  }
}
</script>
