<template>

  <div class="d-flex flex-column mb-6">

      <v-img :aspect-ratio="bannerRatio" src="/taller.jpg">
        <div  class="d-flex flex-column white--text justify-center fill-height align-center">
          
            <h1 class="heading lightbox pa-3 mt-8" width="600">
              Mantenimiento profesional de bicicletas
            </h1>

            
        </div>
      </v-img>
      
      <h1 class="text-center my-6">Somos técnicos certificados</h1>      

      <v-container class="mb-4">
        <v-row no-gutters>
          <v-col xs="6">
              <v-img class="mx-auto" max-width="200"   src="/park_tool.png"></v-img>
          </v-col>
          <v-col xs="6">
              <v-img class="mx-auto" max-width="200"   src="/park_tool_school.png"></v-img>
          </v-col>
        </v-row>
      </v-container>


      <v-img :aspect-ratio="bannerRatio" src="/taller.jpg">
        <div  class="d-flex flex-column white--text justify-center fill-height align-center">
          
            <h1 class="heading lightbox pa-3 mt-8" width="600">
              Recogemos y entregamos tu bicicleta en casa o trabajo
            </h1>

        </div>
      </v-img>


      <h1 class="text-center my-6">Utilizamos insumos de primera calidad</h1>
      <v-container class="mb-4">
        <v-row no-gutters>
          <v-col cols="6" md="3">
              <v-img class="mx-auto" max-width="150"   src="/shimano.png"></v-img>
          </v-col>
          <v-col cols="6" md="3">
              <v-img class="mx-auto" max-width="150"   src="/sram.png"></v-img>
          </v-col>
          <v-col cols="6" md="3">
              <v-img class="mx-auto" max-width="150"   src="/wd-40.png"></v-img>
          </v-col>
          <v-col cols="6" md="3">
              <v-img class="mx-auto" max-width="150"   src="/finish_line.png"></v-img>
          </v-col>
        </v-row>
      </v-container>



      <v-img :aspect-ratio="bannerRatio" src="/smartphone.jpg">
        <div  class="d-flex flex-column white--text justify-center fill-height align-center">
          
            <h1 class="heading lightbox pa-3 mt-8" width="600">
              Sigue con detalle el proceso de mantenimiento de tu bici
            </h1>

        </div>
      </v-img>

      
      <h1 class="text-center my-6">Servicios</h1>      


    <v-container>
      <v-row>
        <v-col md="4">

          <v-card class="mx-auto" max-width="400" outlined>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Mantenimiento Preventivo</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              Debe hacerse un mantenimiento periódico a la bicicleta para evitar deterioro en sus partes.
            </v-card-text>
          </v-card>

        </v-col>

        <v-col md="4">

          <v-card class="mx-auto" max-width="400" outlined>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Cambio de partes</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              Algunas partes como las pastillas de freno, la cada y las llantas se deben cambiar cuando termina su ciclo de vida.
            </v-card-text>
          </v-card>

        </v-col>

        <v-col md="4">
          <v-card class="mx-auto" max-width="400" outlined>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Alistamiento</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              Es una revisión general del estado de la bicicleta y ajuste de frenos y sistemas de cambios que se debe realizar períodicamente y antes de recorridos largos.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="4">
          <v-card class="mx-auto" max-width="400" outlined>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Lavado</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              Se debe realizar lavado de la bicicleta para evitar desgaste en la cadena y sistema de cambios.
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>

    </v-container>



  </div>
  
</template>

<script>

import {mapState,mapActions,mapMutations,mapGetters} from 'vuex';

import axios from 'axios'

export default {

  components: {
    
  },
  
  data () {
    return {
      
    }
  },
/*
  async asyncData({ params }) {  
  },
*/

  methods:{
    ...mapActions({
        
      }),

    ...mapMutations({
      
    }),
    
  },
  computed: {
    ...mapState({
      
    }),
    ...mapGetters({
      
    }),

    bannerRatio(){
      
      switch(this.$vuetify.breakpoint.name){
        case 'xs': return 2
          case 'sm': return 2
          case 'md': return 3
          case 'lg': return 4
          case 'xl': return 4
      }
      
    }

  },
}
</script>

<style>
  
  .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
  
</style>