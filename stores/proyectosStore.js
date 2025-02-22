import { defineStore } from 'pinia';
import { useNotificacionesStore } from './notificacionesStore';


export const useProyectosStore = defineStore('proyectos', () => {
  const notificaciones = useNotificacionesStore()

  const proyectos = ref([{
    nombre: 'Ejemplo de nombre',
    ejecutivo: 'Ejemplo de ejecutivo',
    ejecutivo_src: 'none',
    cliente: 'Ejemplo de cliente',
    contacto: 'Ejemplo de contacto',
    tipo: 'Cotización',
  }])

  const usuarios = ref([])

  const carga = ref(false)

  const errorCargaUsuarios = ref(null)

  async function obtenerUsuarios() {
    try {
      const response = await $fetch('https://apidev.unabase.cc/app/users/findUsers/ByNames?name=miguel');
      const procesado = response.map(el => (
        {
          'nombre': el.data.legalName,
          'image': el.imgUrl
        }
      ))
      console.log('procesado', procesado)
      usuarios.value = procesado; // Asigna la respuesta al estado `users`
    } catch (error) {
      errorCargaUsuarios.value = 'Error al cargar los usuarios';
      console.error(error);
    } finally {
      errorCargaUsuarios.value = false
    }
  }
  obtenerUsuarios()


  const modoEditar = ref(false)

  const indiceEditar = ref(0)

  // const editarIndex = ref(null)

  const errorNombre = ref(false)

  const proyectoActual = ref(
    { // Objeto para el formulario
      nombre: '',
      ejecutivo: '',
      ejecutivo_src: '',
      cliente: '',
      contacto: '',
      tipo: '',
    }
  )
  function $reset() {
    proyectoActual.value = { // Objeto para el formulario
      nombre: '',
      ejecutivo: '',
      ejecutivo_src: '',
      cliente: '',
      contacto: '',
      tipo: '',
    }
  }

  function guardarProyecto() {
    // Verifica si el nombre ya existe
    const nombreExisteEn = proyectos.value.findIndex(
      (p) => p.nombre.toLowerCase() === proyectoActual.value.nombre.toLowerCase()

    );
    console.log('nombre existe en', nombreExisteEn);
    console.log(proyectoActual.value)

    if (nombreExisteEn !== -1 && !modoEditar.value) {
      alert('El nombre del proyecto ya existe. Por favor, elija otro nombre.');
      return; // Detiene la ejecución si el nombre ya existe
    }
    if (modoEditar.value) {
      actualizarProyecto(indiceEditar.value)
      return;
    }

    proyectos.value.push({ ...proyectoActual.value });
    notificaciones.crearNotificacion('Proyecto creado', 'success')
    $reset()
  }
  function editarProyecto(index) {
    modoEditar.value = true
    indiceEditar.value = index
    proyectoActual.value = { ...proyectos.value[index] }
  }

  function cancelarEditar() {
    modoEditar.value = false
    $reset()
  }

  // Edita un proyecto existente
  function actualizarProyecto(index) {
    // Verifica si el nombre ya existe (excepto para el proyecto actual)
    const nombreExiste = proyectos.value.some(
      (p, i) => i !== index && p.nombre.toLowerCase() === proyectoActual.value.nombre.toLowerCase()
    );

    if (nombreExiste) {
      alert('El nombre del proyecto ya existe. Por favor, elija otro nombre.');
      return; // Detiene la ejecución si el nombre ya existe
    }

    proyectos.value[index] = { ...proyectoActual.value };
    modoEditar.value = false
    notificaciones.crearNotificacion('Proyecto actualizado', 'info')
    $reset()

  }

  // Elimina un proyecto
  function eliminarProyecto(index) {
    if (modoEditar.value) {
      alert('No puedes borrar mientras se edita un proyecto')
      return;
    }
    if (confirm('¿seguro que quiere borrar el proyecto?')) {
      proyectos.value.splice(index, 1);
      notificaciones.crearNotificacion('Proyecto borrado', 'error')
    }
  }

  return {
    proyectos, proyectoActual, modoEditar, errorNombre,
    $reset, guardarProyecto,
    editarProyecto, cancelarEditar, eliminarProyecto, usuarios,
    obtenerUsuarios, errorCargaUsuarios, carga
  }
})