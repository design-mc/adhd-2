import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Question {
  id: number
  text: string
  type: 'slider' | 'options'
  options?: string[]
  min?: number
  max?: number
  step?: number
  category?: 'adhd' | 'add' | 'depression' | 'anxiety'
}

export interface Assessment {
  id: string
  title: string
  description: string
  image: string
  questions: Question[]
}

export interface Result {
  type: string
  score: number
  maxScore: number
  percentage: number
  interpretation: string
  recommendations: string[]
}

export interface CategoryScore {
  category: string
  title: string
  score: number
  maxScore: number
  percentage: number
}

export const useAssessmentStore = defineStore('assessment', () => {
  const assessments: Assessment[] = [
    {
      id: 'adhd',
      title: 'ADHD Assessment',
      description: 'This assessment helps identify symptoms commonly associated with Attention Deficit Hyperactivity Disorder (ADHD).',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      questions: [
        {
          id: 1,
          text: 'How often do you have difficulty sustaining attention in tasks?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 2,
          text: 'How frequently do you find yourself fidgeting or unable to sit still?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 3,
          text: 'Do you often interrupt others when they are speaking?',
          type: 'options',
          options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often']
        },
        {
          id: 4,
          text: 'How difficult is it for you to organize tasks and activities?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 5,
          text: 'How often do you lose things necessary for tasks or activities?',
          type: 'options',
          options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often']
        }
      ]
    },
    {
      id: 'add',
      title: 'ADD Assessment',
      description: 'This assessment focuses on symptoms related to Attention Deficit Disorder (ADD) without hyperactivity.',
      image: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      questions: [
        {
          id: 1,
          text: 'How often do you have trouble paying attention to details?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 2,
          text: 'How frequently do you find your mind wandering during conversations?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 3,
          text: 'Do you often avoid tasks that require sustained mental effort?',
          type: 'options',
          options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often']
        },
        {
          id: 4,
          text: 'How difficult is it for you to follow through on instructions?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 5,
          text: 'How often are you easily distracted by external stimuli?',
          type: 'options',
          options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often']
        }
      ]
    },
    {
      id: 'depression',
      title: 'Depression Assessment',
      description: 'This assessment helps identify symptoms commonly associated with depression.',
      image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      questions: [
        {
          id: 1,
          text: 'How often do you feel down, depressed, or hopeless?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 2,
          text: 'How much interest or pleasure do you have in doing things you usually enjoy?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 3,
          text: 'How would you rate your sleep quality?',
          type: 'options',
          options: ['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent']
        },
        {
          id: 4,
          text: 'How often do you feel tired or have little energy?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 5,
          text: 'How often do you have thoughts that you would be better off dead or of hurting yourself?',
          type: 'options',
          options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often']
        }
      ]
    },
    {
      id: 'anxiety',
      title: 'Anxiety Assessment',
      description: 'This assessment helps identify symptoms commonly associated with anxiety disorders.',
      image: 'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      questions: [
        {
          id: 1,
          text: 'How often do you feel nervous, anxious, or on edge?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 2,
          text: 'How difficult is it for you to stop or control worrying?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 3,
          text: 'How often do you experience physical symptoms of anxiety (racing heart, sweating, etc.)?',
          type: 'options',
          options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often']
        },
        {
          id: 4,
          text: 'How much does worry or anxiety interfere with your daily life?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1
        },
        {
          id: 5,
          text: 'How often do you avoid situations due to anxiety?',
          type: 'options',
          options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often']
        }
      ]
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive Mental Health Assessment',
      description: 'This assessment helps identify which mental health condition (ADHD, ADD, depression, or anxiety) might be most relevant to your symptoms.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      questions: [
        {
          id: 1,
          text: 'How often do you find yourself fidgeting or unable to sit still?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1,
          category: 'adhd'
        },
        {
          id: 2,
          text: 'How often do you feel down, depressed, or hopeless?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1,
          category: 'depression'
        },
        {
          id: 3,
          text: 'How often do you feel nervous, anxious, or on edge?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1,
          category: 'anxiety'
        },
        {
          id: 4,
          text: 'How often do you have trouble paying attention to details?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1,
          category: 'add'
        },
        {
          id: 5,
          text: 'How often do you interrupt others when they are speaking?',
          type: 'options',
          options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
          category: 'adhd'
        },
        {
          id: 6,
          text: 'How much interest or pleasure do you have in doing things you usually enjoy?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1,
          category: 'depression'
        },
        {
          id: 7,
          text: 'How often do you experience physical symptoms of anxiety (racing heart, sweating, etc.)?',
          type: 'options',
          options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
          category: 'anxiety'
        },
        {
          id: 8,
          text: 'How frequently do you find your mind wandering during conversations?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1,
          category: 'add'
        },
        {
          id: 9,
          text: 'How difficult is it for you to organize tasks and activities?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1,
          category: 'adhd'
        },
        {
          id: 10,
          text: 'How often do you feel tired or have little energy?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1,
          category: 'depression'
        },
        {
          id: 11,
          text: 'How difficult is it for you to stop or control worrying?',
          type: 'slider',
          min: 0,
          max: 10,
          step: 1,
          category: 'anxiety'
        },
        {
          id: 12,
          text: 'How often are you easily distracted by external stimuli?',
          type: 'options',
          options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'],
          category: 'add'
        }
      ]
    }
  ]

  const currentAssessment = ref<Assessment | null>(null)
  const answers = ref<Record<number, number | string>>({})
  const results = ref<Result[]>([])
  const categoryScores = ref<CategoryScore[]>([])

  const setCurrentAssessment = (id: string) => {
    const assessment = assessments.find(a => a.id === id)
    if (assessment) {
      currentAssessment.value = assessment
      answers.value = {}
      categoryScores.value = []
    }
  }

  const setAnswer = (questionId: number, answer: number | string) => {
    answers.value[questionId] = answer
  }

  const calculateResults = () => {
    if (!currentAssessment.value) return

    const type = currentAssessment.value.id
    
    if (type === 'comprehensive') {
      calculateComprehensiveResults()
      return
    }
    
    let score = 0
    let maxScore = 0

    currentAssessment.value.questions.forEach(question => {
      const answer = answers.value[question.id]
      
      if (question.type === 'slider' && typeof answer === 'number') {
        score += answer
        maxScore += question.max || 10
      } else if (question.type === 'options' && typeof answer === 'string' && question.options) {
        const index = question.options.indexOf(answer as string)
        score += index
        maxScore += question.options.length - 1
      }
    })

    const percentage = Math.round((score / maxScore) * 100)
    
    let interpretation = ''
    const recommendations: string[] = []
    
    if (type === 'adhd' || type === 'add') {
      if (percentage < 30) {
        interpretation = 'Your responses suggest minimal symptoms associated with ADHD/ADD.'
        recommendations.push('Continue monitoring your attention and focus')
        recommendations.push('Practice mindfulness techniques to improve concentration')
      } else if (percentage < 70) {
        interpretation = 'Your responses suggest moderate symptoms that may be associated with ADHD/ADD.'
        recommendations.push('Consider discussing these symptoms with a healthcare provider')
        recommendations.push('Try implementing organizational strategies and routines')
        recommendations.push('Consider mindfulness and meditation practices')
      } else {
        interpretation = 'Your responses suggest significant symptoms that are commonly associated with ADHD/ADD.'
        recommendations.push('We strongly recommend consulting with a mental health professional')
        recommendations.push('Consider a comprehensive evaluation for ADHD/ADD')
        recommendations.push('Learn about treatment options including therapy and medication')
      }
    } else if (type === 'depression') {
      if (percentage < 30) {
        interpretation = 'Your responses suggest minimal symptoms associated with depression.'
        recommendations.push('Continue monitoring your mood')
        recommendations.push('Maintain healthy lifestyle habits including exercise and social connection')
      } else if (percentage < 70) {
        interpretation = 'Your responses suggest moderate symptoms that may be associated with depression.'
        recommendations.push('Consider discussing these symptoms with a healthcare provider')
        recommendations.push('Practice self-care activities that boost your mood')
        recommendations.push('Consider mindfulness and stress reduction techniques')
      } else {
        interpretation = 'Your responses suggest significant symptoms that are commonly associated with depression.'
        recommendations.push('We strongly recommend consulting with a mental health professional')
        recommendations.push('Consider a comprehensive evaluation for depression')
        recommendations.push('Learn about treatment options including therapy and medication')
      }
    } else if (type === 'anxiety') {
      if (percentage < 30) {
        interpretation = 'Your responses suggest minimal symptoms associated with anxiety.'
        recommendations.push('Continue monitoring your stress levels')
        recommendations.push('Practice relaxation techniques when feeling stressed')
      } else if (percentage < 70) {
        interpretation = 'Your responses suggest moderate symptoms that may be associated with anxiety.'
        recommendations.push('Consider discussing these symptoms with a healthcare provider')
        recommendations.push('Practice deep breathing and progressive muscle relaxation')
        recommendations.push('Consider mindfulness and meditation practices')
      } else {
        interpretation = 'Your responses suggest significant symptoms that are commonly associated with anxiety.'
        recommendations.push('We strongly recommend consulting with a mental health professional')
        recommendations.push('Consider a comprehensive evaluation for anxiety')
        recommendations.push('Learn about treatment options including therapy and medication')
      }
    }

    results.value.push({
      type: currentAssessment.value.title,
      score,
      maxScore,
      percentage,
      interpretation,
      recommendations
    })
  }

  const calculateComprehensiveResults = () => {
    if (!currentAssessment.value || currentAssessment.value.id !== 'comprehensive') return

    // Initialize category scores
    const categories = {
      adhd: { score: 0, maxScore: 0, title: 'ADHD' },
      add: { score: 0, maxScore: 0, title: 'ADD' },
      depression: { score: 0, maxScore: 0, title: 'Depression' },
      anxiety: { score: 0, maxScore: 0, title: 'Anxiety' }
    }

    // Calculate scores for each category
    currentAssessment.value.questions.forEach(question => {
      if (!question.category) return
      
      const answer = answers.value[question.id]
      
      if (question.type === 'slider' && typeof answer === 'number') {
        categories[question.category].score += answer
        categories[question.category].maxScore += question.max || 10
      } else if (question.type === 'options' && typeof answer === 'string' && question.options) {
        const index = question.options.indexOf(answer as string)
        categories[question.category].score += index
        categories[question.category].maxScore += question.options.length - 1
      }
    })

    // Calculate percentages and store category scores
    categoryScores.value = Object.entries(categories).map(([category, data]) => {
      const percentage = Math.round((data.score / data.maxScore) * 100)
      return {
        category,
        title: data.title,
        score: data.score,
        maxScore: data.maxScore,
        percentage
      }
    })

    // Sort categories by percentage (highest first)
    categoryScores.value.sort((a, b) => b.percentage - a.percentage)

    // Determine primary condition (highest percentage)
    const primaryCondition = categoryScores.value[0]
    
    // Generate interpretation and recommendations
    let interpretation = `Based on your responses, you show the strongest indicators for ${primaryCondition.title} (${primaryCondition.percentage}%).`
    
    // Add information about other conditions if they're close
    const secondaryConditions = categoryScores.value
      .filter(c => c !== primaryCondition && c.percentage > 50 && (primaryCondition.percentage - c.percentage) < 20)
    
    if (secondaryConditions.length > 0) {
      interpretation += ` You also show significant indicators for ${secondaryConditions.map(c => `${c.title} (${c.percentage}%)`).join(', ')}.`
    }

    // Generate recommendations based on primary condition
    const recommendations: string[] = []
    
    // Add general recommendation
    recommendations.push('Consider taking the specific assessment for your highest scoring condition(s) for more detailed results')
    
    // Add condition-specific recommendations
    if (primaryCondition.category === 'adhd' || primaryCondition.category === 'add') {
      if (primaryCondition.percentage < 30) {
        recommendations.push('Continue monitoring your attention and focus')
      } else if (primaryCondition.percentage < 70) {
        recommendations.push('Try implementing organizational strategies and routines')
        recommendations.push('Consider mindfulness practices to improve concentration')
      } else {
        recommendations.push('Consider discussing these symptoms with a healthcare provider')
        recommendations.push('Learn about treatment options for attention-related conditions')
      }
    } else if (primaryCondition.category === 'depression') {
      if (primaryCondition.percentage < 30) {
        recommendations.push('Maintain healthy lifestyle habits including exercise and social connection')
      } else if (primaryCondition.percentage < 70) {
        recommendations.push('Practice self-care activities that boost your mood')
        recommendations.push('Consider mindfulness and stress reduction techniques')
      } else {
        recommendations.push('Consider discussing these symptoms with a healthcare provider')
        recommendations.push('Learn about treatment options for depression')
      }
    } else if (primaryCondition.category === 'anxiety') {
      if (primaryCondition.percentage < 30) {
        recommendations.push('Practice relaxation techniques when feeling stressed')
      } else if (primaryCondition.percentage < 70) {
        recommendations.push('Practice deep breathing and progressive muscle relaxation')
        recommendations.push('Consider mindfulness and meditation practices')
      } else {
        recommendations.push('Consider discussing these symptoms with a healthcare provider')
        recommendations.push('Learn about treatment options for anxiety')
      }
    }

    // Add general mental health recommendations
    recommendations.push('Prioritize sleep, exercise, and balanced nutrition')
    recommendations.push('Develop a support network of friends, family, or support groups')

    // Add disclaimer recommendation
    recommendations.push('Remember that this assessment is for educational purposes only and not a substitute for professional diagnosis')

    // Store the result
    results.value.push({
      type: 'Comprehensive Assessment',
      score: primaryCondition.score,
      maxScore: primaryCondition.maxScore,
      percentage: primaryCondition.percentage,
      interpretation,
      recommendations
    })
  }

  const clearResults = () => {
    results.value = []
    categoryScores.value = []
  }

  return {
    assessments,
    currentAssessment,
    answers,
    results,
    categoryScores,
    setCurrentAssessment,
    setAnswer,
    calculateResults,
    clearResults
  }
})
