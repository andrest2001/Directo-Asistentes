<template>
  <section>
    <div id="asistentes">
        <h1>Asistentes a la sesion en directo</h1>
        <ul>
            <li v-for="asistente in asistentes.slice().reverse()" :key="asistente">{{ asistente }}</li>
        </ul>
    </div>
    <div id="caja-form">
        <div id="add">
            <input type="text" placeholder="Nombre del asistente" v-model="nombre_asistente">
            <button @click="addAsist">Añadir asistente</button>
            <button @click="delAsist">Eliminar asistente</button>
        </div>
    </div>
    <cite v-if="mostrar==true">{{ mensaje }}</cite>
    <h1>{{ $store.state.texto }}</h1>
  </section>
</template>

<script>
export default {
    name:'AsistentesDirecto',
    data(){
        return{
            nombre_asistente:'',
            mensaje:'',
            mostrar:false,
            encontrado: false,
            asistentes:['ShShoan', 'Fortu']
        }
    
    },
    methods:{
        addAsist(){
            if(this.nombre_asistente === ''){
                this.mostrar = true
                this.mensaje = "Debes introducir el nombre del asistente que quieres eliminar"
            }else{
                this.asistentes.push(this.nombre_asistente) //Introduzco el nombre en el array
                this.nombre_asistente = ''//reseteo el input
                localStorage.setItem('Asistentes', JSON.stringify(this.asistentes))
            }
        },
        delAsist(){
            if(this.nombre_asistente === ''){
                this.mostrar = true
                this.mensaje = "Debes introducir el nombre del asistente que quieres eliminar"
            }else{
                for(let i = 0; i < this.asistentes.length; i++){
                    if(this.nombre_asistente===this.asistentes[i]){
                        this.encontrado = true
                        this.mostrar = false

                        //eliminamos el elemento del array y del loca storage
                        let indice = this.asistentes.indexOf(this.nombre_asistente)
                        this.asistentes.splice(indice, 1)
                        //actualizamos el local storage
                        localStorage.setItem('Asitentes', JSON.stringify(this.asistentes))
                    }
                }
                if(this.encontrado === true){
                    this.mostrar = false
                }else{
                    this.mostrar = true
                    this.mensaje = "NO"
                }
            }
            this.nombre_asistente=''
        }
    },

    mounted(){
        let data = localStorage.getItem('Asistentes')
        if(data!=null){
            this.asistentes = JSON.parse(data)
        }
        this.$store.dispatch('accionModificar')
    }
}
</script>

<style lang="sass" scoped>
    @mixin flex
        display: flex
        justify-content: center
        align-items: center

    @mixin input_botones
        border-radius: 10px
        border: none
        font-style: italic
        font-weight: bold
        padding: .5rem 1rem
        color: gray

    /*Le ponemos estilos al scroll */

    ul::-webkit-scrollbar
        width: 7px
        border-radius: 10px
    ul::-webkit-scrollbar-thumb
        background: #1e2761
        border-radius: 10px

    section
        @include flex
        padding: 1rem
        flex-direction: column
        height: 100vh
        background: #1e2761
        #asistentes
            width: 50%
            padding: 1rem
            border-radius: 10px
            background: white
            box-shadow: 1px 1px 3px black
            h1
                color: #7a2048
            ul
                list-style: none
                overflow: scroll
                overflow-x: hidden
                height: 100px
                li
                    margin: 10px 0
                    font-size: 18px
                    color: #408ec6
                    font-weight: bold
                    border-bottom: 1px solid

        #caja-form
            width: 50%
            #add
                width: 100%
                display: flex
                justify-content: space-between
                margin: 10px 0 
                input
                    @include input_botones
                    width: 50%
                    outline: none
                button
                    @include input_botones 
                    cursor: pointer
                    transition: .4s
                    &:hover
                        background: #7a2048
                        color: white
        cite
            color: orange
</style>