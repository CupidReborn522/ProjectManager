<template>
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Ejecutivo</th>
        <th>Clientes</th>
        <th>Contacto</th>
        <th>Tipo</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(proyecto, index) in proyectos" :key="index">
        <td>{{ proyecto.nombre }}</td>
        <td>{{ proyecto.ejecutivo }}</td>
        <td>{{ proyecto.clientes }}</td>
        <td>{{ proyecto.contacto }}</td>
        <td>{{ proyecto.tipo }}</td>
        <td>
          <button @click="editarProyecto(index)">Editar</button>
          <button @click="eliminarProyecto(index)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useProyectosStore } from '@/stores/proyectosStore';
const store = useProyectosStore();
const { proyectos } = store;

function editarProyecto(index) {
  // Carga el proyecto en el formulario para editar
  store.proyectoActual = { ...proyectos[index] };
}

function eliminarProyecto(index) {
  if (confirm('¿Estás seguro de eliminar este proyecto?')) {
    store.eliminarProyecto(index);
  }
}

</script>

<style scoped>

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

button {
  margin-right: 5px;
}
</style>