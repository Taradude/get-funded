<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">
        <h3>{{ title }}</h3>
      </div>
    </div>
    <div class="card-content">
      <img :src="image" alt="Card image" class="card-image" />
      <div class="card-rating">{{ rating }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    rating: Number,
    title: String,
  },
}
</script>

<style scoped lang="scss">
.card {
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.258);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(17.9px);
  -webkit-backdrop-filter: blur(17.9px);
  border: 1px solid rgba(57, 56, 56, 0.31);
  text-align: center;
  color: #d6d6d6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  margin: 10px;
  position: relative;
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-end;

  height: 10%;
}
.card-content {
  height: 90%;
  width: 95%;
}

.card-image {
  width: 90%;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
}

.card-title {
  font-size: 20px;
  margin: 10px 0;
}

.card-rating {
  background-color: #4a037c;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%;
    max-width: 100%;
  }
}
</style>
