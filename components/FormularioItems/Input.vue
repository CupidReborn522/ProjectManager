<template>
  <div class="input-container">
    <!-- Label del input -->
    <label v-if="label" :for="inputId">{{ label }}</label>

    <!-- Input -->
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      required
    />
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String, // Prop para el label
  modelValue: [String, Number], // Valor vinculado con v-model
  type: {
    type: String,
    default: 'text', // Tipo de input (text, number, email, etc.)
  },
  placeholder: String, // Placeholder del input
});

// Emit para actualizar el valor del v-model
const emit = defineEmits(['update:modelValue']);

// Generar un ID único para el input (para asociar el label)
const inputId = computed(() => `input-${Math.random().toString(36).substring(2, 9)}`);

// Función para emitir el nuevo valor
function updateValue(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<style scoped>
.input-container {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.3rem;
}

input,
select {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}
</style>