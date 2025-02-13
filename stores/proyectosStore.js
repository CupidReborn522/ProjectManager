import { defineStore } from 'pinia';


export const useProyectosStore = defineStore('proyectos', () => {
  const proyectos = ref([{
    nombre: 'Ejemplo de nombre',
    ejecutivo: 'Ejemplo de ejecutivo',
    clientes: 'Ejemplo de cliente',
    contacto: 'Ejemplo de contacto',
    tipo: 'Cotización',
  }])

  const modoEditar = ref(false)

  const indiceEditar = ref(0)

  // const editarIndex = ref(null)

  const errorNombre = ref(false)

  const proyectoActual = ref(
    { // Objeto para el formulario
      nombre: '',
      ejecutivo: '',
      clientes: '',
      contacto: '',
      tipo: '',
    }
  )
  function $reset() {
    proyectoActual.value = { // Objeto para el formulario
      nombre: '',
      ejecutivo: '',
      clientes: '',
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

    proyectos.value.push({...proyectoActual.value});
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
      (p, i) => i !== index && p.nombre.toLowerCase() === proyectoActualizado.nombre.toLowerCase()
    );

    if (nombreExiste) {
      alert('El nombre del proyecto ya existe. Por favor, elija otro nombre.');
      return; // Detiene la ejecución si el nombre ya existe
    }

    proyectos.value[index] = { ...proyectoActual.value };
    modoEditar.value = false
    $reset()

  }

  // Elimina un proyecto
  function eliminarProyecto(index) {
    if (modoEditar.value) {
      alert('No puedes borrar mientras se edita un proyecto')
      return;
    }
    if(confirm('¿seguro que quiere borrar el proyecto?')){
      proyectos.value.splice(index, 1);
    }
  }

  return {
    proyectos, proyectoActual, modoEditar, errorNombre,
    $reset, guardarProyecto,
    editarProyecto, cancelarEditar, eliminarProyecto
  }
})