import { defineStore } from 'pinia'

export const useNotificacionesStore = defineStore('notificaciones',()=>{
  
  const mostrarNotificacion = ref(false)
  
  const mensajeNotificacion = ref('')
  const tipoNotificacion = ref('')

  function crearNotificacion(mensaje,tipoN){
    mostrarNotificacion.value = true
    mensajeNotificacion.value = mensaje
    tipoNotificacion.value = tipoN
  }

  function cerrarNotificacion(){
    mostrarNotificacion.value = false
    mensajeNotificacion.value = ''
    tipoNotificacion.value = ''
  }


  return {crearNotificacion,cerrarNotificacion,mensajeNotificacion,tipoNotificacion,mostrarNotificacion}
})
