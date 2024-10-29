<script setup lang="ts">
import { onMounted, ref } from 'vue'

const search = ref('')

onMounted(() => {
  console.log('mounted')
})
</script>

<template>
  <div class="flex flex-col justify-center items-center h-[100vh]">
    <div class="flex flex-col gap-6 max-w-md">
      <h1 class="text-4xl text-center">Meteoscope</h1>
      <input
        class="rounded-md text-center p-2 border-2 border-neutral-300"
        v-model="search"
        type="text"
        placeholder="Enter a location 📍"
      />
    </div>
  </div>
</template>
