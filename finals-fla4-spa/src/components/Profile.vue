<template>
  <div class="container mt-5 profile-container">
    <div class="row align-items-center">
      <div class="col-md-4 text-center">
        <img
          src="../assets/myImage.jpg"
          class="img-fluid rounded-circle shadow-sm profile-image"
          alt="Profile Photo"
        />
      </div>
      <div class="col-md-8">
        <h1 class="display-4 profile-name">Marcel Angelo Navarro</h1>
        <p class="lead text-muted">Front-End Web Developer</p>
        <p class="mb-4">
          I'm a passionate Front-End Developer with experience in building
          responsive web applications using modern JavaScript frameworks like
          React and Vue.js. I enjoy crafting interactive and intuitive user
          interfaces with a focus on clean, maintainable code.
        </p>
        <ul class="list-unstyled">
          <li class="mb-2">
            <i class="fas fa-map-marker-alt"></i>
            <strong> Location:</strong> Tarlac City, Philippines
          </li>
          <li class="mb-2">
            <i class="fas fa-map-marker-alt"></i>
            <strong> Github:</strong>
            <a
              href="https://github.com/navarroangelo"
              target="_blank"
              class="profile-email"
              >@navarroangelo</a
            >
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            <strong> Email:</strong>
            <a href="mailto:marcelxangelo@gmail.com" class="profile-email"
              >marcelxangelo@gmail.com</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
.profile-container {
  padding: 40px 0;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 20em;
  height: 20em;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #202a44;
}

.profile-name {
  font-weight: 600;
  color: #343a40;
}

.lead {
  font-size: 1.25rem;
  color: #6c757d;
}

.profile-email {
  color: #202a44;
  text-decoration: none;
}

.profile-email:hover {
  color: #004481;
  text-decoration: underline;
}

i {
  color: #6c757d;
  margin-right: 5px;
}
</style>
