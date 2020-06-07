<template>

  <section class="src-components-principal">
    <Botonera />
    <router-view></router-view>
  </section>

</template>

<script lang="js">

  import Botonera from './Botonera.vue'

  export default  {
    name: 'src-components-principal',
    props: [],
    components: {
      Botonera
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-principal {
    margin-top: -60px
  }
</style>
