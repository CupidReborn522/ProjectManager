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
  justify-content: left;
  align-items: flex-start;
  margin-top: 40px;
}


div{
  overflow-x: auto;
  max-width: 80vw;
  display: flex;
  justify-content: left;
  align-items: flex-start;
}

@media screen and (min-width:900px) {
div{
  max-width: 55%;
}
  
}

@media screen and ( min-width:1050px ) {
div{
  max-width: 60%;
}

}

table {
  border-collapse: collapse;
  font-size: 16px;
  margin-top:14px;
  border: 2px solid black ;
  box-shadow: 2px 7px 13px 0px rgba(0,0,0,0.2);
}

th,
td {
  /* border: 1px solid black; */
  border-top:1px solid black;
  padding: 8px;
  
}
td {
  
  
  text-wrap-mode: wrap;
  text-align: left;
  max-width: 100px;
}

@media screen and ( min-width:1050px ) {

  td{
    max-width: 200px;
  }
  
}

td.options{
  flex-wrap: nowrap;
  gap:10px;
  text-wrap: nowrap;
}

th {
  background-color: rgb(45, 207, 94);
}

button {
  margin-right: 5px;
  border: 1px solid black;
  cursor:pointer
}
.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
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