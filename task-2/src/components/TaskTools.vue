<template>
  <div class="icons-wrapper">
    <div @click="emit('editTaskStatusToComplete')" class="single-icon-wrapper">
      <img src="../assets/Vector3.svg" alt="rubber bin" />
    </div>
    <div @click="emit('openModalFunction')" class="single-icon-wrapper">
      <img src="../assets/Vector2.svg" alt="rubber bin" />
    </div>
    <div @click="emit('removeCurrentTask')" class="single-icon-wrapper">
      <img src="../assets/Vector1.svg" alt="rubber bin" />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits([
  'editTaskStatusToComplete',
  'removeCurrentTask',
  'openModalFunction',
]);
</script>

<style scoped>
.icons-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.single-icon-wrapper {
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.single-icon-wrapper:hover img {
  transform: translateY(-2px);
  transition: transform 0.2s ease-in-out;
}
</style>
