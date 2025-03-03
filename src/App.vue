<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <RouterView />
    </main>
    <footer class="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>© 2025 Mental Health Assessment. This is for educational purposes only and not a substitute for professional medical advice.</p>
    </footer>
  </div>
</template>
