<template>
  <div class="modal-wrapper">
    <p class="modal-task-name">
      {{ item.name }}
    </p>

    <button
      @click="
        {
          emit('updateTaskStatusToProgress');
          emit('closeModal');
        }
      "
      class="modal-button"
    >
      Set to in progress
    </button>

    <div @click="emit('closeModal')" class="modal-button-close">X</div>
  </div>
</template>

<script setup lang="ts">
import TaskArrayItem from '../interfaces';

defineProps<{
  item: TaskArrayItem;
}>();

const emit = defineEmits(['closeModal', 'updateTaskStatusToProgress']);
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #0f0f0f;
  color: #fcfcfc;
  max-width: 600px;
  width: 100%;
  padding: 10px 0;
}

.modal-task-name {
  text-align: center;
  padding: 20px 0;
}

.modal-button {
  border: 0;
  outline: 0;
  border-radius: 4px;
  background-color: #1e1e1e;
  padding: 14px 42px;
  color: #fcfcfc;
  margin: 0 auto;
  display: block;
}

.modal-button:focus {
  outline: 1px solid #26e3c2;
}

.modal-button-close {
  position: absolute;
  top: 5%;
  right: 3%;
}
</style>
