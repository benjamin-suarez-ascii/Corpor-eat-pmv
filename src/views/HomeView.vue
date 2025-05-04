<template>
  <div class="home-view">
    <h1>Bienvenido a CorporEat</h1>
    <p class="subtitle">Sistema de reservas para comedores corporativos</p>
    
    <div class="features-grid">
      <div class="feature-card">
        <h3>🕒 Reserva Rápida</h3>
        <p>Agenda tu mesa en segundos con nuestro sistema intuitivo</p>
      </div>
      <div class="feature-card">
        <h3>📅 Gestión de Horarios</h3>
        <p>Disponibilidad en tiempo real de los comedores</p>
      </div>
      <div class="feature-card">
        <h3>💳 Pago Electrónico</h3>
        <p>Integración con Webpay para pagos seguros</p>
      </div>
      <div class="feature-card">
        <h3>👥 Control de Aforo</h3>
        <p>Evita sobrecupos con nuestro sistema inteligente</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
.subtitle {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
.feature-card {
  padding: 1.5rem;
  border-radius: 8px;
  background: #f8f9fa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
.feature-card p {
  color: #666;
}
</style>