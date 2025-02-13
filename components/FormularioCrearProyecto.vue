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
    <p class="edicion" v-if="modoEditar">
    modo edicion
    <button v-if="modoEditar" @click="cancelarEditar">Cancelar</button>
  </p>
    
  </form>
</template>

<script setup>
import { useProyectosStore } from '@/stores/proyectosStore';
const store = useProyectosStore();

const {proyectoActual,modoEditar,errorNombre } = storeToRefs(store);
const { $reset, guardarProyecto,
  editarProyecto, eliminarProyecto,cancelarEditar} = store

</script>

<style scoped>

form{
  /* position: absolute; */
  top: 0;
  z-index: 99;
  width: 100%;
  max-width: 280px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 7px;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 30px;
  background-color: white;

}

@media screen and ( min-width: 500px ) {
  form{
    width:35%;
    min-width: 300px;
    right:10%
  }
}

form div {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}

label {
  display: block;
  margin-bottom: 0.3rem;
}

input,
select {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
}

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

p.edicion{
  position: absolute;
  z-index: 99;
  top:0;
  right: 10px;
}


</style>