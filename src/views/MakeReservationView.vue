<template>
    <div class="reservation-view">
      <h1>Hacer Nueva Reserva</h1>
      
      <form @submit.prevent="submitReservation" class="reservation-form">
        <div class="form-group">
          <label for="location">Comedor Corporativo</label>
          <select id="location" v-model="form.location" required>
            <option value="" disabled>Seleccione un comedor</option>
            <option value="principal">Comedor Principal</option>
            <option value="ejecutivo">Comedor Ejecutivo</option>
            <option value="terraza">Terraza Cafetería</option>
          </select>
        </div>
  
        <div class="form-row">
          <div class="form-group">
            <label for="date">Fecha</label>
            <input type="date" id="date" v-model="form.date" required>
          </div>
          <div class="form-group">
            <label for="time">Hora</label>
            <input type="time" id="time" v-model="form.time" min="11:00" max="15:30" required>
          </div>
        </div>
  
        <div class="form-group">
          <label for="guests">Número de Personas</label>
          <input type="number" id="guests" v-model="form.guests" min="1" max="8" required>
        </div>
  
        <div class="form-group">
          <label for="notes">Notas Adicionales</label>
          <textarea id="notes" v-model="form.notes" rows="3"></textarea>
        </div>
  
        <button type="submit" class="submit-btn">Confirmar Reserva</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MakeReservationView',
    data() {
      return {
        form: {
          location: '',
          date: '',
          time: '',
          guests: 1,
          notes: ''
        }
      }
    },
    methods: {
      submitReservation() {
        alert(`Reserva confirmada en ${this.form.location} para ${this.form.date} a las ${this.form.time}`)
        this.$router.push('/reservations')
      }
    }
  }
  </script>
  
  <style scoped>
  .reservation-view {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
  }
  .reservation-form {
    margin-top: 2rem;
  }
  .form-row {
    display: flex;
    gap: 1rem;
  }
  .form-row .form-group {
    flex: 1;
  }
  .form-group {
    margin-bottom: 1.5rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  .submit-btn {
    width: 100%;
    padding: 1rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 1rem;
  }
  </style>