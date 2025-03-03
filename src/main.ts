import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Assessment from './views/Assessment.vue'
import Results from './views/Results.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/assessment/:type', component: Assessment },
  { path: '/results', component: Results }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
