<template>
    <div class="admin-view">
      <h1>Panel de Administración</h1>
      
      <div class="admin-sections">
        <section class="users-section">
          <h2>Usuarios Registrados</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>
                  <input v-if="user.editing" v-model="user.editName">
                  <span v-else>{{ user.name }}</span>
                </td>
                <td>{{ user.email }}</td>
                <td>
                  <select v-if="user.editing" v-model="user.editRole">
                    <option value="user">Usuario</option>
                    <option value="admin">Administrador</option>
                  </select>
                  <span v-else>{{ user.role }}</span>
                </td>
                <td>
                  <button v-if="!user.editing" @click="enableEditing(user)">Editar</button>
                  <button v-else @click="saveUser(user)">Guardar</button>
                  <button v-if="!user.editing" @click="deleteUser(user.id)">Eliminar</button>
                  <button v-else @click="cancelEditing(user)">Cancelar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
  
        <section class="reservations-section">
          <h2>Reservas Activas</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Personas</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reservation in reservations" :key="reservation.id">
                <td>{{ reservation.id }}</td>
                <td>{{ getUserName(reservation.userId) }}</td>
                <td>{{ reservation.date }}</td>
                <td>{{ reservation.time }}</td>
                <td>{{ reservation.guests }}</td>
                <td>{{ reservation.status }}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue'
  import { useAuthStore } from '@/stores/authStore'
  
  const auth = useAuthStore()
  const users = ref(auth.getUsers().map(u => ({ ...u, editing: false, editName: u.name, editRole: u.role })))
  const reservations = ref(auth.getReservations())
  
  const getUserName = (userId) => {
    const user = auth.getUsers().find(u => u.id === userId)
    return user ? user.name : 'Desconocido'
  }
  
  const enableEditing = (user) => {
    user.editing = true
  }
  
  const cancelEditing = (user) => {
    user.editing = false
    user.editName = user.name
    user.editRole = user.role
  }
  
  const saveUser = (user) => {
    auth.updateUser(user.id, {
      name: user.editName,
      role: user.editRole
    })
    user.name = user.editName
    user.role = user.editRole
    user.editing = false
  }
  
  const deleteUser = (userId) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      auth.registeredUsers = auth.registeredUsers.value.filter(u => u.id !== userId)
      users.value = users.value.filter(u => u.id !== userId)
    }
  }
  </script>
  
  <style scoped>
  .admin-view {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .admin-sections {
    display: grid;
    gap: 2rem;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  
  th, td {
    padding: 0.75rem;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  th {
    background-color: #f5f5f5;
  }
  
  input, select {
    padding: 0.25rem;
    width: 100%;
  }
  
  button {
    margin: 0 0.25rem;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
  }
  </style>