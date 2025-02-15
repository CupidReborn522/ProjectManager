<script setup lang="ts">
import { useNotificacionesStore } from './stores/notificacionesStore';

const notificaciones =  useNotificacionesStore()
const {cerrarNotificacion} = notificaciones
const {tipoNotificacion,mensajeNotificacion,mostrarNotificacion} = storeToRefs(notificaciones)

</script>

<template>
  <div class="main">
    <Navbar></Navbar>
    <Notification
     v-if="mostrarNotificacion"
     :message="mensajeNotificacion"
     :type="tipoNotificacion"
     @close="cerrarNotificacion"
   /> 
    <div id="app">
      <!-- <button @click="mostrarNotificacion">Mostrar notificación</button> -->

      <!-- Notificación -->
    <ProyectosTabla />
    <FormularioItemsCrearProyecto />
  </div>
</div>
</template>

<style>

body{
  margin:0;
  width: 100%;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.main{
  width: 100%;
  height:100%;
  padding:0;
  margin:0;
}

#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  margin-top: 60px;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  gap:10px;
  position: relative;
  padding-bottom: 55px;
}

@media screen and ( min-width: 942px) {
  #app{
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    /* flex-wrap:nowrap; */
  }
  
}
</style>
