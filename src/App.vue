<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-4xl">MeteoScope</h1>
    <input v-model="search" type="text" placeholder="Enter a location 📍" />
  </div>
</template>
