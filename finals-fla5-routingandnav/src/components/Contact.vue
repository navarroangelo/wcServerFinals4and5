<template>
  <div>
    <div class="container mt-5">
      <h2 class="text-center mb-4 text-primary">Contact Us</h2>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" required />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea
            class="form-control"
            id="message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
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
.form-label {
  font-weight: 500;
}
.form-control {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
.btn-primary:hover {
  background-color: #0056b3;
}
</style>
