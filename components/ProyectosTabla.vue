<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th></th>
          <th>Ejecutivo</th>


          <th>Tipo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(proyecto, index) in proyectos" :key="index">
          <td>{{ proyecto.nombre }}</td>
          <td class="ejecutivo">
            <div>
              <img :src="proyecto.ejecutivo_src" alt="foto" /> 
            </div>
          </td>
          <td>

            {{ proyecto.ejecutivo }}
          </td>
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
const { editarProyecto, eliminarProyecto } = store



</script>

<style scoped>
div.container {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  margin-top: 40px;
}

@media screen and (min-width:900px) {
  div.container {
    margin-top: 0;
  }

}



div {
  overflow-x: auto;
  max-width: 90vw;
  display: flex;
  justify-content: left;
  align-items: flex-start;
}

@media screen and (min-width:942px) {
  div {
    max-width: 55%;
  }

}

@media screen and (min-width:1050px) {}

table {
  border-collapse: collapse;
  font-size: 16px;
  margin-top: 14px;
  border: 2px solid black;
  box-shadow: 2px 7px 13px 0px rgba(0, 0, 0, 0.2);
}

th,
td {
  /* border: 1px solid black; */
  border-top: 1px solid black;
  padding: 8px;

}

td {


  text-wrap-mode: wrap;
  text-align: left;
  padding: 20px;
}

@media screen and (min-width:1050px) {



}

td.options {
  flex-wrap: nowrap;
  gap: 10px;
  text-wrap: nowrap;
}

th {
  background-color: rgb(45, 207, 94);
}

td.ejecutivo {
  text-wrap: nowrap;
  padding: 10px;  
}

td.ejecutivo div{
  background-color: rgb(45, 207, 94);
  height: 50px;
  width:50px;
  max-width: none;
  border:1px solid black;
  border-radius: 50%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  border-radius: 20px;
}

button {
  margin-right: 5px;
  border: 1px solid black;
  cursor: pointer
}

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

button.editar {
  background-color: dodgerblue;
  color: black;
  
  font-size: x-large;
  width: 35px;
  height: 35px;
}

button.eliminar {
  background-color: salmon;
  font-size: x-large;
  width: 35px;
  height: 35px;
}
</style>