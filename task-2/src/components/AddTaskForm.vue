<template>
  <form @submit.prevent="addTaskToLocalStorage()">
    <input v-model="taskName" type="text" placeholder="Add task..." />
    <button>Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const taskName = ref<string>('');

const addTaskToLocalStorage = () => {
  console.log(taskName.value);

  if (!taskName.value.length) return;
  store.commit('addTask', {
    name: taskName.value,
    id: Math.floor(Math.random() * 1000),
    isCompleted: false,
  });
  taskName.value = '';
};
</script>

<style lang="scss" scoped></style>
