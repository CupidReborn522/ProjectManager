<template>
  <div class="select-with-search">
    <!-- Input para buscar usuarios -->
    <input v-model="searchQuery" @input="filterUsers" placeholder="Buscar usuarios..." class="search-input" />

    <!-- Lista de usuarios filtrados -->
    <ul v-if="filteredUsers.length" class="users-list">
      <li v-for="(user,index) in filteredUsers" :key="index" @click="selectUser(user)" class="user-item">
        <img :src="user.image" :alt="user.nombre" class="user-image" />
        <span>{{ user.nombre }}</span>
      </li>
    </ul>

    <!-- Mensaje si no hay resultados -->
    <p v-else class="no-results">No se encontraron usuarios.</p>
  </div>
</template>

<script setup>
import { useProyectosStore } from '~/stores/proyectosStore';

const store = useProyectosStore();
const { usuarios, loading, errorLoading } = storeToRefs(store)
const { cargarUsuarios } = store
const searchQuery = ref(''); // Query de búsqueda

// Obtener los usuarios al montar el componente
onMounted(() => {
  cargarUsuarios();
});

// Filtrar usuarios basados en la búsqueda
const filteredUsers = computed(() => {
  if (!searchQuery.value) return usuarios; // Mostrar todos los usuarios si no hay búsqueda
  return usuarios.filter((user) =>
    user.nombre.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Función para seleccionar un usuario
function selectUser(user) {
  searchQuery.value = user.nombre; // Mostrar el nombre del usuario seleccionado
  // Aquí puedes emitir un evento o realizar otras acciones
  console.log('Usuario seleccionado:', user);
}
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
</style>