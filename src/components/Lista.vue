<template>

  <section class="src-components-lista">

<!--     <button class="btn btn my-1" type="submit" @OnClick="getTareas()">Actualizar Lista</button> -->

    <div class="j">
      <p v-if="$store.state.tareas" >
        <table class="table">
          <tr class="bg.success text-black">
            <th>Id</th>
            <th>Descripcion</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Creada</th>
          </tr>
          <tr class="bg-info text-black" v-for="(tarea, index) in $store.state.tareas" :key="index">
            <th>{{ tarea.id }}</th>
            <th>{{ tarea.descripcion }}</th>
            <th>{{ tarea.nombre }}</th>
            <th>{{ tarea.email }}</th>
            <th>{{ tarea.createdAt | formatoFechaHora }}</th>
          </tr>
        </table>
      </p>
      <p v-else class="alert alert-danger">No se encontraron tareas para mostrar</p>
    </div>

    <p> Respuestas: 1-d | 2-c | 3-c | 4-b | 5-a | 6-b | 7-d | 8-c | 9-d | 10-b </p>

  </section>

</template>

<script lang="js">

  import axios from 'axios'
  import { urlPosts } from '../urls'

  export default  {
    name: 'src-components-lista',
    props: [],
    mounted () {
      this.getTareas()
    },
    updated () {
      this.getTareas()
    },
    data () {
      return {
      }
    },
    methods: {
      getTareas() {
        axios.get(urlPosts)
        .then( res => {
          this.$store.state.tareas = res.data
        })
        .catch(error => {
          console.log('ERROR GET HTTP', error)
        })
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-lista {
    padding-top: 10px
  }
  h2 {
    text-align: left;
    margin-left: 10px;
  }
  .table {
    background-color: black;
    color: white;
  }
  .bg-info {
    font-size: 13px;
  }
  .btn {
    background-color: lightgray;
    font-size: 11px;
/*     display: flex; */
    margin-left: 20px;
  }
</style>
