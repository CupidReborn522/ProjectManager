<template>

  <form @submit.prevent="guardarProyecto">

    <FormularioItemsInput label="Nombre:" placeholder="Ingrese nombre del proyecto" v-model="proyectoActual.nombre"
      type="text">
      <p v-if="errorNombre" class="error">El nombre del proyecto ya existe.</p>
    </FormularioItemsInput>
    <!-- <div>
      <label>Nombre:</label>
      <input v-model="proyectoActual.nombre" placeholder="Ingrese nombre del proyecto" required />
    </div> -->
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

const { proyectoActual, modoEditar, errorNombre } = storeToRefs(store);
const { $reset, guardarProyecto,
  editarProyecto, eliminarProyecto, cancelarEditar } = store

</script>

<style scoped>
form {
  position: relative;
  z-index: 99;
  width: 100%;
  max-width: 280px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 7px;
  border: 1px solid rgb(45, 207, 94);
  box-sizing: border-box;
  padding: 30px;
  background-color: white;
  box-shadow: 2px 7px 13px 0px rgba(0, 0, 0, 0.2);

}

@media screen and (min-width: 500px) {
  form {
    width: 35%;
    min-width: 300px;

  }
}

@media screen and (min-width:1050px) {
  form {
    width: 45%;
    min-width: 380px;
    right: 10%
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


p.edicion {
  position: absolute;
  z-index: 99;
  top: -1%;
  right: 10px;
  background-color: white;
}
</style>