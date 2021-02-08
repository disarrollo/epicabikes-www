<template>
  <v-app>

    <v-navigation-drawer 
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>

        <v-list-item link to="/mi-cuenta" v-if="isLogged">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Mi cuenta</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link  v-else @click="showLoginDialog()">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Ingresar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-store</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item  link to="/servicios">
          <v-list-item-icon>
            <v-icon>mdi-tools</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Servicios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item  link to="/quienes-somos">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Quienes somos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item  link to="/conoce-tu-bicicleta">
          <v-list-item-icon>
            <v-icon>mdi-bicycle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Conoce tu bicicleta</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item  link to="/contacto">
          <v-list-item-icon>
            <v-icon>mdi-phone</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Contacto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item  link to="/terminos-y-condiciones">
          <v-list-item-icon>
            <v-icon>mdi-book-open-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Terminos y condiciones</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item  link to="/politica-de-privacidad">
          <v-list-item-icon>
            <v-icon>mdi-shield-alert</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Política de privacidad</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link  v-if="isLogged" @click="logout()">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

      <template v-slot:append>
        <div class="py-1 px-1 text-caption">
            Version: {{appVersion}}
        </div>
      </template>

      

    </v-navigation-drawer>

    
    <v-app-bar  fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" >
      </v-app-bar-nav-icon>    
      <Logo/>
    </v-app-bar>


    <v-main>
      <nuxt />
    </v-main>

    <v-snackbar v-model="isInfoDialogShowed">
      {{ info }}
      <v-btn color="success" text @click="hideInfo">
        Close
      </v-btn>
    </v-snackbar>
    
    <v-snackbar v-model="isErrorDialogShowed">
      {{ error }}
      <v-btn color="error" text @click="hideError">
        Close
      </v-btn>
    </v-snackbar>

    <v-snackbar v-model="isWarningDialogShowed">
      {{ warning }}
      <v-btn color="info" text @click="hideWarning">
        Close
      </v-btn>
    </v-snackbar>

    <v-footer>
      <span>epicabikes.com &copy; 2020</span>
    </v-footer>

    
    <LoginFormDialog/>
    

    <div v-if="debugEnabled">
      <DebugBar></DebugBar>
    </div>

  </v-app>
</template>

<script>



import {mapState,mapActions,mapMutations,mapGetters} from 'vuex';
  
export default {
  
  components: {
    
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: false,
      rightDrawer: false,
      
    }
  },
  mounted(){
    this.initIdentity()
    
  },
  
  async asyncData ({ $content }) {    
    
  },

  

  methods:{
    ...mapActions({
        initIdentity: 'auth/initIdentity',
        logout: 'auth/logout',
      }),

    ...mapMutations({
      showError: 'showError',
      hideError: 'hideError',
      showInfo: 'showInfo',
      hideInfo: 'hideInfo',
      showWarning: 'showWarning',
      hideWarning: 'hideWarning',
      showLoginDialog:  'auth/showLoginDialog',
    }),
    
  },
  computed: {
    ...mapState({
      
      processing: state => state.processing,
      error: state => state.error,
      info: state => state.info,
      warning: state => state.warning,
      
      appVersion: state => state.appVersion,

      debugEnabled: state => state.debugEnabled,
      
      isErrorShowed: state => state.isErrorShowed,
      isWarningShowed: state => state.isWarningShowed,
      isInfoShowed: state => state.isInfoShowed,

    }),
    ...mapGetters({
      ableTo: 'auth/ableTo', 
      isLogged: 'auth/isLogged', 
      isMobile: 'isMobile', 
    }),
    
    nombre(){
      if(this.perfil && this.perfil.tratamiento){
        return this.perfil.tratamiento
      }else if(this.identity.data.tratamiento){
        return this.identity.data.tratamiento
      }
      return 'Mi cuenta'
    },
    
    title(){
      return 'Epica Bikes'
    },

    isErrorDialogShowed:{
      get(){
        return this.isErrorShowed
      },
      set(value){
        if(value){
          this.showError()
        }else{
          this.hideError()
        }
        
      }
    },
    isInfoDialogShowed:{
      get(){
        return this.isInfoShowed
      },
      set(value){
        if(value){
          this.showInfo()
        }else{
          this.hideInfo()
        }
        
      }
    },

    isWarningDialogShowed:{
      get(){
        return this.isWarningShowed
      },
      set(value){
        if(value){
          this.showWarning()
        }else{
          this.hideWarning()
        }
        
      }
    },
  },
}
</script>
