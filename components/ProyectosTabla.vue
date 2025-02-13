<template>
  <div>
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
          <button class="editar" @click="editarProyecto(index)">Editar</button>
          <button class="eliminar" @click="eliminarProyecto(index)">×</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { useProyectosStore } from '@/stores/proyectosStore';

const store = useProyectosStore();
const { proyectos } = storeToRefs(store)
const {editarProyecto,eliminarProyecto} = store



</script>

<style scoped>

div{
  overflow-x: auto;
  max-width: 80vw;
  display: flex;
  justify-content: left;
  align-items: center;
}

@media screen and (min-width:500px) {
div{
  max-width: 55%;
}
  
}

table {
  border-collapse: collapse;
  font-size: 16px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  
}
td {
  
  text-wrap: nowrap;
}

th {
  background-color: #f2f2f2;
}

button {
  margin-right: 5px;
  border: none;
  cursor:pointer
}
button.editar{
  background-color: dodgerblue;
}
button.eliminar{
  background-color: salmon;
}



</style>