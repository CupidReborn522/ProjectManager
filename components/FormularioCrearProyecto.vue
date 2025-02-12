<template>
  <form @submit.prevent="guardarProyecto">
    <div>
      <label>Nombre:</label>
      <input v-model="proyectoActual.nombre" placeholder="Ingrese nombre del proyecto" required />
      <p v-if="errorNombre" class="error">El nombre del proyecto ya existe.</p>
    </div>
    <div>
      <label>Ejecutivo:</label>
      <input v-model="proyectoActual.ejecutivo" placeholder="Buscar al usuario..." required />
    </div>
    <div>
      <label>Clientes:</label>
      <input v-model="proyectoActual.clientes" placeholder="Buscar al usuario..." required />
    </div>
    <div>
      <label>Contacto:</label>
      <input v-model="proyectoActual.contacto" placeholder="Buscar al usuario..." required />
    </div>
    <div>
      <label>Tipo:</label>
      <select v-model="proyectoActual.tipo" required>
        <option value="Cotización">Cotización</option>
        <option value="Negocio">Negocio</option>
      </select>
    </div>
    <button type="submit">Guardar</button>
  </form>
</template>

<script setup>
import { useProyectosStore } from '@/stores/proyectosStore';
import { ref } from 'vue';

const store = useProyectosStore();
const { proyectoActual,ejemplo } = store;
const errorNombre = ref(false); // Estado para mostrar el error
const modoEdicion = ref(false); // Estado para manejar el modo de edición
const indiceEdicion = ref(null); // Índice del proyecto que se está editando

// Función para cargar los datos del proyecto en el formulario
function cargarProyectoParaEditar(index) {
  store.cargarProyectoParaEditar(proyectos[index]);
  modoEdicion.value = true; // Activa el modo de edición
  indiceEdicion.value = index; // Guarda el índice del proyecto que se está editando
}
// Función para cancelar la edición
function cancelarEdicion() {
  store.limpiarFormulario(); // Vacía el formulario
  modoEdicion.value = false; // Desactiva el modo de edición
  indiceEdicion.value = null; // Reinicia el índice de edición
}

// Función para guardar el proyecto
function guardarProyecto() {
  errorNombre.value = false; // Reinicia el estado del error

  // Verifica si el nombre ya existe
  const nombreExiste = store.proyectos.some(
    (p) => p.nombre.toLowerCase() === proyectoActual.nombre.toLowerCase()
  );

  if (nombreExiste) {
    errorNombre.value = true; // Muestra el error
    return; // Detiene la ejecución si el nombre ya existe
  }

  if (proyectoActual.nombre && proyectoActual.ejecutivo && proyectoActual.clientes && proyectoActual.contacto && proyectoActual.tipo) {
    store.agregarProyecto({ ...proyectoActual });
    store.$reset()
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

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>