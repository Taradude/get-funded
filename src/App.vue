<template>
  <div id="app">
    <!-- Прелоадер -->
    <div class="preloader" v-if="isLoading">
      <div class="preloader-text">{{ displayedText }}</div>
    </div>

    <!-- Основний контент сайту -->
    <div v-else class="animated-gradient">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true, // Стан для прелоадера
      fullText: 'Best time to change your life - was yesterday', // Текст для анімації друкування
      displayedText: '', // Текст, який відображається
      typingSpeed: 100, // Швидкість друкування
    }
  },
  mounted() {
    // Анімація друкування тексту
    this.typeText(0)

    // Затримка перед зникненням прелоадера
    setTimeout(() => {
      this.isLoading = false
    }, 7000) // Прелоадер триватиме 7 секунд
  },
  methods: {
    // Метод для поступового друкування тексту
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
nav {
  display: flex;
  justify-content: center;
}
.preloader {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
  opacity: 1;
  transition: opacity 1.5s ease-in-out; /* Плавне зникнення */
}

.preloader-text {
  color: #fff;
  font-size: 2em;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  word-wrap: break-word;
  max-width: 90vw;
}

/* Коли прелоадер зникає, його opacity зменшується */
.preloader-hidden {
  opacity: 0;
  visibility: hidden;
}
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
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

body {
  padding: 0;
  margin: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
