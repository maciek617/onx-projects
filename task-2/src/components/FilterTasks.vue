<template>
  <div class="filter-wrapper">
    <p
      v-for="status in arrayOfAvailableStatus"
      :key="status"
      :class="{ active: status === store.state.globalFilterStatus }"
      @click="updateStatusAndFilterTasks(status)"
      class="filter"
    >
      {{ status }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const arrayOfAvailableStatus = ref<Array<string>>([
  'completed',
  'in progress',
  'all',
]);

const store = useStore();

const updateStatusAndFilterTasks = (status: string) => {
  store.commit('changeGlobalFilterStatus', status);
};
</script>

<style scoped>
.filter-wrapper {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  color: white;
  max-width: 600px;
  margin: 0 auto;
  padding: 2px 4px;
}

.filter {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
}

.filter:hover {
  color: #26e3c2;
}
.active {
  color: #26e3c2;
}
</style>
