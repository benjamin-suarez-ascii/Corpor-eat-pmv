<template>
  <nav class="navbar">
    <div class="logo">CorporEat</div>
    <ul class="nav-links">
      <li><router-link to="/">Inicio</router-link></li>
      <li v-if="auth.user">
        <router-link to="/reservations">Mis Reservas</router-link>
      </li>
      <li v-if="auth.user">
        <router-link to="/make-reservation">Hacer Reserva</router-link>
      </li>
      <li v-if="auth.user?.role === 'admin'">
        <router-link to="/admin">Administración</router-link>
      </li>
      <li v-if="!auth.user">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="auth.user" class="user-menu">
        <span>Hola, {{ auth.user.name }}</span>
        <button @click="auth.logout()">Cerrar Sesión</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'

const auth = useAuthStore()
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
}
.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.nav-links a:hover {
  text-decoration: underline;
}
.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid #42b983;
}
</style>