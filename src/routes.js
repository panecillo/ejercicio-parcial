import Vue from 'vue'
import VueRouter from 'vue-router'

import Tareas from "./components/Tareas.vue"
import Lista from "./components/Lista.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/Tareas', component: Tareas},
    {path: '/Lista', component: Lista}
  ]
})