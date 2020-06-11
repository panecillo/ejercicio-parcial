<template>

  <section class="src-components-principal">
    <div class="jumbotron mt3">
      <Tareas />
      <Lista />
    </div>
  </section>

</template>

<script lang="js">

  import Tareas from './Tareas.vue'
  import Lista from './Lista'

  export default  {
    name: 'src-components-principal',
    props: [],
    components: {
      Tareas,
      Lista
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
