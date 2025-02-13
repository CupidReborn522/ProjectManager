<script setup lang="ts">
</script>

<template>
  <div class="main">
    <Navbar></Navbar>
    <div id="app">
      <!-- <button @click="mostrarNotificacion">Mostrar notificación</button> -->

      <!-- Notificación -->
    <!-- <Notification
      v-if="mostrar"
      :message="mensaje"
      :type="tipo"
      @close="mostrar = false"
    /> -->
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
