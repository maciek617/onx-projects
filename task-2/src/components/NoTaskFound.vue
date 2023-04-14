<template>
  <p v-if="!taskLength" class="no-task-info">No task available.</p>
</template>

<script setup lang="ts">
defineProps<{
  taskLength: number;
}>();
</script>

<style scoped>
.no-task-info {
  color: #fcfcfc;
  text-align: center;
}
</style>
