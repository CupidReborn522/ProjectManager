<template>
  <div>

  </div>
</template>

<script setup>
import { useProyectosStore } from '@/stores/proyectosStore';
const store = useProyectosStore();
const { proyectoActual } = store;

// Función para guardar el proyecto
function guardarProyecto() {
  if (proyectoActual.nombre && proyectoActual.ejecutivo && proyectoActual.clientes && proyectoActual.contacto && proyectoActual.tipo) {
    store.agregarProyecto({ ...proyectoActual });
  } else {
    alert('Por favor, complete todos los campos.');
  }
}
</script>

<style scoped>
form div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
select {
  width: 100%;
  padding: 0.5rem;
}
</style>