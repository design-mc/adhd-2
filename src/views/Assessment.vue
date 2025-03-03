<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAssessmentStore } from '../stores/assessment'

const route = useRoute()
const router = useRouter()
const store = useAssessmentStore()
const currentQuestionIndex = ref(0)

onMounted(() => {
  const assessmentType = route.params.type as string
  store.setCurrentAssessment(assessmentType)
  
  if (!store.currentAssessment) {
    router.push('/')
  }
})

const currentQuestion = computed(() => {
  if (!store.currentAssessment) return null
  return store.currentAssessment.questions[currentQuestionIndex.value]
})

const progress = computed(() => {
  if (!store.currentAssessment) return 0
  return Math.round(((currentQuestionIndex.value + 1) / store.currentAssessment.questions.length) * 100)
})

const isLastQuestion = computed(() => {
  if (!store.currentAssessment) return true
  return currentQuestionIndex.value === store.currentAssessment.questions.length - 1
})

const getAnswer = (questionId: number) => {
  return store.answers[questionId]
}

const setSliderAnswer = (questionId: number, value: number) => {
  store.setAnswer(questionId, value)
}

const setOptionAnswer = (questionId: number, option: string) => {
  store.setAnswer(questionId, option)
}

const isOptionSelected = (questionId: number, option: string) => {
  return store.answers[questionId] === option
}

const nextQuestion = () => {
  if (currentQuestion.value && getAnswer(currentQuestion.value.id) === undefined) {
    // Don't proceed if no answer is selected
    return
  }
  
  if (isLastQuestion.value) {
    completeAssessment()
  } else {
    currentQuestionIndex.value++
  }
}

const prevQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
  }
}

const completeAssessment = () => {
  store.calculateResults()
  router.push('/results')
}
</script>

<template>
  <div v-if="store.currentAssessment" class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">{{ store.currentAssessment.title }}</h1>
      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
        <div class="bg-primary h-2.5 rounded-full" :style="{ width: `${progress}%` }"></div>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400">Question {{ currentQuestionIndex + 1 }} of {{ store.currentAssessment.questions.length }}</p>
    </div>

    <div v-if="currentQuestion" class="card mb-8 animate-fade-in">
      <h2 class="text-xl font-semibold mb-6">{{ currentQuestion.text }}</h2>

      <div v-if="currentQuestion.type === 'slider'" class="mb-8">
        <input 
          type="range" 
          class="slider"
          :min="currentQuestion.min" 
          :max="currentQuestion.max" 
          :step="currentQuestion.step"
          :value="getAnswer(currentQuestion.id) as number || 0"
          @input="e => setSliderAnswer(currentQuestion.id, parseInt((e.target as HTMLInputElement).value))"
        >
        <div class="flex justify-between mt-2 text-sm text-gray-500">
          <span>Not at all</span>
          <span>Moderate</span>
          <span>Extremely</span>
        </div>
        <div class="text-center mt-4 text-lg font-medium">
          {{ getAnswer(currentQuestion.id) || 0 }}
        </div>
      </div>

      <div v-else-if="currentQuestion.type === 'options'" class="mb-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button 
            v-for="option in currentQuestion.options" 
            :key="option"
            class="option-btn"
            :class="{ 'selected': isOptionSelected(currentQuestion.id, option) }"
            @click="setOptionAnswer(currentQuestion.id, option)"
          >
            {{ option }}
          </button>
        </div>
      </div>

      <div class="flex justify-between">
        <button 
          @click="prevQuestion" 
          class="btn btn-outline"
          :disabled="currentQuestionIndex === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentQuestionIndex === 0 }"
        >
          Previous
        </button>
        <button 
          @click="nextQuestion" 
          class="btn btn-primary"
          :disabled="getAnswer(currentQuestion.id) === undefined"
          :class="{ 'opacity-50 cursor-not-allowed': getAnswer(currentQuestion.id) === undefined }"
        >
          {{ isLastQuestion ? 'Complete' : 'Next' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
