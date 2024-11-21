<template>
  <div class="pro-section">
    <h2>So, You're a Pro, Huh? 🧐</h2>
    <p>
      If you're really a pro, you've got a solid strategy, killer stats, and the scars to prove it. No
      excuses, no whining—just results.

      <br /><br />
    </p>
    <h3>
      So why not scale up your game? Boost your capital with <b>my exclusive <i>DISCOUNTS</i></b> on prop
      firms.
    </h3>

    <p>Let’s see if you’re ready to handle real money.</p>
    <MarqueeComponent />
  </div>
</template>
<script>
import MarqueeComponent from '@/components/MarqueeComponent.vue'
export default {
  components: {
    MarqueeComponent,
  },
}
</script>
<style scoped lang="scss">
span {
  color: white;
}
.pro-section {
  text-align: center;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  color: #d6d6d6;
  border-radius: 10px;
  font-family: Arial, sans-serif;
}

.pro-section h2 {
  color: #ffcc00;
  font-size: 2em;
  margin-bottom: 15px;
}
.pro-section h3 {
  color: #b8fffe;
  font-size: 2em;
  margin-bottom: 15px;
}

.pro-section p {
  font-size: 1.3em;
  line-height: 1.8;
  margin-bottom: 20px;
}

.pro-section .cta-link {
  display: inline-block;
  padding: 10px 20px;
  color: #1e1e1e;
  background-color: #ffcc00;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2em;
  text-decoration: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.pro-section .cta-link:hover {
  transform: scale(1.05);
  background-color: #ffc107;
}
</style>
