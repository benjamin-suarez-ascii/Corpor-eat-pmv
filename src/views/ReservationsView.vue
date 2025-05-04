<template>
    <div class="reservations-view">
      <h1>Mis Reservas</h1>
      
      <div class="reservations-list">
        <div v-for="reservation in reservations" :key="reservation.id" class="reservation-card">
          <div class="reservation-info">
            <h3>Comedor: {{ reservation.location }}</h3>
            <p>Fecha: {{ reservation.date }} a las {{ reservation.time }}</p>
            <p>Mesa #{{ reservation.table }} ({{ reservation.guests }} personas)</p>
            <p :class="reservation.status">{{ reservation.status }}</p>
          </div>
          <button @click="cancelReservation(reservation.id)" class="cancel-btn">
            Cancelar
          </button>
        </div>
      </div>
  
      <div v-if="reservations.length === 0" class="empty-state">
        <p>No tienes reservas activas</p>
        <router-link to="/make-reservation" class="cta-btn">
          Hacer una reserva
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReservationsView',
    data() {
      return {
        reservations: [
          {
            id: 1,
            location: "Comedor Principal",
            date: "15/05/2024",
            time: "13:30",
            table: "A12",
            guests: 4,
            status: "confirmada"
          },
          {
            id: 2,
            location: "Comedor Ejecutivo",
            date: "18/05/2024",
            time: "14:00",
            table: "B05",
            guests: 2,
            status: "pendiente"
          }
        ]
      }
    },
    methods: {
      cancelReservation(id) {
        this.reservations = this.reservations.filter(r => r.id !== id)
        alert(`Reserva #${id} cancelada`)
      }
    }
  }
  </script>
  
  <style scoped>
  .reservations-view {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  .reservations-list {
    margin-top: 2rem;
  }
  .reservation-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    background: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  .reservation-info h3 {
    margin: 0 0 0.5rem 0;
    color: #2c3e50;
  }
  .confirmada {
    color: #42b983;
    font-weight: bold;
  }
  .pendiente {
    color: #ffc107;
    font-weight: bold;
  }
  .cancel-btn {
    padding: 0.5rem 1rem;
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .empty-state {
    text-align: center;
    margin-top: 3rem;
  }
  .cta-btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background-color: #42b983;
    color: white;
    border-radius: 4px;
    text-decoration: none;
  }
  </style>