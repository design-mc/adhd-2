<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md">
    <div class="container">
      <div class="flex justify-between h-16 items-center">
        <div class="flex-shrink-0 cursor-pointer" @click="goHome">
          <h1 class="text-xl sm:text-2xl font-bold text-primary">MindCheck</h1>
        </div>
        <div class="hidden sm:flex items-center">
          <button @click="goHome" class="btn btn-outline">
            Home
          </button>
        </div>
        <div class="sm:hidden">
          <button class="btn btn-outline">☰</button>
        </div>
      </div>
    </div>
  </nav>
</template>
