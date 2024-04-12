import { createApp } from 'vue'
import projetoEstudo from './App.vue'
import router from './resources/router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createApp(projetoEstudo).use(router).mount('#app');