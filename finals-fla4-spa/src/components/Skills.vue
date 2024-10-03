<template>
  <div class="container skills-container mt-5">
    <h2 class="text-center section-title mb-4">Skills</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h5 class="card-title">Front-End</h5>
            <ul class="list-group">
              <li class="list-group-item list-group-item-primary">HTML</li>
              <li class="list-group-item list-group-item-light">CSS</li>
              <li class="list-group-item list-group-item-light">JavaScript</li>
              <li class="list-group-item list-group-item-light">React</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h5 class="card-title">Back-End</h5>
            <ul class="list-group">
              <li class="list-group-item list-group-item-primary">Node.js</li>
              <li class="list-group-item list-group-item-light">Express.js</li>
              <li class="list-group-item list-group-item-light">MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h5 class="card-title">Tools</h5>
            <ul class="list-group">
              <li class="list-group-item list-group-item-primary">Git</li>
              <li class="list-group-item list-group-item-light">
                RESTful APIs
              </li>
              <li class="list-group-item list-group-item-light">
                Responsive Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style scoped>
.skills-container {
  background-color: #f9fafc;
  padding: 40px;
  border-radius: 10px;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #202a44;
  padding-bottom: 10px;
}

.card {
  border: none;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.list-group-item {
  transition: background-color 0.3s ease;
}

.list-group-item-primary {
  background-color: #202a44;
  color: white;
  font-weight: bold;
}

.list-group-item-light {
  background-color: #ffffff;
  color: #555;
}

.list-group-item:hover {
  background-color: #004481;
}
</style>
