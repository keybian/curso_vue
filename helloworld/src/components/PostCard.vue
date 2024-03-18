<template>
    <div class="post_card">
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam temporibus magni at atque ipsam, dolore fugiat ducimus iure, consequatur porro fuga adipisci rem illo voluptas! Veniam placeat fugit quas officia!</p>

        <PostButton/>

    </div>
</template>

<script lang="ts" setup>
    import PostButton from './PostButton.vue'
</script>

<style scoped>
    .post_card{
        border-radius: 15px;
        
        margin: 5px;
        border: 1px solid #ccc;
        padding: 10px;

    }
</style>