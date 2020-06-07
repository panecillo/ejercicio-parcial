import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        minChar: 3,
        contactos: null
    },
    actions : {
/*         contarUp({commit}, cant) {
            commit('incrementar',cant)
        },
        contarDown({commit}, cant) {
            commit('decrementar',cant)
        } */
    },
    mutations : {
/*         incrementar(state, cant) {
            state.contador += cant
        },
        decrementar(state, cant) {
            state.contador -= cant
        } */
    }
})