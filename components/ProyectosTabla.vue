<template>
  <div class="container">
    <select name="" id="">
      <option value="">Tabla</option>
      <option value="">Acordion</option>
    </select>
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
        <td class="options">
          <button class="editar" @click="editarProyecto(index)">✎</button>
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
div.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


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
  margin-top:24px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  
}
td {
  
  
  text-wrap-mode: wrap;
  text-align: justify;
  max-width: 100px;
}

td.options{
  flex-wrap: nowrap;
  gap:10px;
  text-wrap: nowrap;
}

th {
  background-color: rgba(255, 220, 64, 0.9);
}

button {
  margin-right: 5px;
  border: 1px solid black;
  cursor:pointer
}
button.editar{
  background-color: dodgerblue;
  color: white;
  font-weight: bolder;
  font-size: x-large;
  width: 35px;
  height: 35px;
}
button.eliminar{
  background-color: salmon;
  font-size: x-large;
  width: 35px;
  height: 35px;
}



</style>