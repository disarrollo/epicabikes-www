<template>

  	<div class="d-flex flex-column mb-6">
	    

   		<v-card class="mx-auto">
	    	<NavCrud :title="title" reload @onReload="reload"   />

	      	<v-card-text>

        
            <v-form  ref="perfilForm">
                
                <v-combobox 
                v-model="perfil.tratamiento" 
                :items="tratamientoItemsDefault"
                label="Tratamiento"
                @input="tratamientoDirty=true"
              ></v-combobox>

                  <v-text-field  v-model="perfil.nombre"  :rules="nombreRules"  
                  label="Nombres" type="text" @input="nombreDirty=true"
                  ></v-text-field>
              
                  <v-text-field  v-model="perfil.apellido"  :rules="apellidoRules"  
                  label="Apellidos" type="text" @input="apellidoDirty=true"></v-text-field>
                
                  <v-text-field readonly v-model="perfil.email.email"  :rules="emailRules"  
                  label="eMail" type="mail" @input="emailDirty=true"></v-text-field>

                  <v-text-field v-model="perfil.telefono.numero" :rules="telefonoRules"  
                 label="Telefono" type="number" @input="telefonoDirty=true"></v-text-field>



                 <v-dialog
        ref="dialog"
        v-model="modalNacimiento"
        :return-value.sync="perfil.fecha_nacimiento"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="perfil.fecha_nacimiento"
            label="Fecha de nacimiento"
            readonly
            v-bind="attrs"
            v-on="on" 
          ></v-text-field>
        </template>
        <v-date-picker v-model="perfil.fecha_nacimiento" @input="fecha_nacimientoDirty=true;$refs.dialog.save(perfil.fecha_nacimiento)" scrollable>          
        </v-date-picker>
      </v-dialog>


                  <v-select v-model="perfil.genero"
                    :items="generoItems"
                    label="Genero"
                    @input="generoDirty=true"
                  ></v-select>

            </v-form>

          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!puedeGuardar" @click="processGuardar" color="primary" :loading="loading">Guardar</v-btn>
          </v-card-actions>

      </v-card>

  	</div>
  
</template>

<script>

import {mapState,mapActions,mapMutations,mapGetters} from 'vuex';
import NavCrud from '~/components/NavCrud.vue';

export default {
	name: 'EditProfile',
  components: {
    NavCrud
  },

  data () {
    return {
      
      nombreDirty: false,
      apellidoDirty: false,
      tratamientoDirty: false,
      generoDirty: false,
      fecha_nacimientoDirty: false,
      emailDirty: false,
      telefonoDirty: false,

      modalNacimiento: false,

      nombreRules: [
        v => !!v || 'Nombre es necesario',
      ],

      apellidoRules: [
        v => !!v || 'Apellido es necesario',
      ],

      telefonoRules: [
        //v => !!v || 'Telefono es necesario',
      ],

      tipoRules: [
        v => !!v || 'Tipo es necesario',
      ],

      emailRules: [
        //v => !!v || 'Email es necesario',
      ],

      generoItems : [
        {text:'Masculino', value: 'm'}, 
        {text:'Femenino', value: 'f'},
        {text:'Otro', value: 'o'},
        
      ],

      tratamientoItemsDefault : [
        'Señor',
        'Señora', 
        'Señorita',
        'Doctor',
        'Doctora',
      ],
      
      perfil : {
        nombre: null,
        apellido: null,
        tratamiento: null,
        genero: null,
        fecha_nacimiento: null,
        email: {
          email: null
        },
        telefono: {
          numero: null
        }
      },

      loading: false
    }
  },
  mounted(){
  	this.reload()
  },
  methods:{
    ...mapActions({
        saveNewAddress: 'perfil/saveNewAddress',
        deleteAddress: 'perfil/deleteAddress',
        selectAddress: 'perfil/selectAddress',
        fetchPerfil: 'perfil/fetchPerfil',
        saveProfile: 'perfil/saveProfile',
      }),

    ...mapMutations({ 
      setInfo: 'setInfo',
    }),

    reload(){
    	this.fetchPerfil()
      .then(result=>{
        this.cargarPerfil(result)
      })
    },

    cargarPerfil(result){
      Object.assign(this.perfil,result)
        if(result.fecha_nacimiento){
          this.perfil.fecha_nacimiento = new Date(result.fecha_nacimiento).toISOString().substr(0, 10)
        }
    },
    
    limpiar(){
      this.nombreDirty= false
      this.pellidosDirty= false
      this.tratamientoDirty= false
      this.generoDirty= false
      this.fecha_nacimientoDirty= false
      this.emailDirty= false
      this.telefonoDirty= false
    },

    processGuardar(){
      this.loading = true
      
      let payload = {}

      if(this.nombreDirty){
        payload.nombre = this.perfil.nombre
      }

      if(this.apellidoDirty){
        payload.apellido = this.perfil.apellido
      }
      if(this.tratamientoDirty){
        payload.tratamiento = this.perfil.tratamiento
      }
      if(this.generoDirty){
        payload.genero = this.perfil.genero
      }
      if(this.fecha_nacimientoDirty){
        payload.fecha_nacimiento = this.perfil.fecha_nacimiento
      }
      if(this.emailDirty){
        payload.email = {email:this.perfil.email.email}
      }
      if(this.telefonoDirty){
        payload.telefono = {numero:this.perfil.telefono.numero}
      }

      this.saveProfile(payload)
      .then(result=>{
        this.loading = false
        this.cargarPerfil(result)
        this.limpiar()
      })

    },

        
    
    
  },
  computed: {
    ...mapState({
      perfilState: state => state.perfil.perfil,
    }),
    ...mapGetters({
      
    }),

    title(){
    	return "Información Personal"
    },
    puedeGuardar(){
    	return this.nombreDirty || this.apellidoDirty || this.tratamientoDirty || this.generoDirty || this.fecha_nacimientoDirty || this.telefonoDirty || this.emailDirty
    },
    
    

  },
}
</script>
<style>
  

</style>