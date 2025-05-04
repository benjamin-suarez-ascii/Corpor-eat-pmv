import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ReservationsView from '@/views/ReservationsView.vue'
import MakeReservationView from '@/views/MakeReservationView.vue'
import AdminView from '@/views/AdminView.vue'
import { useAuthStore } from '@/stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView, meta: { requiresGuest: true } },
    { 
      path: '/reservations', 
      component: ReservationsView,
      meta: { requiresAuth: true } 
    },
    { 
      path: '/make-reservation', 
      component: MakeReservationView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/admin',
      component: AdminView,
      meta: { requiresAuth: true, requiresAdmin: true }
    }
  ]
})

router.beforeEach(async (to) => {
  const auth = useAuthStore()
  auth.initialize()

  if (to.meta.requiresAuth && !auth.user) {
    return '/login'
  }

  if (to.meta.requiresAdmin && auth.user?.role !== 'admin') {
    return '/'
  }

  if (to.meta.requiresGuest && auth.user) {
    return '/'
  }
})

export default router