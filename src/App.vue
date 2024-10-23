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
/* Прелоадер */
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
  opacity: 1;
  transition: opacity 1.5s ease-in-out; /* Плавне зникнення */
}

.preloader-text {
  color: #fff;
  font-size: 2em;
  font-family: 'Courier New', Courier, monospace; /* Стиль для анімації друкування */
}

/* Коли прелоадер зникає, його opacity зменшується */
.preloader-hidden {
  opacity: 0;
  visibility: hidden;
}

/* Фон */
.animated-gradient {
  margin: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-66deg, #000000, #2d1075, #0f0b5f, #000000);
  background-size: 250% 250%;
  overflow: hidden;
  animation: gradient-animation 16s ease infinite;
}

/* Анімація фону */
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
