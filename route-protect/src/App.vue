<template>
    <!--<input type="text" v-model="note">
    <button @click="sendToServer">Enviar Nota al Servidor</button>-->
    <router-view></router-view>
</template>

<script lang="ts" setup>
    /*import {ref} from 'vue'

    let note = ref("")
    const sendToServer =  async()=>{
        const rawResponse = await fetch('http:\\XXXXXXXX',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization':'Bearer YYYYYYYYY' //YYYYYY es el token o JWT
          },
          body:JSON.stringify({ note:note.value})
        })

        const response = await rawResponse.json()
    }*/
</script>
