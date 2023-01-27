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
            <button @click="delAsist">Añadir asistente</button>
        </div>
    </div>
    <cite v-if="mostrar==true">{{ mensaje }}</cite>
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
            this.asistentes.push(this.nombre_asistente) //Introduzco el nombre en el array
            this.nombre_asistente = ''//reseteo el input
            localStorage.setItem('Asistentes', JSON.stringify(this.asistentes))
        }
    }
}
</script>

<style lang="sass" scoped>

</style>