<template>
  <div class="select-visible">
    <label v-if="label">{{ label }}</label>

    <div class="options-container">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="select-option"
        :class="{ selected: modelValue === option.value }" @click="selectOption(option.value)" >
        {{ option.label || option.value }} </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';

// Definición de las 'props' que el componente recibe
const props = defineProps({
  label: String, // Etiqueta opcional para el select
  modelValue: [String, Number], // Valor seleccionado para el v-model
  options: {
    type: Array,
    required: true, // Las opciones son requeridas y deben ser un Array
    default: () => [], // Por defecto, un array vacío si no se proporcionan opciones
  },
});

// Definición de 'emits' para comunicar cambios al componente padre (v-model)
const emit = defineEmits(['update:modelValue']);

// Función que se ejecuta al hacer clic en una opción
function selectOption(value) {
  emit('update:modelValue', value); // Emite el evento para actualizar el v-model
}
</script>
<style scoped>
/* Estilos para el componente select visible */
.select-visible {
  margin-bottom: 1rem; 
}

label {
  display: block; 
  margin-bottom: 0.5rem; 
  
}

.options-container {
  
  border-radius: 4px;
  overflow-y: auto; 
  width: 100%; 
  display: flex; 
  justify-content:left;
  gap:5px;
  
}

.select-option {
  padding: 10px 25px; /* Espaciado interno de cada opción */
  cursor: pointer; /* Cursor de 'mano' al pasar por encima */
  border-bottom: 1px solid #eee; /* Línea divisoria entre opciones */
  transition: background-color 0.2s ease-in-out; /* Transición suave para el hover */
}

.select-option:last-child {
  border-bottom: none; /* Elimina el borde inferior de la última opción */
}

.select-option.selected {
  background-color: rgb(45, 207, 94); 
  color: black; 
  
}
</style>