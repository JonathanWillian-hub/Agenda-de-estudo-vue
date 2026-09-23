<template>
  <div class="home">
    <div class="home-card">
      <h1>📚 Agenda de Estudos</h1>
      <p class="author">Jonathan Willian</p>
      <p class="description">
        Organize seus estudos de forma simples e eficiente. Adicione suas tarefas
        e acompanhe seu progresso diário para alcançar seus objetivos acadêmicos.
      </p>
      <router-link to="/tarefas" class="btn-tarefas">
        📝 Ir para Minhas Tarefas
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.home-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 48px;
  max-width: 520px;
  width: 100%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  font-size: 2rem;
  background: linear-gradient(135deg, #a78bfa, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.author {
  font-size: 1.1rem;
  color: #94a3b8;
  margin-bottom: 20px;
  font-weight: 500;
}

.description {
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 32px;
}

.btn-tarefas {
  display: inline-block;
  padding: 14px 32px;
  background: linear-gradient(135deg, #7c3aed, #3b82f6);
  color: #fff;
  text-decoration: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);
}

.btn-tarefas:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.6);
}
</style>
