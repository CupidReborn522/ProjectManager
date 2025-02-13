<template>
  <div v-if="visible" class="notification" :class="type">
    <p>{{ message }}</p>
    <button @click="closeNotification" class="close-button">×</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Props del componente
const props = defineProps({
  message: {
    type: String,
    required: true, // Mensaje de la notificación
  },
  type: {
    type: String,
    default: 'info', // Tipo de notificación (info, success, error, etc.)
  },
  duration: {
    type: Number,
    default: 5000, // Duración en milisegundos (5 segundos por defecto)
  },
});

// Estado para controlar la visibilidad de la notificación
const visible = ref(true);

// Función para cerrar la notificación
function closeNotification() {
  visible.value = false;
}

// Cerrar la notificación automáticamente después de la duración especificada
let timeoutId;
onMounted(() => {
  timeoutId = setTimeout(() => {
    closeNotification();
  }, props.duration);
});

// Limpiar el timeout si el componente se desmonta antes de que se cierre
onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
});
</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.notification.info {
  background-color: #007bff;
}

.notification.success {
  background-color: #28a745;
}

.notification.error {
  background-color: #dc3545;
}

.close-button {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
}

.close-button:hover {
  opacity: 0.8;
}
</style>