import { defineStore } from 'pinia'

export const useProyectosStore = defineStore({
  id: 'proyectos',
  state: () => ({
    proyectos: [], // Lista de proyectos
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
  },
})
