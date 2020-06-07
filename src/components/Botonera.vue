<template>

  <section class="src-components-botonera">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/Formulario" tag="li">
              <a class="navbar-brand" href="#">Formulario</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Lista" tag="li">
              <a class="navbar-brand" href="#">Listado</a>
            </router-link>
          </li>
        </ul>
      </div>  
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-botonera',
    props: [],
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
  .src-components-botonera {

  }
</style>
