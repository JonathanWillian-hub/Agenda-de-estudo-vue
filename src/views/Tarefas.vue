<template>
  <div class="tarefas">
    <div class="tarefas-card">
      <h1>📝 Minhas Tarefas</h1>

      <div class="input-group">
        <input
          v-model="novaTarefa"
          type="text"
          placeholder="Digite uma tarefa de estudo..."
          @keyup.enter="adicionarTarefa"
          class="input-tarefa"
        />
        <button @click="adicionarTarefa" class="btn-adicionar">
          Adicionar
        </button>
      </div>

      <ul class="lista-tarefas" v-if="tarefas.length > 0">
        <li v-for="(tarefa, index) in tarefas" :key="index" class="tarefa-item">
          <span>{{ tarefa }}</span>
          <button @click="removerTarefa(index)" class="btn-remover">✕</button>
        </li>
      </ul>

      <p v-else class="sem-tarefas">Nenhuma tarefa adicionada ainda.</p>

      <router-link to="/" class="btn-voltar">← Voltar para Início</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tarefas',
  data() {
    return {
      novaTarefa: '',
      tarefas: []
    }
  },
  methods: {
    adicionarTarefa() {
      if (this.novaTarefa.trim() !== '') {
        this.tarefas.push(this.novaTarefa.trim())
        this.novaTarefa = ''
      }
    },
    removerTarefa(index) {
      this.tarefas.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.tarefas {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  padding-top: 40px;
}

.tarefas-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  max-width: 560px;
  width: 100%;
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
  font-size: 1.8rem;
  background: linear-gradient(135deg, #a78bfa, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 28px;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
}

.input-tarefa {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #e2e8f0;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-tarefa::placeholder {
  color: #64748b;
}

.input-tarefa:focus {
  border-color: #7c3aed;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
}

.btn-adicionar {
  padding: 12px 24px;
  background: linear-gradient(135deg, #7c3aed, #3b82f6);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
  white-space: nowrap;
}

.btn-adicionar:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.5);
}

.lista-tarefas {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
}

.tarefa-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  margin-bottom: 8px;
  color: #e2e8f0;
  font-size: 0.95rem;
  animation: slideIn 0.3s ease-out;
  transition: background 0.2s ease;
}

.tarefa-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.btn-remover {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.btn-remover:hover {
  background: rgba(239, 68, 68, 0.3);
}

.sem-tarefas {
  text-align: center;
  color: #64748b;
  font-style: italic;
  margin-bottom: 24px;
  padding: 20px;
}

.btn-voltar {
  display: block;
  text-align: center;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.btn-voltar:hover {
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.05);
}
</style>
