<template>

  <form @submit.prevent="guardarProyecto">
    <FormularioItemsInput label="Nombre:" placeholder="Ingrese nombre del proyecto" v-model="proyectoActual.nombre"
      type="text">
      <p v-if="errorNombre" class="error">El nombre del proyecto ya existe.</p>
    </FormularioItemsInput>
    
    <FormularioItemsSelectWithSearch label="Ejecutivo:"
    v-model:modelValue="proyectoActual.ejecutivo"
    v-model:image_src="proyectoActual.ejecutivo_src"
    :required="true"
    >

    </FormularioItemsSelectWithSearch>

    
    <FormularioItemsSelectWithSearch label="Cliente:"
    v-model="proyectoActual.cliente"
    >

    </FormularioItemsSelectWithSearch>

    
    <FormularioItemsSelectWithSearch label="Contacto:"
    v-model="proyectoActual.contacto"
    >

    </FormularioItemsSelectWithSearch>

    <FormularioItemsSelect label="Tipo:" v-model="proyectoActual.tipo" :options="misOpciones"></FormularioItemsSelect>
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

const misOpciones = ref([
  { value: 'Negocio', label: 'Negocio' },
  { value: 'Cotización', label: 'Cotización' },
]);

</script>

<style scoped>
form {
  position: relative;
  width: 100%;
  max-width: 300px;
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
    min-width: 380px;

  }
}

@media screen and (min-width:1050px) {
  form {
    width: 45%;
    min-width: 380px;
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
  z-index: 10;
  top: -1%;
  right: 10px;
  background-color: white;
}
</style>