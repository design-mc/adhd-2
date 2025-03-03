<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAssessmentStore } from '../stores/assessment'

const router = useRouter()
const store = useAssessmentStore()

onMounted(() => {
  if (store.results.length === 0) {
    router.push('/')
  }
})

const getScoreColor = (percentage: number) => {
  if (percentage < 30) return 'text-green-500'
  if (percentage < 70) return 'text-yellow-500'
  return 'text-red-500'
}

const getScoreBackground = (percentage: number) => {
  if (percentage < 30) return 'bg-green-500'
  if (percentage < 70) return 'bg-yellow-500'
  return 'bg-red-500'
}

const startNewAssessment = () => {
  router.push('/')
}

const isComprehensiveAssessment = () => {
  return store.results.length > 0 && store.results[0].type === 'Comprehensive Assessment'
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Your Assessment Results</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        Review your assessment results below. Remember, these results are not a diagnosis.
      </p>
    </div>

    <!-- Category scores for comprehensive assessment -->
    <div v-if="isComprehensiveAssessment() && store.categoryScores.length > 0" class="card mb-8">
      <h2 class="text-2xl font-bold mb-6">Condition Indicators</h2>
      
      <div class="space-y-6">
        <div v-for="category in store.categoryScores" :key="category.category" class="mb-4">
          <div class="flex justify-between mb-1">
            <span class="font-medium">{{ category.title }}</span>
            <span class="font-medium" :class="getScoreColor(category.percentage)">{{ category.percentage }}%</span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div class="h-2.5 rounded-full" 
                :class="getScoreBackground(category.percentage)"
                :style="{ width: `${category.percentage}%` }"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-for="result in store.results" :key="result.type" class="card mb-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 class="text-2xl font-bold">{{ result.type }}</h2>
        <div class="flex items-center mt-4 md:mt-0">
          <div class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
               :class="getScoreBackground(result.percentage)">
            {{ result.percentage }}%
          </div>
        </div>
      </div>

      <div class="mb-6" v-if="!isComprehensiveAssessment()">
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
          <div class="h-4 rounded-full" 
               :class="getScoreBackground(result.percentage)"
               :style="{ width: `${result.percentage}%` }"></div>
        </div>
        <div class="flex justify-between text-sm">
          <span>Low</span>
          <span>Moderate</span>
          <span>High</span>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">Interpretation</h3>
        <p class="text-gray-700 dark:text-gray-300">{{ result.interpretation }}</p>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-2">Recommendations</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li v-for="(rec, index) in result.recommendations" :key="index" class="text-gray-700 dark:text-gray-300">
            {{ rec }}
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-8">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-blue-700 dark:text-blue-300">
            <strong>Important:</strong> These assessments are for educational purposes only and do not constitute a medical diagnosis. 
            If you're concerned about your mental health, please consult with a qualified healthcare professional.
          </p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button @click="startNewAssessment" class="btn btn-primary">
        Take Another Assessment
      </button>
    </div>
  </div>
</template>
