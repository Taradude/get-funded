<template>
  <div class="glass-container">
    <div class="glass">
      <div class="drop-shadow">
        <div class="profit-calculator">
          <h2>Profit Calculator</h2>
          <div class="field">
            <label>Funded Capital:</label>
            <span>$50,000</span>
          </div>
          <div class="field">
            <label for="profitSlider">Monthly Profitability (%):</label>
            <input type="range" id="profitSlider" v-model="profitPercent" min="1" max="100" />
            <span>{{ profitPercent }}%</span>
          </div>
          <div class="field">
            <label>Account Cost:</label>
            <span>$350</span>
          </div>
          <div class="field">
            <label>Profit with Funded Capital (80% yours):</label>
            <span>{{ calculateProfit(50000) }}</span>
          </div>
          <div class="field">
            <label>Profit with Own Capital ($350):</label>
            <span>{{ calculateProfit(350) }}</span>
          </div>
          <p class="note">* Account cost as an equivalent to funded capital vs your capital.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profitPercent: 1,
    }
  },
  methods: {
    calculateProfit(capital) {
      return `$${(((capital * this.profitPercent) / 100) * 0.8).toFixed(2)}`
    },
  },
}
</script>

<style scoped lang="scss">
@property --rotate {
  syntax: '<angle>';
  initial-value: 132deg;
  inherits: false;
}
h2 {
  top: -25px;
  position: relative;
  text-align: center;
}
.glass-container {
  margin: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.glass {
  max-width: 500px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.068);
  backdrop-filter: blur(40px);
  border-radius: 16px;
  padding: 16px;
}

.drop-shadow {
  position: relative;
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.3));
}

.profit-calculator {
  color: #d6d6d6;
  padding: 16px;
  font-size: 1.2em;
}

.field {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.note {
  font-size: 0.8em;
  color: #fff;
  text-align: center;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
</style>
