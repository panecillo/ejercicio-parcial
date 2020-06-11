import Vue from 'vue'


Vue.filter('formatoFechaHora', function(value) {
    if (!value) return ''
    value = value.toString()
    let ano = value.substring(0,4)
    let mes = value.substring(7,5)
    let dia = value.substring(10,8)
    let tiempo = value.substring(19,11)
    return dia + "/" + mes + "/" + ano + " " + tiempo 
})

