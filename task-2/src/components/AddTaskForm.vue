<template>
  <form @submit.prevent="addTaskToLocalStorage()">
    <input v-model="taskName" type="text" placeholder="Add task..." />
    <button>Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskArray from '../interfaces';
import { useStore } from 'vuex';
const store = useStore();

const taskName = ref<string>('');
const tasks = ref<Array<TaskArray>>([]);

const addTaskToLocalStorage = () => {
  if (!taskName.value.length) return;
  tasks.value.push({
    name: taskName.value,
    id: Math.floor(Math.random() * 1000),
    isCompleted: false,
  });

  store.commit('addTask', ...tasks.value);
};
</script>

<style lang="scss" scoped></style>
