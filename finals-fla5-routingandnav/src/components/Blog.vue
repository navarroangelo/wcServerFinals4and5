<template>
  <div>
    <div class="container mt-5">
      <h2 class="text-center mb-4 text-primary">Our Blog</h2>
      <div class="row">
        <div class="col-md-4" v-for="post in blogPosts" :key="post.title">
          <div class="card shadow-sm mb-4">
            <img :src="post.image" class="card-img-top" :alt="post.title" />
            <div class="card-body">
              <h5 class="card-title text-dark">{{ post.title }}</h5>
              <p class="card-text text-muted">{{ post.summary }}</p>
              <router-link class="btn btn-primary" :to="`/blog/${post.id}`"
                >Read More</router-link
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
  name: "Blog",
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: "The Art of Watchmaking",
          image: require("@/assets/blog1.jpg"),
          summary:
            "Discover the intricate process of crafting fine timepieces.",
        },
        {
          id: 2,
          title: "Choosing the Right Watch",
          image: require("@/assets/blog2.jpg"),
          summary: "Tips on how to select the perfect watch for your style.",
        },
        {
          id: 3,
          title: "Watch Maintenance Tips",
          image: require("@/assets/blog3.jpg"),
          summary: "Learn how to care for your timepiece to ensure longevity.",
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
.card {
  border: none;
  height: 95%;
  width: 95%;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.text-primary {
  color: #007bff;
}
.text-dark {
  color: #343a40;
}
.text-muted {
  color: #6c757d;
}
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
</style>
