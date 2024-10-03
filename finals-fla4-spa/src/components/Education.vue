<template>
  <div class="container education-container mt-5">
    <h2 class="text-center section-title mb-5">Education</h2>

    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h5 class="card-title institution-name">Holy Angel University</h5>
        <p class="card-text degree">
          <strong>Degree:</strong> Bachelor of Science in Information Technology
        </p>
        <p class="card-text major"><strong>Major:</strong> Web Development</p>
        <p class="card-text year"><strong>Year:</strong> 2026</p>
      </div>
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h5 class="card-title institution-name">Holy Angel University</h5>
        <p class="card-text degree">
          <strong>Degree:</strong> Senior High School
        </p>
        <p class="card-text strand">
          <strong>Strand:</strong> Science, Technology, Engineering, Mathematics
        </p>
        <p class="card-text year"><strong>Year:</strong> 2021</p>
      </div>
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h5 class="card-title institution-name">
          Don Bosco Technical Institute Tarlac
        </h5>
        <p class="card-text degree">
          <strong>Degree:</strong> Kinder to Junior High School
        </p>
        <p class="card-text year"><strong>Year:</strong> 2019</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style scoped>
.education-container {
  background-color: #f9fafc;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #202a44;
  padding-bottom: 10px;
  margin-bottom: 40px;
}

.card {
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.card-text {
  font-size: 1.1rem;
  color: #555;
}

.degree,
.major,
.strand,
.year {
  margin-bottom: 8px;
}

.institution-name {
  color: #202a44;
  font-weight: bold;
}
</style>
