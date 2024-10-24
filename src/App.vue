<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <h1>MeteoScope</h1>
  <input v-model="search" type="text" placeholder="Enter a location 📍" />
</template>
