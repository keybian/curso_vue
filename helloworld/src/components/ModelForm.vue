<template>
    <form action="">
        <input type="text" v-model="inputtext"/>
        <input type="checkbox" v-model="aggre"/> Acepto Los terminos y condiciones
        <select v-model="country">
            <option value="Spain">Spain</option>
            <option value="UK">UK</option>
            <option value="France">France</option>
        </select>
    </form>
     
    <h3>{{ inputtext }}</h3>
    
</template>

<script lang="ts" setup>
    import {Ref,ref} from 'vue'

    let inputtext :Ref<string>= ref('')
    let aggre=ref(true)
    let country = ref('Spain')
</script>

<style scoped>
</style>