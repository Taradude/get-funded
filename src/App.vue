<template>
  <div id="appp" class="animated-gradient">
    <div class="preloader" ref="preloader">
      <div class="preloader-text">{{ displayedText }}</div>
    </div>

    <div class="content" ref="content" v-if="!isLoading">
      <div class="router-wrap">
        <nav>
          <router-link to="/"><span>Home</span></router-link>
          <a href="https://www.youtube.com/@GetFundedOrDieTryin"><img src="@/assets/youtube.png" alt="" /></a>
          <a href="https://www.instagram.com/getfundedordietryin_/profilecard/?igsh=cXNmM2tmMGoxdzVk"
            ><img src="@/assets/instagram.png" alt=""
          /></a>
          <a href="https://www.tiktok.com/@getfundedordietryin?_t=8rQXpre93ou&_r=1"
            ><img src="@/assets/tiktok.png" alt=""
          /></a>
        </nav>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  data() {
    return {
      isLoading: true,
      fullText: 'Best time to change your life - was yesterday',
      displayedText: '',
      typingSpeed: 80,
    }
  },
  mounted() {
    this.typeText(0)
    setTimeout(() => {
      gsap.timeline().to(this.$refs.preloader, {
        filter: 'blur(10px)',
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
          this.isLoading = false
          gsap.fromTo(this.$refs.content, { opacity: 0 }, { opacity: 1, duration: 1 })
        },
      })
    }, 5150)
  },
  methods: {
    typeText(index) {
      if (index < this.fullText.length) {
        this.displayedText += this.fullText[index]
        setTimeout(() => {
          this.typeText(index + 1)
        }, this.typingSpeed)
      }
    },
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: monospace;
}
html {
  overflow-x: hidden;
}
#appp {
  overflow-x: hidden;
}
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 6px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  pointer-events: none; /* Забороняє взаємодію після зникнення */
}

.animated-gradient {
  pointer-events: auto; /* Дозволяє взаємодію */
}
.preloader-text {
  color: #fff;
  font-size: 2em;
  text-align: center;
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
nav {
  position: relative;
  top: 10px;
  padding: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: flex-end;
  align-items: center;
  gap: 36px;
  span {
    font-size: 1.5em;
    color: azure;
  }
  img {
    width: 40px;
  }
}
.animated-gradient {
  position: relative; /* Додає розміщення для розтягування */
  min-height: 100vh;
  width: 100vw;
  overflow: hidden; /* Прибирає непотрібну прокрутку */
  background-size: 300% 300%;
  background-color: #4c028d;
  background-image: radial-gradient(at 97% 97%, #2d0621 0, transparent 47%),
    radial-gradient(at 1% 86%, #14091a 0, transparent 42%),
    radial-gradient(at 63% 9%, #4e2876 0, transparent 50%),
    radial-gradient(at 34% 44%, #112039 0, transparent 44%),
    radial-gradient(at 92% 54%, rgb(54, 10, 77) 0, transparent 50%),
    radial-gradient(at 89% 15%, #1f0a25 0, transparent 50%),
    radial-gradient(at 1% 0%, #000000 0, transparent 50%),
    radial-gradient(at 49% 78%, #080b3b 0, transparent 50%);
  animation: gradient 30s linear infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
