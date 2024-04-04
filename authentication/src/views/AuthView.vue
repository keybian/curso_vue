<template>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        </div>
              
        <button type="submit" class="btn btn-primary" @click.prevent="authUser">Submit</button>
        
    </form>
</template>

<script lang="ts" setup>
    import {ref,Ref} from 'vue'
    import AuthService from "../services/AuthService"
    let email = ref("")
    let password = ref("")

    const authUser = async ()=>{
        const auth = new AuthService
        const  sucess= await auth.login(email.value,password.value)
        if(sucess){
            alert("Exito!")
        }else{
            alert("Login Incorrecto")
        }
    }

</script>