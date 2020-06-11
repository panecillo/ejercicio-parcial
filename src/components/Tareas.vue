<template>

  <section class="src-components-formulario">
    <div>
      <h2>Tareas</h2>
      <hr>
      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">
          <label class="label" for="descripcion">Descripcion</label>
          <input 
            type="text"
            id="descripcion"
            class="form-control"
            autocomplete="off"
            name="descripcion"
            v-model.trim="formData.descripcion"
            required
            :minlength="minChar"
            :maxlength="maxChar"
          >
          <field-messages class="mensaje" name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo descripcion requerido</div>
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar entre {{minChar}} y {{maxChar}} caracteres</div>
            <div v-if="formData.descripcion.length == maxChar" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{maxChar}})</div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label class="label" for="nombre">Nombre:</label>
          <input 
            type="text"
            id="nombre"
            class="form-control"
            autocomplete="off"
            name="nombre"
            v-model.trim="formData.nombre"
            required
            :minlength="minCharNom"
            :maxlength="maxChar"
            no-espacios
          >
          <field-messages class="mensaje" name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{minCharNom}} caracteres</div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label class="label" for="email">Email</label>
          <input 
            type="email"
            id="email"
            class="form-control"
            autocomplete="off"
            name="email"
            v-model="formData.email"
            required
          >
          
          <field-messages class="mensaje" name="email" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo email requerido</div>
            <div slot="email" class="alert alert-danger my-1">Email no válido</div>
          </field-messages>

        </validate>
        <br>

        <button class="btn btn my-1" :disabled="formState.$invalid" type="submit">Enviar</button>

      </vue-form>

    </div>
  </section>

</template>

<script lang="js">

  import { urlPosts } from '../urls'

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
      console.log("Estoy cargado vieja!")
    },
    data () {
      return {
        formState: {},
        formData: this.getInitialData(),
        enviando: false,
        minChar: 10,
        maxChar: 50,
        minCharNom: 3
      }
    },
    methods: {
      getInitialData() {
        return {
          descripcion: '',
          nombre: '',
          email: ''
        }
      },
      enviar() {
        this.enviando = true
        console.log(this.formData)
        console.log(this.enviando)

        /* ------------------------ */
        /* ENVIO DE DATOS CON AXIOS */
        /* ------------------------ */
        this.axios.post(urlPosts, this.formData, {
          'content-type' : 'application/json'
        })
        .then( res => {
          console.log(res.data)
          this.formData = this.getInitialData()
          this.formState._reset()
        })
        .catch(error => {
          console.log('ERROR POST', error)
          this.enviando = false
        })

        setTimeout(() => {
          this.enviando = false
        },10000)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {
    padding-top: 10px;
    text-align: left;
    margin: 10px;
  }
  h2 {
    text-align: left;
    margin-left: 10px;
  }
  .alert {
    font-size: 8px;
    padding: 4px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: rgb(240, 171, 171);
  }
  .btn {
    background-color: gray;
    color: black;
  }
  .label {
    margin-bottom: -20px;
  }

</style>
