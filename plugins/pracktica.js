
export default function ({redirect, store }) {
  
  if(process.env.DEBUG_ENABLED && process.env.DEBUG_ENABLED=='true'){
  	store.commit('setDebug',true)
  }

  if(process.env.AUTH_MODULE && process.env.AUTH_MODULE=='true'){
  	store.commit('setAuthModule',true)	
  }

  	//Esto es incorrecto y genera error
  //if(store.state.authEnabled){
  	//store.dispatch('auth/initIdentity')	
  //}
  
}