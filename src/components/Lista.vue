<template>

  <section class="src-components-lista">
    <h2>Listado</h2>

    
    <button class="btn mb-2" @click="agregarContacto()">Agregar Contacto</button>
    <button class="btn mb-2" @click="eliminarContactos()">Eliminar Contactos</button>

    <div class="j">
<!--       <button class="btn btn-primary m-3" @click="getAxios()">Actualizar lista de Usuarios</button>
      <button class="btn btn-success m-3" @click="agregarRandom()">Agrega un Usuario random</button>
      <button class="btn btn-danger m-3" @click="borrando()">Limpiar lista de Usuarios</button>
      <div v-if="borrandoLista">  
        <div v-for="(usuario, id) in usuarios" :key="id">
          {{deleteUsuarioAxios(usuario.id)}}
        </div>
          {{borrando()}}
      </div> -->
      <p v-if="$store.state.contactos">
        <table class="table">
          <tr class="bg.success text-black">
            <th>Nº</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Direccion</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
          <tr class="bg-info text-black" v-for="(contacto, index) in $store.state.contactos" :key="index">
            <th>{{ contacto.id }}</th>
            <th>{{ contacto.nombre | primeraMayus }}</th>
            <th>{{ contacto.apellido | primeraMayus }}</th>
            <th>{{ contacto.edad }}</th>
            <th>{{ contacto.direccion }}</th>
            <th>{{ contacto.email }}</th>
            <th>{{ contacto.telefono }}</th>
          </tr>
        </table>
      </p>
      <p v-else class="alert alert-danger">No hay contactos para visualizar</p>
    </div>

  </section>

</template>

<script lang="js">

  import axios from 'axios'
  import { urlPosts } from '../urls'

  export default  {
    name: 'src-components-lista',
    props: [],
    mounted () {
      axios.get(urlPosts)
      .then( res => {
        this.$store.state.contactos = res.data
        console.log(this.$store.state.contactos)
      })
      .catch(error => {
        console.log('ERROR GET HTTP', error)
      })
    },
    data () {
      return {
        url: ''
      }
    },
    methods: {
      getContactos() {
        axios.get(urlPosts)
        .then( res => {
          this.$store.state.contactos = res.data
          console.log(this.$store.state.contactos)
        })
        .catch(error => {
          console.log('ERROR GET HTTP', error)
        })
      },
      agregarContacto() {
        let contacto = []
        axios.post(urlPosts, contacto, {
          'content-type' : 'application/json'
        })
        this.getContactos()
      },
      eliminarContacto(id) {
        axios.delete(urlPosts+id)
        .then( res => {
          console.log(res.data);
          this.getContactos();
        })
      },
      eliminarContactos() {
        this.getContactos();
        for(let i = 0; i < this.$store.state.contactos.length; i++) {
          this.eliminarContacto(this.$store.state.contactos[i].id);
        }
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
