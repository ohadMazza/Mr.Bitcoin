<template>
     <header class="app-header">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <RouterLink to="/charts">Charts</RouterLink>
        </nav>
        <div class="btc-rate">
            BTC = ${{(1 / this.btcRate).toFixed(3)}}
        </div>
     </header>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service.js'

export default {
    data() {
    return {
      btcRate: null,
    }
  },
  async created() {
    this.btcRate = await bitcoinService.getRate()
  },

}
</script>

<style>

</style>

