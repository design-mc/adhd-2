<script setup lang="ts">
import { useAssessmentStore } from '../stores/assessment'
import { useRouter } from 'vue-router'

const store = useAssessmentStore()
const router = useRouter()

const startAssessment = (id: string) => {
  store.clearResults()
  router.push(`/assessment/${id}`)
}
</script>

<template>
  <div class="container py-12">
    <div class="text-center mb-12">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Mental Health Assessment</h1>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Take interactive assessments to learn more about symptoms associated with ADHD, ADD, depression, and anxiety.
      </p>
      <p class="mt-4 text-gray-500 dark:text-gray-400 italic">
        Note: These assessments are for educational purposes only and not a substitute for professional diagnosis.
      </p>
    </div>

    <div class="mb-12">
      <div class="card hover:shadow-lg transition-shadow border-2 border-primary">
        <div class="aspect-video overflow-hidden rounded-lg mb-4">
          <img :src="store.assessments.find(a => a.id === 'comprehensive')?.image" alt="Comprehensive Assessment" class="w-full h-full object-cover">
        </div>
        <h2 class="text-2xl font-bold mb-2">Comprehensive Assessment</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Not sure which assessment to take? Start with this comprehensive test that will help identify which condition might be most relevant to your symptoms.
        </p>
        <button @click="startAssessment('comprehensive')" class="btn btn-primary w-full">
          Start Comprehensive Assessment
        </button>
      </div>
    </div>

    <h2 class="text-2xl font-bold mb-6 text-center">Specific Assessments</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="assessment in store.assessments.filter(a => a.id !== 'comprehensive')" :key="assessment.id" class="card hover:shadow-lg transition-shadow">
        <div class="aspect-video overflow-hidden rounded-lg mb-4">
          <img :src="assessment.image" :alt="assessment.title" class="w-full h-full object-cover">
        </div>
        <h2 class="text-xl sm:text-2xl font-bold mb-2">{{ assessment.title }}</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">{{ assessment.description }}</p>
        <button @click="startAssessment(assessment.id)" class="btn btn-primary w-full">
          Start Assessment
        </button>
      </div>
    </div>
  </div>
</template>
