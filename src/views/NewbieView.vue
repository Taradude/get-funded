<template>
  <div class="newbie">
    <h2>1. Get Started with Binance - Save on Fees with my LINK!</h2>
    <p>
      When I first started trading, I didn’t realize how much those small fees would chip away at my profits
      🪙. Every trade takes a bit, and they add up fast. That’s why I suggest
      <b>registering on Binance using my exclusive link</b> to take advantage of a
      <b>discount on trading fees</b>. Think of it as setting yourself up for the long haul – every dollar
      saved is a dollar you can reinvest. Trading is challenging enough without extra costs, so get that edge
      early! <br /><br />Even if you're already registered but don’t have any discounts, it’s worth creating a
      <b>new account</b>
      if you’re planning to make real profits in crypto. Imagine this: with the average trading fee on Binance
      at 0.1% per trade, my link gives you a discount that can <b>SAVE YOU $200-$500 A YEAR</b> if you are a
      small trader.
    </p>
    <a href="https://accounts.binance.com/register?ref=18019829">Money Saved = Money Earned</a>

    <h2>2. The Power of Risk Management: Use the 1-2% Rule</h2>
    <p>
      Here’s the truth: one of the hardest lessons I learned was controlling my risk. Early on, I’d risk way
      too much on a single trade, thinking, “this one’s a sure thing” – but, *bam*, big loss. Now I follow the
      <b>1-2% rule</b>: I never risk more than 1-2% of my total trading capital on a single trade.
    </p>
    <p>
      For example, with $1,000, I’ll risk only $10-$20 per trade.
      <b>This isn’t just a guideline; it’s a survival tool</b>. By keeping each potential loss small, even if
      I hit a streak of bad trades, I’ve got enough capital left to make a comeback. Trust me, it’s a
      game-changer.
    </p>
    <img src="@/assets/risk .png" alt="" />

    <h2>3. Setting a Stop-Loss: Your Safety Net</h2>
    <p>
      If you’re not using stop-losses, you’re basically gambling. Early on, I’d hold onto a trade, hoping the
      price would “bounce back” – but it would just keep dropping 📉. Now, I always set a
      <b>stop-loss</b> to limit losses.
    </p>
    <p>
      Let’s say I buy a coin at $100 and set a stop-loss at $95. If it hits $95, the trade closes
      automatically, capping my loss.
      <b>The goal here isn’t to avoid all losses but to control and minimize them</b>. Think of it as a
      seatbelt – you hope you don’t need it, but when you do, it’s there to keep you safe.
    </p>
    <img src="@/assets/stop.png" alt="" />
    <h2>4. Calculating Position Size: Trade Smart, Not Big</h2>
    <p>
      Position size is huge. I used to go big on trades, hoping for faster profits, but that just increased my
      risk. Here’s the formula that changed my approach:
      <b>Position Size = Risk per trade / Stop-loss distance</b>. So, if I’m risking $10 and my stop-loss is
      $2 below my entry price, I’d buy 5 units (10/2 = 5).
    </p>
    <p>
      This keeps the trade size manageable so that if the market moves against me, I’m not losing a massive
      chunk of my account. <b>Smart sizing keeps you in control</b>, even when the market isn’t.
    </p>
    <div class="position-size-calculator">
      <h2>Position Size Calculator</h2>

      <div class="input-group">
        <label for="balance">Account Balance ($):</label>
        <input id="balance" type="number" v-model.number="balance" placeholder="Enter your account balance" />
      </div>

      <div class="input-group">
        <label for="risk">Risk per Trade (%):</label>
        <input id="risk" type="number" v-model.number="risk" placeholder="Enter risk percentage" />
      </div>

      <div class="input-group">
        <label for="stopLoss">Stop-Loss Distance ($):</label>
        <input id="stopLoss" type="number" v-model.number="stopLoss" placeholder="Enter stop-loss distance" />
      </div>

      <div class="input-group">
        <label for="assetPrice">Asset Price ($):</label>
        <input id="assetPrice" type="number" v-model.number="assetPrice" placeholder="Enter asset price" />
      </div>

      <button @click="calculatePositionSize">Calculate Size</button>

      <div v-if="positionSize !== null" class="result">
        <p>
          Your Position Size: <b>{{ positionSize.toFixed(2) }} units</b>
        </p>
      </div>
    </div>
    <div class="video-container">
      <h2>Top Videos for Beginner Traders</h2>

      <!-- Video 1: Trading Psychology -->
      <div class="video">
        <h3>1. How to Master Trading Psychology | Brett Steenbarger</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rD5nQzbm0iI"
          title="How to Master Trading Psychology | Brett Steenbarger"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>

      <!-- Video 2: Risk Management 101 -->
      <div class="video">
        <h3>2. Risk Management 101 – For Day Trading Beginners</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ovf_CJhjey4"
          title="Risk Management 101 – For Day Trading Beginners"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>

      <!-- Video 3: Smart Money Concepts -->
      <div class="video">
        <h3>Smart Money Concepts For Beginners: The Blueprint To Trade Like Banks</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7NZXUvNduc0"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <h2>5. Risk-Reward Ratio: Aim for 1:2 or Higher 🎯</h2>
    <p>
      Now that you have a clear risk per trade, here’s a rule to help keep profits steady: always go for a
      <b>1:2 risk-reward ratio</b>. For every dollar I risk, I aim to make at least two.
    </p>
    <p>
      If I risk $10, I target $20 in profit. This is powerful – even if I only win half of my trades, I’m
      still profitable overall. Aiming for a realistic reward ensures that each win has the potential to cover
      a few losses. <b>Keeping your strategy profitable in the long run is key</b>. <br />Look closely how it
      works.
    </p>
    <img src="@/assets/tableRR.png" alt="" />

    <h2>6. Choosing the Right Timeframe</h2>
    <p>
      When it comes to timeframes, here’s the golden rule:
      <b>the higher the timeframe, the clearer the trend</b>. Higher timeframes show the big picture, while
      lower timeframes add noise and uncertainty.
    </p>
    <p>
      Always do a <b>top-down analysis</b>, starting from the weekly chart to understand the main trend, then
      narrowing down to the daily or 4-hour chart. This approach keeps you aligned with the bigger picture and
      reduces your chances of being thrown off by short-term fluctuations. Finding the right timeframe is
      about being in sync with your strategy, not just chasing trends.
    </p>
    <h2>From 1d to 1h analysis 👇</h2>
    <a href="https://ru.tradingview.com/?aff_id=144738">Get $15 sale on TradigView</a>
    <img src="@/assets/1d.png" alt="" />
    <img src="@/assets/4h.png" alt="" />
    <img src="@/assets/1h.png" alt="" />

    <h1>Choose the Right Trading Approach for Your Personality</h1>
    <p>Your trading approach should fit your mindset. Here are three types to consider:</p>

    <h2>7. Intraday Trading ⏰</h2>
    <p>
      If you like quick, fast-paced trades, <b>intraday trading</b> might be your style. I tried it and
      learned it’s all about focus and quick decisions. For example, if I buy a coin at $50, I might aim to
      sell it at $53 within a few hours or even minutes. These short trades usually target 1-2% gains and
      taught me about discipline and controlling my emotions. It’s intense, but a great way to build your
      trading skills. <br /><br />But be careful - many people trade intraday because of the desire for
      excitement and emotions - this is gambling, it has nothing to do with trading
    </p>
    <img src="@/assets/intraday.png" alt="" />

    <h2>8. Swing Trading: Patience Pays Off 🕰️</h2>
    <p>
      For a more relaxed approach, <b>swing trading</b> lets you hold trades for days or weeks, focusing on
      larger trends with less screen time. For instance, I might buy a coin at $50 expecting it to reach $60
      over a week. I use a wider stop-loss to account for fluctuations, aiming for 5-10% gains. Swing trading
      is great if you want to trade alongside other responsibilities.

      <br /><br />Swing trading allows you to live a full life, earn no less than intraday, but not be
      emotionally attached to the process. You place orders and go about your business without looking at how
      the trade is going. Discipline is above all else
    </p>
    <img src="@/assets/swing.png" alt="" />

    <h2>9. Trend Following</h2>
    <p>
      Some traders focus only on following long-term trends and avoid the short-term noise altogether. With
      <b>trend following</b>, you wait for a clear, established trend on higher timeframes (like the weekly),
      and simply follow it. This approach requires patience but can yield significant results without needing
      constant screen time.

      <br /><br />In the future, there will be options to trade countertrends, but for now, the trend is your
      friend
    </p>

    <img src="@/assets/trend.png" alt="" />

    <h2>10. The Power of a Trading Journal</h2>
    <p>
      In trading, success often comes down to one word: consistency. And the best way to achieve consistency
      is through a well-maintained trading journal. Why? Because without tracking your trades, you’re flying
      blind, unable to identify what’s working and what’s holding you back.

      <br /><br />A trading journal helps you analyze your results, spot recurring mistakes, and, most
      importantly, find patterns that lead to regular profits. Imagine discovering that every time you trade
      against a clear trend, you lose, or that certain setups consistently bring you gains. This isn’t
      guesswork—it’s actionable data you’ve gathered from your own experience.

      <br /><br />Here’s the key: always document why you entered a trade. Take a screenshot of the chart
      before entering the position, and write a brief explanation of your reasoning. What indicators or trends
      caught your eye? What was your target and stop-loss plan? This small habit can save you from repeating
      errors and help you refine your strategy over time.

      <br /><br />Self-analysis is a trader’s secret weapon. Review your journal weekly or monthly, and look
      for common threads: what’s working, and what needs adjustment? It’s not just about fixing mistakes—it’s
      about doubling down on what works. Over time, this practice will elevate your trading from random to
      strategic, and that’s where real success begins.
    </p>

    <img src="@/assets/journal.png" alt="" />

    <h2>11. Keep Emotions in Check - This Isn’t Gambling 🎲</h2>
    <p>
      The biggest lesson? <b>Trading isn’t gambling</b>. Losses are part of the game, but how you react makes
      all the difference. Letting emotions take over leads to revenge trading, chasing losses, and ultimately
      blowing up your account.
    </p>
    <p>
      Losses will happen – the goal is to learn from them and adjust. Emotionally reacting to losses and
      taking random risks is what separates gambling from disciplined trading. It’s all about managing your
      mindset and keeping things calculated and strategic. <br /><br /><b>Tips from my experience:</b>
      <br /><br /><br />
      1. Don't trade in a bad mood, if you have a fight or just a bad day - don't trade. <br />
      <br />2. Always keep a trading journal, this will allow you to see what mistakes you repeat and avoid
      them in the future, you will also be able to track the time and types of trades that bring the most
      profit. <br />
      <br />3. Allocate specific time for trading - for example, only the NY session, this will allow you to
      treat trading as a job. <br /><br />4. In the beginning, avoid trading during the news, ideally close
      all positions before the news is released. <br /><br />5. Risk management is everything. It is enough to
      forget to set a stop loss once and you will lose everything. Take trading seriously. <br />Good luck and
      stay coldminded.
    </p>

    <p>
      Did you already know everything from the beginner's section? <br /><br />Move on and get better with
      me👇
    </p>
    <router-link to="amateur">Amateur guide</router-link>
  </div>
</template>

<script>
export default {
  name: 'PositionSizeCalculator',
  data() {
    return {
      balance: 0,
      risk: 0,
      stopLoss: 0,
      assetPrice: 0,
      positionSize: null,
    }
  },
  methods: {
    calculatePositionSize() {
      if (this.balance > 0 && this.risk > 0 && this.stopLoss > 0 && this.assetPrice > 0) {
        const riskAmount = (this.balance * this.risk) / 100
        this.positionSize = riskAmount / (this.stopLoss * this.assetPrice)
      } else {
        this.positionSize = null
        alert('Please enter valid values for all fields.')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.newbie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
  padding: 12px;
  max-width: 90%;
}
.position-size-calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 1.3em;
  max-width: 400px;
  margin: auto;
  padding: 32px;
  flex-wrap: wrap;
  border-radius: 8px;
  background-color: #1e1e1e;
  color: #d6d6d6;
  text-align: center;
  button {
    width: 40%;
    border-radius: 10px;
    padding: 6px;
  }
  .input-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }
}
img {
  max-width: 80%;
  max-height: 70%;
  border-radius: 10px;
}
a {
  text-align: center;
  color: #ffcc00;
  font-size: 1.7em;
  font-family: fantasy;
  animation: pulse 5s ease-in-out infinite;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1); /* Slightly larger */
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
h1 {
  color: #ffcc00;
  font-size: 2.5em;
  margin-top: 20px;
}
h2 {
  color: #adffe4;
  font-size: 2em;
  margin-top: 10px;
}
p {
  color: #d6d6d6;
  font-size: 1.6em;
  line-height: 1.6;
  margin-top: 5px;
}

.video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #1e1e1e;
  color: #d6d6d6;
  border-radius: 10px;
}

.video h3 {
  font-size: 1.2rem;
  color: #ffcc00;
  margin-bottom: 10px;
  text-align: center;
}

iframe {
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  max-width: 100%;
  height: auto;
}
</style>
