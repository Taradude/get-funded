<template>
  <div class="home">
    <div class="top">
      <h1>
        Why should you get
        <span class="bg-text">Funded</span> ?
      </h1>
      <p>
        Why <b>risk</b> your own cash💵 when you can trade with someone else's? 🤔<br /><b
          ><br />Getting funded means big capital</b
        >
        with little investment from your pocket. Plus, if things go south, it's their money on the line, not
        yours.😏 <br /><br /><b
          >This is an opportunity to grow faster with less<span class="red"> risk</span>.</b
        >
      </p>
      <CalcComponent />
    </div>
    <div class="middle">
      <h1>Choose your <span class="bg-text2">LVL</span></h1>
      <p>
        <b>Think you're a trading guru? </b>🧠 <br />
        <br />Even the best can stumble. Take a quick run through levels and <b>challenge yourself</b>. You
        might discover gaps you didn't know you had. <br /><br /><b>No one’s perfect,</b>
        but being aware is the first step to mastery.
      </p>
      <div class="card-wrap">
        <CardComponent
          rating="0.1"
          title="Newbie"
          :image="require('@/assets/poor.png')"
          description="buy high - sell low"
          routeName="newbie"
        />
        <CardComponent
          rating="2.7"
          title="Amateur"
          :image="require('@/assets/amateur.png')"
          description="pattern trader"
          routeName="amateur"
        />
        <CardComponent
          rating="4.4"
          title="Profi"
          :image="require('@/assets/rich.png')"
          description="trap trader"
          routeName="profi"
        />
      </div>
    </div>
    <div class="bottom">
      <h1>Think you're ready?</h1>
      <p>
        <span class="center"
          >Don't waste your time! <br />Because time - is money <span class="timer"></span></span
        ><br /><br />
        Click the link, become a <span class="fantasy">FUNDED TRADER</span>, and prove you're the real deal.
      </p>
      <div class="img">
        <img src="@/assets/e8.png" alt="" />
        <img src="@/assets/crypto.png" alt="" />
      </div>
      <MarqueeComponent
        :leftImage="require('@/assets/e8logo.png')"
        :rightImage="require('@/assets/cryptologo.png')"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CardComponent from '@/components/CardComponent.vue'
import CalcComponent from '@/components/CalcComponent.vue'
import MarqueeComponent from '@/components/MarqueeComponent.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  components: { CardComponent, CalcComponent, MarqueeComponent },
  mounted() {
    this.$nextTick(() => {
      // Анімація загального входу
      gsap.from('.home > *', {
        y: -50,
        opacity: 0,
        duration: 1.5,
        delay: 1,
        stagger: 0.3,
        ease: 'power4.out',
      })

      // Анімація для карток у компоненті `.middle`
      gsap.from('.middle .card-wrap > *', {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1, // Затримка в 1 секунду
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.middle',
          start: 'top 80%',
        },
      })

      // Анімація для зображень всередині карток
      gsap.from('.middle .card-wrap img', {
        opacity: 0,
        duration: 0.5,
        delay: 2.5, // Затримка 0.5 секунди після карток
        ease: 'power2.out',
        stagger: 0.6,
        scrollTrigger: {
          trigger: '.middle',
          start: 'top 80%',
        },
      })
    })
  },
}
</script>

<style lang="scss">
.home {
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    align-items: center;
    .card-wrap {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      gap: 36px;
    }
  }
}
p {
  max-width: 1000px;
  color: #d6d6d6;
  font-size: 2rem;
  max-width: 85%;
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
  animation: marketMovement2 10s infinite linear;
  font-size: 1.5em;
}
.bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
  }
  .center {
    text-align: center;
    display: block;
  }
  .fantasy {
    font-family: fantasy;
  }
  .img {
    display: flex;
    gap: 20px; /* Простір між зображеннями */
    justify-content: center; /* Вирівнювання зображень по центру */
    flex-wrap: wrap; /* Дозволяє переносити зображення на новий рядок на менших екранах */
    padding: 20px 0;

    img {
      max-width: 100%; /* Зображення не перевищують ширину контейнера */
      height: auto; /* Зберігає пропорції зображення */
      width: 300px; /* Базовий розмір зображення */
      border-radius: 10px; /* Округлі краї (за потреби) */
      object-fit: cover; /* Підтримка кращого відображення для різних пропорцій */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Легка тінь */
    }
  }

  /* Адаптивний стиль для менших екранів */
  @media (max-width: 768px) {
    .img img {
      width: 200px; /* Зменшує розмір зображення на середніх екранах */
    }
  }

  @media (max-width: 480px) {
    .img img {
      width: 150px; /* Зменшує розмір зображення на маленьких екранах */
    }
  }
}

.timer {
  position: relative;
  top: 5px;
  width: 25px;
  height: 25px;
  border-top: 3px solid #03fa8b;
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes marketMovement {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 0 100%; /* Рух вниз */
  }
  100% {
    background-position: 0 0; /* Повернення в початкове положення */
  }
}

@keyframes marketMovement2 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0; /* Рух праворуч */
  }
  100% {
    background-position: 0 0; /* Повернення в початкове положення */
  }
}

.card {
  flex: 1 1 calc(33.333% - 1rem);
  max-width: calc(33.333% - 1rem);
  background-color: #24273808;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  color: #eeeeee;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
    .middle {
      max-width: 85%;
    }
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
