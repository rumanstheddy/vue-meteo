<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <div class="flex flex-col gap-6 justify-center">
    <h1 class="text-4xl text-center">Meteoscope</h1>
    <input
      class="rounded-sm text-center p-2"
      v-model="search"
      type="text"
      placeholder="Enter a location 📍"
    />
  </div>
</template>
