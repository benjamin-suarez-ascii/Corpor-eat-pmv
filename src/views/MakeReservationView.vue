<template>
  <div class="reservation-view">
    <h1>Hacer Nueva Reserva</h1>
    
    <form @submit.prevent="submitReservation">
      <div class="form-group">
        <label>Comedor:</label>
        <select v-model="form.location" required>
          <option value="principal">Comedor Principal</option>
          <option value="ejecutivo">Comedor Ejecutivo</option>
        </select>
      </div>

      <div class="form-group">
        <label>Fecha:</label>
        <input type="date" v-model="form.date" required>
      </div>

      <div class="form-group">
        <label>Hora:</label>
        <input type="time" v-model="form.time" required>
      </div>

      <div class="form-group">
        <label>Personas:</label>
        <input type="number" v-model.number="form.guests" min="1" max="8" required>
      </div>

      <button type="submit">Confirmar</button>
    </form>

    <div v-if="success" class="success-message">
      ¡Reserva realizada con éxito!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        location: '',
        date: '',
        time: '',
        guests: 1
      },
      success: false
    }
  },
  methods: {
    submitReservation() {
      // Simulación de envío a backend
      console.log('Reserva enviada:', this.form)
      this.success = true
      setTimeout(() => {
        this.$router.push('/reservations')
      }, 1500)
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