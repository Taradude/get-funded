<template>
  <div class="card">
    <img :src="image" alt="Card image" class="card-image" />
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-rating">{{ rating }}⭐</div>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    rating: String,
    title: String,
    description: String,
  },
}
</script>

<style scoped lang="scss">
@property --rotate {
  syntax: '<angle>';
  initial-value: 132deg;
  inherits: false;
}

.card {
  background-color: #151924ea;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #d6d6d6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 300px;
  margin: 20px;
  position: relative;
}

.card::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 16px;
  background-image: linear-gradient(var(--rotate), #5ddcff52, #3c66e353 43%, #4e00c244);
  z-index: -1;
  animation: spin 6s linear infinite;
  opacity: 1;
}

.card:hover::before {
  opacity: 0.7;
}

.card-image {
  width: calc(100% + 110px);
  height: auto;
  margin: -10px;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
}

.card-content {
  // margin: 15px;
}

.card-title {
  font-size: 24px;
  margin: 10px 0;
  font-weight: bold;
}

.card-rating {
  font-size: 18px;
  margin: 10px 0;
  color: #ffcc00;
}

.card-description {
  font-size: 14px;
  color: #bbb;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 366deg;
  }
}
</style>
