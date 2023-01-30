import { createStore } from 'vuex'

export default createStore({
  state: {
    texto:'Hola mundo desde el state'
  },
  getters: {
  },
  mutations: {
    modificar(state){
      state.texto = 'Modificacion desde mutations'
    }
  },
  actions: {
    accionModificar(context){
      context.commit('modificar')
    }
  },
  modules: {
  }
})
