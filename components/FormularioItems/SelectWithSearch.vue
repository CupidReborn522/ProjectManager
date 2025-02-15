<template>
  <div class="select-with-search" @focusout="handleBlur">
    <!-- Input para buscar usuarios -->
     <label>
      {{ label }}
       <input readonly :required="required" v-model="searchQuery" @input="filterUsers" @focusin="handleFocus" placeholder="Seleccionar usuario" class="search-input" />
      </label>

    <!-- Lista de usuarios filtrados -->
    <ul v-if="usuarios.length && isOpen" class="users-list">
      <li v-for="(user,index) in usuarios" :key="index" @click="selectUser(user)" class="user-item">
        <img :src="user.image" :alt="user.nombre" class="user-image" />
        <span>{{ user.nombre }}</span>
      </li>
    </ul>

    <!-- Mensaje si no hay resultados -->
    <p v-if="usuarios.length == 0" class="no-results">Cargando usuarios...</p>
    
  </div>
</template>

<script setup>
import { useProyectosStore } from '~/stores/proyectosStore';

const props = defineProps({
  label: String, // Prop para el label
  modelValue: [String, Number],
  required:{
    type:Boolean,
    default:false,
  },
  image_src:{
    type: String,
    default: '',
  },
  
});

const isOpen = ref(false)



const emit = defineEmits(['update:modelValue','update:image_src']);

const store = useProyectosStore();
const { usuarios,proyectoActual} = storeToRefs(store)
const { obtenerUsuarios } = store
const searchQuery = ref(props.modelValue); // Query de búsqueda

// Obtener los usuarios al montar el componente
onMounted(() => {
  obtenerUsuarios();
  console.log(props.modelValue)
});

// Filtrar usuarios basados en la búsqueda
const filteredUsers = computed(() => {
  return usuarios
  // if (!searchQuery.value) return usuarios; // Mostrar todos los usuarios si no hay búsqueda
  // return usuarios.filter((user) =>
  //   user.nombre.toLowerCase().includes(searchQuery.value.toLowerCase())
  // );
});

function handleFocus(){
  isOpen.value = true
}

function handleBlur() {
  setTimeout(()=>{
    isOpen.value = false

  },200)
  }

// Función para seleccionar un usuario
function selectUser(user) {
  searchQuery.value = user.nombre; // Mostrar el nombre del usuario seleccionado
  emit('update:modelValue', user.nombre);
  emit('update:image_src',user.image);
  isOpen.value = false
  // Aquí puedes emitir un evento o realizar otras acciones
  console.log('Usuario seleccionado:', user);
}

watch(
  () => props.modelValue,
  (newValue) => {
    searchQuery.value = newValue;
  }
);
</script>

<style scoped>
.select-with-search {
  position: relative;
  width: 300px;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.users-list {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.user-item {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.user-item:hover {
  background-color: #f0f0f0;
}

.user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.no-results {
  padding: 10px;
  color: #666;
}

label{
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
}

label input{
  margin-top: 5px;
}


</style>