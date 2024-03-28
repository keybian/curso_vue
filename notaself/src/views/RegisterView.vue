<template>
  
    <div class="card m-3">
        <h4 class="card-header">Register</h4>
        <div class="card-body">
            <Form >
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" id="name"  placeholder="Name" v-model="name">
                   
                </div>
                
                <div class="form-group">
                    <label>Username</label>
                    <input type="email" class="form-control" id="exampleInputemail"  placeholder="Enter email" v-model="email">
                    
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password" v-model="password">
                   
                </div>
                <div class="form-group">
                    <button class="btn btn-primary"  @click.prevent="userStore">
                        <span class="spinner-border spinner-border-sm mr-1"></span>
                        Register
                    </button>
                    <router-link to="login" class="btn btn-link">Cancel</router-link>
                </div>
            </Form>
        </div>
    </div>

</template>

<script lang="ts" setup>
    import { router } from '@/router';
    import { useUserStore } from '@/store/user';
    import {ref,Ref} from 'vue'
    

    let email = ref("")
    let password = ref("")
    let name = ref("")
    const userStore = async ()=>{
        const user =useUserStore()
        const  sucess= await user.register(name.value,email.value,password.value)
        if(sucess){
            alert("Exito!")
            router.push('login');
        }else{
            alert("Registro Incompleto,intente de Nuevo")
        }
    }
    



</script>