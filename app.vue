<script setup lang="ts">
</script>

<template>
  <div id="app">

    <ProyectosTabla />
    <FormularioCrearProyecto />
  </div>
</template>

<style>
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
}

@media screen and ( min-width: 150px) {
  #app{
    flex-direction: row;
    align-items: flex-end;
    /* flex-wrap:nowrap; */
  }
  
}
</style>
