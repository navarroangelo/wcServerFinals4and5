<template>
  <div>
    <div class="container mt-5">
      <h2 class="text-center mb-4 text-primary">About Chronos Timekeepers</h2>
      <p class="lead text-muted">
        Founded in 2024, Chronos Timekeepers was born from a passion for
        timeless craftsmanship and modern design. We believe that a watch is
        more than just a timekeeping device; it’s a statement of style and
        personality.
      </p>
      <p class="text-muted">
        Our mission is to provide high-quality, stylish watches that celebrate
        individuality and sophistication. Each watch is meticulously crafted
        using the finest materials, ensuring durability and elegance. Our
        artisans pour their heart and soul into every timepiece, blending
        tradition with innovation.
      </p>
      <p class="text-muted">
        We are committed to sustainable practices, using ethically sourced
        materials and eco-friendly packaging.
      </p>
      <h3 class="mt-5 text-primary">Our Values</h3>
      <ul class="list-group">
        <li class="list-group-item">Quality craftsmanship</li>
        <li class="list-group-item">Timeless design</li>
        <li class="list-group-item">Sustainable practices</li>
        <li class="list-group-item">Customer satisfaction</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
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
.text-muted {
  color: #6c757d;
}
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
.list-group-item {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
}
.list-group-item:hover {
  background-color: #e2e6ea;
}
</style>
