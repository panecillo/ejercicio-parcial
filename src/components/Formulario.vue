<template>

  <section class="src-components-formulario">
    <div>
      <h2>Formulario</h2>
      <hr>
      <vue-form :state="formState" @submit.prevent="enviar()">
        
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
            :minlength="minChar"
            :maxlength="maxChar"
          >
          <field-messages class="mensaje" name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{minChar}} caracteres</div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label class="label" for="apellido">Apellido:</label>
          <input 
            type="text"
            id="apellido"
            class="form-control"
            autocomplete="off"
            name="apellido"
            v-model.trim="formData.apellido"
            required
            :minlength="minChar"
            :maxlength="maxChar"
          >
          <field-messages class="mensaje" name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo apellido requerido</div>
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{minChar}} caracteres</div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label class="label" or="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            class="form-control"
            autocomplete="off"
            name="edad"
            v-model.number="formData.edad"
            required
            :min="edadMin"
            :max="edadMax"
          >
          <field-messages class="mensaje" name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo edad requerido</div>
            <div slot="min" class="alert alert-danger my-1">La edad minima es de {{edadMin}} años</div>
            <div slot="max" class="alert alert-danger my-1">La edad máxima es de {{edadMax}} años</div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label class="label" for="direccion">direccion</label>
          <input 
            type="text"
            id="direccion"
            class="form-control"
            autocomplete="off"
            name="direccion"
            v-model.trim="formData.direccion"
            required
            :minlength="minChar"
            :maxlength="maxChar"
          >
          <field-messages class="mensaje" name="direccion" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo direccion requerido</div>
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{minChar}} caracteres</div>
            <div v-if="formData.direccion.length == maxChar" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{maxChar}})</div>
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

        <validate tag="div">
          <label class="label" for="telefono">Telefono:</label>
          <input 
            type="number"
            id="telefono"
            class="form-control"
            autocomplete="off"
            name="telefono"
            v-model.trim="formData.telefono"
            required
            :minlength="minNum"
            :maxlength="maxNum"
          >
          <field-messages class="mensaje" name="telefono" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo telefono requerido</div>
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{minNum}} números</div>
            <div v-if="formData.telefono.length == maxNum" class="alert alert-danger my-1">Máximo de números alcanzados ({{maxNum}})</div>
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
        minChar: 3,
        maxChar: 40,
        minNum: 7,
        maxNum: 11,
        edadMin: 18,
        edadMax: 150


      }
    },
    methods: {
      getInitialData() {
        return {
          nombre: '',
          apellido: '',
          edad: '',
          direccion: '',
          email: '',
          telefono: ''
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
