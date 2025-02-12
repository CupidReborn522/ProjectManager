import { defineStore } from 'pinia';
/* 
export const useProyectosStore = defineStore('proyectos', {
  state: () => ({
    proyectos: [], // Lista de proyectos
    ejemplo:'',
    proyectoActual: { // Objeto para el formulario
      nombre: '',
      ejecutivo: '',
      clientes: '',
      contacto: '',
      tipo: '',
    },
  }),
  actions: {
    // Agrega un nuevo proyecto
    agregarProyecto(proyecto) {
      // Verifica si el nombre ya existe
      const nombreExiste = this.proyectos.some(
        (p) => p.nombre.toLowerCase() === proyecto.nombre.toLowerCase()
      );

      if (nombreExiste) {
        alert('El nombre del proyecto ya existe. Por favor, elija otro nombre.');
        return; // Detiene la ejecución si el nombre ya existe
      }

      this.proyectos.push(proyecto);
      this.limpiarFormulario();
    },
    // Edita un proyecto existente
    editarProyecto(index, proyectoActualizado) {
      // Verifica si el nombre ya existe (excepto para el proyecto actual)
      const nombreExiste = this.proyectos.some(
        (p, i) => i !== index && p.nombre.toLowerCase() === proyectoActualizado.nombre.toLowerCase()
      );

      if (nombreExiste) {
        alert('El nombre del proyecto ya existe. Por favor, elija otro nombre.');
        return; // Detiene la ejecución si el nombre ya existe
      }

      this.proyectos[index] = proyectoActualizado;
    },
    // Elimina un proyecto
    eliminarProyecto(index) {
      this.proyectos.splice(index, 1);
    },
    // Limpia el formulario
    limpiarFormulario() {
      this.proyectoActual = {
        nombre: '',
        ejecutivo: '',
        clientes: '',
        contacto: '',
        tipo: '',
      };
    },
    CambiarEjemplo(){
      this.ejemplo = 'ahora tengo info'
    }
  },
}); */


export const useProyectosStore = defineStore('proyectos', () => {
  const proyectos = ref([])

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
      proyectoActual.value =  { // Objeto para el formulario
        nombre: '',
        ejecutivo: '',
        clientes: '',
        contacto: '',
        tipo: '',
      }
    }

    function agregarProyecto(proyecto) {
      // Verifica si el nombre ya existe
      const nombreExiste = proyectos.value.some(
        (p) => p.nombre.toLowerCase() === proyecto.nombre.toLowerCase()
      );

      if (nombreExiste) {
        alert('El nombre del proyecto ya existe. Por favor, elija otro nombre.');
        return; // Detiene la ejecución si el nombre ya existe
      }

      proyectos.value.push(proyecto);
      $reset()
    }
// Edita un proyecto existente
function editarProyecto(index, proyectoActualizado) {
  // Verifica si el nombre ya existe (excepto para el proyecto actual)
  const nombreExiste = proyectos.value.some(
    (p, i) => i !== index && p.nombre.toLowerCase() === proyectoActualizado.nombre.toLowerCase()
  );

  if (nombreExiste) {
    alert('El nombre del proyecto ya existe. Por favor, elija otro nombre.');
    return; // Detiene la ejecución si el nombre ya existe
  }

  proyectos.value[index] = proyectoActualizado;
}

// Elimina un proyecto
function eliminarProyecto(index) {
  proyectos.value.splice(index, 1);
}

return {proyectos,proyectoActual,$reset,agregarProyecto,editarProyecto,eliminarProyecto}
})