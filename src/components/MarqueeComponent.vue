<template>
  <div class="container">
    <div class="marquee-container">
      <svg width="100%" height="120px" viewBox="0 0 1000 100">
        <defs>
          <path
            id="text-path"
            d="M -50 50 Q 200 -50, 400 50 Q 600 150, 800 50 Q 1000 -50, 1200 50"
            fill="transparent"
          />
        </defs>
        <path
          d="M -50 50 Q 200 -50, 400 50 Q 600 150, 800 50 Q 1000 -50, 1200 50"
          fill="none"
          stroke="#212f3d"
          stroke-width="2rem"
        />

        <text
          font-size="1.5vw"
          fill="#ffffff"
          font-family="Rubik, sans-serif"
          class="uppercase-text"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          <textPath id="marquee-text" href="#text-path" dy="14em">
            You talk about it, but when will you do it?
          </textPath>
        </text>
      </svg>
    </div>

    <div class="cards">
      <div class="card">
        <img :src="carImage1" alt="Car 1" />
      </div>
      <div class="card">
        <img :src="carImage2" alt="Car 2" />
      </div>
    </div>

    <div class="marquee-container">
      <svg width="100%" height="120px" viewBox="0 0 1000 100">
        <defs>
          <path
            id="text-path-2"
            d="M -50 50 Q 200 -50, 400 50 Q 600 150, 800 50 Q 1000 -50, 1200 50"
            fill="transparent"
          />
        </defs>
        <path
          d="M -50 50 Q 200 -50, 400 50 Q 600 150, 800 50 Q 1000 -50, 1200 50"
          fill="none"
          stroke="#212f3d"
          stroke-width="2rem"
        />
        <text
          font-size="1.5vw"
          fill="#ffffff"
          font-family="Rubik, sans-serif"
          class="uppercase-text"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          <textPath id="marquee-text-2" href="#text-path-2" dy="0.4em">
            Still waiting? Guess those dreams aren't important enough.
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carImage1: require('@/assets/e8logo.png'),
      carImage2: require('@/assets/cryptologo.png'),
    }
  },
  mounted() {
    this.startMarquee('marquee-text', 'text-path', -0.9)
    this.startMarquee('marquee-text-2', 'text-path-2', 0.9)
  },
  methods: {
    startMarquee(id, pathId, speed) {
      const textPath = document.getElementById(id)
      const path = document.getElementById(pathId)
      const pathLength = path.getTotalLength()

      let offset = 0
      function animateText() {
        offset -= speed
        if (offset < 0) {
          offset = pathLength
        } else if (offset > pathLength) {
          offset = 0
        }
        textPath.setAttribute('startOffset', `${offset}px`)
        requestAnimationFrame(animateText)
      }
      animateText()
    },
  },
}
</script>

<style scoped>
.container {
  text-align: center;
  overflow: hidden;
}

.marquee-container {
  width: 100%;
  overflow: hidden;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 12px;
}

.card {
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card img {
  max-width: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.uppercase-text {
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .uppercase-text {
    font-size: 1.5em;
  }
}

@media (max-width: 480px) {
  .uppercase-text {
    font-size: 2em;
  }
}
</style>
