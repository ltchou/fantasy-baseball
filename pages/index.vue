<template>
  <div class="container">
    <header class="hero">
      <h1 class="title">Fantasy Baseball League</h1>
      <h2 class="title-hint">Nothing on it for now</h2>
      <p class="subtitle">
        Build your dream team and compete with friends in the ultimate fantasy baseball experience
      </p>
    </header>

    <section class="features">
      <div class="feature-grid">
        <div class="feature-card">
          <h3>Draft Players</h3>
          <p>Choose from thousands of MLB players to build your perfect roster</p>
        </div>
        <div class="feature-card">
          <h3>Live Scoring</h3>
          <p>Track your team's performance with real-time stats and updates</p>
        </div>
        <div class="feature-card">
          <h3>Compete & Win</h3>
          <p>Join leagues with friends and compete for the championship</p>
        </div>
      </div>
    </section>

    <section class="cta">
      <button class="btn-primary">Get Started</button>
      <button class="btn-secondary">View Leagues</button>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Fantasy Baseball League - Home',
  meta: [
    {
      name: 'description',
      content:
        'Join the ultimate fantasy baseball experience. Draft players, track stats, and compete with friends in our fantasy baseball league.'
    }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.title-hint {
  font-size: 1.5rem;
  color: #95a5a6;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
}

.features {
  margin-bottom: 4rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 8px;
  background: #f8f9fa;
  text-align: center;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.cta {
  text-align: center;
  gap: 1rem;
  display: flex;
  justify-content: center;
}

.btn-primary {
  background: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-primary:hover {
  background: #2980b9;
}

.btn-secondary {
  background: transparent;
  color: #3498db;
  border: 2px solid #3498db;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: #3498db;
  color: white;
}
</style>
