<template>
    <h1>Post Detail</h1>
    <div class="post-container">
        <div class="post-card">
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>
        </div>
        <router-link :to="{name:'PostList'}">Volver</router-link>
    </div>
</template>

<script lang="ts" setup>
import Postservice from '@/servi/PostService';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
    const service = new Postservice()
    const post = service.getPost()
    onMounted (async()=>{
        const route = useRoute()
        let elm = route.params.id
        await service.fetcchById(elm)
    })
</script>

<style lang="scss" scoped>
    .post-container{
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    .post-card{
        padding: 25px;
        width: 750px;
        border-radius: 15px;
        border: 1px solid #ccc;
    }
</style>