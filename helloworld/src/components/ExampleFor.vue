<template>
    <ul>
        <!-- <li v-for="(country,index) in countries" v-bind:key="index">{{ country }}</li> -->
        <li v-for="(country) in countries" v-bind:key="country.code">{{ country.name }}</li>
    </ul>
</template>

<script lang="ts" setup>
    import {Ref,ref} from 'vue';
    /* let countries:Ref<Array<string>> = ref([
        'Spain','France','UK','Italy','Venezuela'
    ]) */
    interface ICountry{
        code: string,
        name:string
    }
    let countries:Ref<Array<ICountry>> = ref([
        {
            code:'es',
            name:'Spain'
        },
        {
            code:'en',
            name:'UK'
        },
        {
            code:'Fra',
            name:'France'
        },
        {
            code:'Ven',
            name:'Venezuela'
        }
        
    ])

</script>

<style scoped>

</style>