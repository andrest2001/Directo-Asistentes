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
    },
    delAsistVuex(state){
      if(state.nombre_asistente === ''){
        state.mostrar = true
        state.mensaje = "Debes introducir el nombre del asistente que quieres eliminar"
      }else{
        for(let i = 0; i < state.asistentes.length; i++){
            if(state.nombre_asistente===state.asistentes[i]){
                state.encontrado = true
                state.mostrar = false

                //eliminamos el elemento del array y del loca storage
                let indice = state.asistentes.indexOf(state.nombre_asistente)
                state.asistentes.splice(indice, 1)
                //actualizamos el local storage
                localStorage.setItem('Asitentes', JSON.stringify(state.asistentes))
            }
        }
        if(state.encontrado === true){
            state.mostrar = false
        }else{
            state.mostrar = true
            state.mensaje = "NO"
        }
    }
    state.nombre_asistente=''
    }
  },
  actions: {
    accionModificar(context){
      context.commit('modificar')
    },
    accionAddAsist(context){
      context.commit('addAsistVuex')
    },
    accionDelAsist(context){
      context.commit('delAsistVuex')
    }
  },
  modules: {
  }
})
