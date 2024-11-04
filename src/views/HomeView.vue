<template>
  <div class="home">
    <h1>Choose your LVL</h1>
    <CardComponent rating="0.1" title="Newbie" :image="require('@/assets/poor.jpg')" />
    <CardComponent rating="3.2" title="Amateur" :image="require('@/assets/amateur.jpg')" />
    <CardComponent rating="5.0" title="Profi" :image="require('@/assets/rich.jpg')" />
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
        stagger: 0.3, // Кожна картка з’являється з інтервалом 0.3 секунди
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
}
h1 {
  width: 100%;
  font-size: calc(2rem + 4vw); // Динамічний розмір, що залежить від ширини екрана
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  margin: 20px 0;
  word-break: break-word;
  color: #d6d6d6;
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
