<template>
  <div id="appp" class="animated-gradient">
    <div class="preloader" ref="preloader">
      <div class="preloader-text">{{ displayedText }}</div>
    </div>

    <div class="content" ref="content" v-if="!isLoading">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
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
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
.animated-gradient {
  min-height: 100vh;
  width: 100%;
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
