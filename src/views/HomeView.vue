<template>
  <div class="home">
    <div class="top">
      <h1>
        Why should you get
        <span class="bg-text">Funded</span> ?
      </h1>
      <p>
        Why <b>risk</b> your own cash when you can trade with someone else's? 🤔<br /><b
          >Getting funded means big capital</b
        >
        with little investment from your pocket. Plus, if things go south, it's their money on the line, not
        yours. <br /><br /><b
          >This is an opportunity to grow faster with less<span class="red"> risk</span>.</b
        >
      </p>
    </div>
    <div class="middle">
      <h1>Choose your <span class="bg-text2">LVL</span></h1>
      <p>
        Think you're a trading guru? 🧠 <Br></Br> Even the best can stumble. Take a quick run through our
        levels and challenge yourself. You might discover gaps you didn't know you had. <br /><br />No one’s
        perfect, but being aware is the first step to mastery.
      </p>
      <div class="card-wrap">
        <CardComponent rating="0.1" title="Newbie" :image="require('@/assets/poor.jpg')" />
        <CardComponent rating="3.2" title="Amateur" :image="require('@/assets/amateur.jpg')" />
        <CardComponent rating="5.0" title="Profi" :image="require('@/assets/rich.jpg')" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import CardComponent from '@/components/CardComponent.vue'

export default {
  components: { CardComponent },
  mounted() {
    this.$nextTick(() => {
      gsap.from('.home > *', {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 1,
        stagger: 0.3,
        ease: 'power4.out',
      })
    })
  },
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  .top {
    max-width: 85%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .red {
      color: rgba(255, 0, 0, 0.66);
    }
  }
  .middle {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 85%;
    .card-wrap {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
    }
  }
}
p {
  max-width: 1000px;
  color: #d6d6d6;
  font-size: 2rem;
}
h1 {
  width: 100%;
  font-size: calc(2rem + 3.5vw);
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  margin: 20px 0;
  word-break: break-word;
  color: #d6d6d6;
}

.bg-text {
  background-image: url('@/assets/BTC.png');
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  font-weight: bold;
  animation: marketMovement 5s infinite ease-in-out;
  font-size: 1.2em;
}
.bg-text2 {
  background-image: url('@/assets/lvl.png');
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  font-weight: bold;
  animation: marketMovement2 6s infinite linear;
  font-size: 1.2em;
}

@keyframes marketMovement {
  0%,
  100% {
    background-position-y: 0;
  }
  50% {
    background-position-y: 15px;
  }
}
@keyframes marketMovement2 {
  0%,
  100% {
    background-position-x: 0;
  }
  50% {
    background-position-x: 25px;
  }
}

.card {
  flex: 1 1 calc(33.333% - 1rem);
  max-width: calc(33.333% - 1rem);
  background-color: #242738;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  color: #eeeeee;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
