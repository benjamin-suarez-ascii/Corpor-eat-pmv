<template>
  <div class="login-view">
    <div class="login-card">
      <h1>{{ isLoginMode ? 'Iniciar Sesión' : 'Registrarse' }}</h1>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
          />
        </div>

        <div v-if="auth.error" class="error-message">
          {{ auth.error }}
        </div>

        <button 
          type="submit" 
          class="submit-btn"
          :disabled="auth.loading"
        >
          <span v-if="auth.loading">Cargando...</span>
          <span v-else>{{ isLoginMode ? 'Ingresar' : 'Registrarse' }}</span>
        </button>

        <p class="toggle-mode" @click="toggleMode">
          {{ isLoginMode ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión' }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()

const isLoginMode = ref(true)
const form = ref({
  email: '',
  password: ''
})

const handleSubmit = async () => {
  try {
    if (isLoginMode.value) {
      await auth.login(form.value.email, form.value.password)
    }
    
    router.push(auth.user?.role === 'admin' ? '/admin' : '/')
  } catch (error) {
    console.error(error)
  }
}

const toggleMode = () => {
  isLoginMode.value = !isLoginMode.value
  auth.error = null
}
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  padding: 2rem;
}
.login-card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 1.5rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}
input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}
.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}
.submit-btn:hover {
  background-color: #3aa876;
}
.toggle-mode {
  margin-top: 1rem;
  color: #42b983;
  text-align: center;
  cursor: pointer;
}
.toggle-mode:hover {
  text-decoration: underline;
}
</style>