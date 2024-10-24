<template>
  <div class="home">
    <CardComponent rating="0.1" title="Newbie" :image="require('@/assets/poor.jpg')" />
    <CardComponent rating="3.2" title="Amateur" :image="require('@/assets/amateur.jpg')" />
    <CardComponent rating="5.0" title="Profi" :image="require('@/assets/rich.jpg')" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import CardComponent from '@/components/CardComponent.vue'

@Options({
  components: {
    HelloWorld,
    CardComponent,
  },
})
export default class HomeView extends Vue {
  src: any = 'src/assets/poor.png'
}
</script>

<style lang="scss">
.home {
  padding: 2rem;
  display: flex;
  align-content: space-between;
  align-items: center;
  justify-content: center;
}
</style>
