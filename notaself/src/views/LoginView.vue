<template>
 <!--     <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        </div>
              
        <button type="submit" class="btn btn-primary" @click.prevent="authUser">Login</button>
        <router-link to="register" class="btn btn-link">Register</router-link>
        
    </form> --> 
    <div class="card m-3">
        <h4 class="card-header">Login</h4>
        <div class="card-body">
            <Form>
                <div class="form-group">
                    <label>Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="form-group">
                    
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary"  @click.prevent="authUser">
                        <span class="spinner-border spinner-border-sm mr-1"></span>
                        Login
                    </button>
                    <router-link to="register" class="btn btn-link">Register</router-link>
                </div>
            </Form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { router } from '@/router';
import { useAuthStore } from '@/store/authLogin';
import {ref,Ref} from 'vue'

    let email = ref("")
    let password = ref("")

    const authUser = async ()=>{
        const auth =useAuthStore()
        const  sucess= await auth.login(email.value,password.value)
        console.log(sucess)
        if(sucess){
            alert("Exito!")
            router.push('dashboard');
        }else{
            alert("Login Incorrecto")
        }
    }
</script>