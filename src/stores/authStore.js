import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const registeredUsers = ref([
    { 
      email: 'admin@corp.com', 
      password: 'admin123', 
      name: 'Administrador',
      role: 'admin',
      id: 1
    },
    {
      email: 'user@corp.com',
      password: 'user123',
      name: 'Usuario Normal',
      role: 'user',
      id: 2
    }
  ])

  const reservationsData = ref([
    {
      id: 1,
      userId: 2,
      date: '2024-05-20',
      time: '13:00',
      guests: 4,
      status: 'confirmed'
    }
  ])

  const login = async (email, password) => {
    try {
      loading.value = true
      error.value = null
      
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const foundUser = registeredUsers.value.find(u => 
        u.email === email && u.password === password
      )

      if (!foundUser) throw new Error('Credenciales incorrectas')
      
      user.value = { 
        email: foundUser.email, 
        name: foundUser.name,
        role: foundUser.role,
        id: foundUser.id
      }
      localStorage.setItem('user', JSON.stringify(user.value))
      
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const getUsers = () => {
    return registeredUsers.value.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }))
  }

  const updateUser = (userId, newData) => {
    const index = registeredUsers.value.findIndex(u => u.id === userId)
    if (index !== -1) {
      registeredUsers.value[index] = {
        ...registeredUsers.value[index],
        ...newData
      }
    }
  }

  const getReservations = () => reservationsData.value

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
  }

  const initialize = () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) user.value = JSON.parse(savedUser)
  }

  return { 
    user, 
    loading, 
    error, 
    login, 
    logout, 
    initialize,
    getUsers,
    updateUser,
    getReservations
  }
})