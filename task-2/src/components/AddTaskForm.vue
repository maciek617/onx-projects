<template>
  <form class="add-task-form" @submit.prevent="addTaskToLocalStorage()">
    <input
      class="add-task-input"
      v-model="taskName"
      type="text"
      placeholder="Add task..."
    />
    <button class="add-task-button">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const taskName = ref<string>('');

const addTaskToLocalStorage = () => {
  if (!taskName.value.trim().length) return;
  store.commit('addTask', {
    name: taskName.value,
    id: Math.floor(Math.random() * 1000),
    status: 'incomplete',
  });

  localStorage.setItem('todos', JSON.stringify(store.state.todoList));
  taskName.value = '';
};
</script>

<style scoped>
.add-task-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin: 50px 0;
}
.add-task-input {
  background: #1e1e1e;
  padding: 14px 20px;
  color: #fcfcfc;
  border: 0;
  outline: 0;
  border-radius: 4px;
}

.add-task-input:focus,
.add-task-button:focus {
  outline: 1px solid #26e3c2;
}
.add-task-button {
  border: 0;
  outline: 0;
  border-radius: 4px;
  background-color: #1e1e1e;
  padding: 14px 42px;
  color: #fcfcfc;
  cursor: pointer;
}
</style>
