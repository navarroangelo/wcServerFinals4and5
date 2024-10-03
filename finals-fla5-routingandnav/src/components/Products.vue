<template>
  <div>
    <div class="container mt-5">
      <h2 class="text-center mb-4 text-primary">Our Products</h2>
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.name">
          <div class="card shadow mb-4">
            <img
              :src="product.image"
              class="card-img-top"
              :alt="product.name"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text">
                <strong>Price: {{ product.price }}</strong>
              </p>
              <router-link
                class="btn btn-primary"
                :to="`/products/${product.id}`"
                >View Details</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Luxury Watch 1",
          image: require("@/assets/prod1.jpg"),
          description: "A stunning luxury watch with intricate design.",
          price: "$500",
        },
        {
          id: 2,
          name: "Sport Watch 1",
          image: require("@/assets/prod2.jpg"),
          description: "A robust sport watch built for adventure.",
          price: "$350",
        },
        {
          id: 3,
          name: "Casual Watch 1",
          image: require("@/assets/prod3.jpg"),
          description: "A stylish casual watch for everyday wear.",
          price: "$200",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
.text-primary {
  color: #007bff;
}
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
</style>
