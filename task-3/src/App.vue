<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

const singleAdvice = ref<string>('');
const error = ref<string>('');

const fetchDataFromAPI = () => {
  axios
    .get('https://api.adviceslip.com/advice')
    .then((response) => {
      singleAdvice.value = response.data.slip.advice;
    })
    .catch((error) => {
      error.value = error;
    });
};
onMounted(() => {
  fetchDataFromAPI();
});
</script>

<template>
  <h2>Advice generator with axios</h2>
  <p>{{ singleAdvice ? singleAdvice : 'Loading...' }}</p>
  <button @click="fetchDataFromAPI()">Regenerate advice</button>
  <p v-if="error" class="error">{{ error }}</p>
</template>

<style scoped></style>
