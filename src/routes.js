import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from "./components/Formulario.vue"
import Lista from "./components/Lista.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/Formulario', component: Formulario},
    {path: '/Lista', component: Lista}
  ]
})