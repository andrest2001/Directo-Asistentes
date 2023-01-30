import { createStore } from 'vuex'

export default createStore({
  state: {
    nombre_asistente:'',
    mensaje:'',
    mostrar:false,
    encontrado: false,
    asistentes:['ShShoan', 'Fortu']
  },
  getters: {
  },
  mutations: {
    modificar(state){
      state.texto = 'Modificacion desde mutations'
    },
    addAsistVuex(state){
      state.mostrar = false
      if(state.nombre_asistente === ''){
        state.mostrar = true
        state.mensaje = "Debes introducir el nombre del asistente que quieres eliminar"
    }else{
        state.asistentes.push(state.nombre_asistente) //Introduzco el nombre en el array
        state.nombre_asistente = ''//reseteo el input
        localStorage.setItem('Asistentes', JSON.stringify(state.asistentes))
    }
    }
  },
  actions: {
    accionModificar(context){
      context.commit('modificar')
    },
    accionAddAsist(context){
      context.commit('addAsistVuex')
    }
  },
  modules: {
  }
})
