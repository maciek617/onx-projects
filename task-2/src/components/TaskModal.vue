<template>
  <div class="modal-wrapper">
    <input class="modal-task-name" v-model="name" />
    <div class="modal-task-buttons">
      <button
        @click="
          {
            emit('closeModal');
            emit('editTaskName', props.item?.id, name);
          }
        "
        class="modal-button"
      >
        Save changes
      </button>
      <button
        @click="
          {
            emit('updateTaskStatus');
            emit('closeModal');
          }
        "
        class="modal-button"
      >
        Set to in progress
      </button>
    </div>

    <div @click="emit('closeModal')" class="modal-button-close">
      <img src="../assets/Vector4.svg" alt="X sign" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskArrayItem from '../interfaces';
import { ref } from 'vue';
const props = defineProps<{
  item: TaskArrayItem | undefined;
}>();

const name = ref<string | undefined>(props.item?.name);

const emit = defineEmits(['closeModal', 'updateTaskStatus', 'editTaskName']);
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
  z-index: 999;
}

.modal-task-name {
  background: #1e1e1e;
  padding: 14px 20px;
  color: #fcfcfc;
  border: 0;
  outline: 0;
  border-radius: 4px;
  display: block;
  margin: 0 auto 20px;
}

.modal-task-name:focus {
  outline: 1px solid #26e3c2;
}

.modal-task-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
}

.modal-button:focus {
  outline: 1px solid #26e3c2;
}

.modal-button-close {
  position: absolute;
  top: 5%;
  right: 3%;
  cursor: pointer;
  background-color: #000000;
  padding: 10px 14px;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
