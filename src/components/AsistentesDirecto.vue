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
    <cite>{{ mensaje }}</cite>
  </section>
</template>

<script>
export default {
    name:'AsistentesDirecto'
}
</script>

<style lang="sass" scoped>

</style>