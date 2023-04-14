<script setup>
import AddTaskForm from './components/AddTaskForm.vue';
import AllTasksBoard from './components/AllTasksBoard.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="container">
    <Header />
    <AddTaskForm />
    <AllTasksBoard />
  </div>
</template>

<style scoped></style>
