<template>
  <div>
    <header class="hero bg-dark text-white text-center py-5">
      <h1>Discover Timeless Elegance</h1>
      <p>Your journey to exquisite timepieces starts here.</p>
      <router-link class="btn btn-primary btn-lg" to="/products"
        >Shop Now</router-link
      >
    </header>

    <div class="container my-5">
      <h2 class="text-center mb-4 text-primary">Our Collections</h2>
      <div class="row">
        <div
          class="col-md-4"
          v-for="collection in collections"
          :key="collection.title"
        >
          <div class="card shadow">
            <img
              :src="collection.image"
              class="card-img-top"
              :alt="collection.title"
            />
            <div class="card-body">
              <h5 class="card-title">{{ collection.title }}</h5>
              <p class="card-text">{{ collection.description }}</p>
              <router-link class="btn btn-primary" :to="collection.link"
                >View Collection</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-center mt-5 text-primary">What Our Customers Say</h2>
      <div class="row">
        <div
          class="col-md-4"
          v-for="testimonial in testimonials"
          :key="testimonial.author"
        >
          <blockquote class="blockquote text-center">
            <p class="mb-0">{{ testimonial.quote }}</p>
            <footer class="blockquote-footer">{{ testimonial.author }}</footer>
          </blockquote>
        </div>
      </div>

      <h2 class="text-center mt-5 text-primary">Stay Updated</h2>
      <form class="text-center">
        <div class="mb-3">
          <label for="email" class="form-label"
            >Subscribe to our newsletter</label
          >
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" class="btn btn-primary">Subscribe</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      collections: [
        {
          title: "Luxury Collection",
          image: require("@/assets/watch1.jpg"),
          description: "Explore our luxurious timepiecese.",
          link: "/products",
        },
        {
          title: "Sport Collection",
          image: require("@/assets/watch2.jpg"),
          description: "Discover durable watches.",
          link: "/products",
        },
        {
          title: "Casual Collection",
          image: require("@/assets/watch3.jpg"),
          description: "Browse our casual watches for everyday.",
          link: "/products",
        },
      ],
      testimonials: [
        { quote: "The craftsmanship is unparalleled!", author: "John Doe" },
        { quote: "These watches make a statement!", author: "Jane Smith" },
        {
          quote: "I get compliments every time I wear mine!",
          author: "Emily Johnson",
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
  height: 100%;
  width: 100%;
}
.card-img-top {
  height: 300px;
  object-fit: cover;
}

.card:hover {
  transform: scale(1.05);
}
blockquote {
  border-left: 4px solid #007bff;
  padding-left: 1rem;
}

/* adding margin-top to testimonial author */
blockquote footer {
  margin-top: 1rem;
}
</style>
