import { defineStore } from "pinia";

export const useAuthStore=defineStore('authLogin',{
    //STATE
    state:()=>{
        return{
            jwt:'',
            error:''            
        }
    },

    //GETTERS


    //ACTIONS
    actions:{
        async login(email:string,password:string): Promise<boolean> {
            try{
    
                const res = await fetch('https://376usy84.directus.app/auth/login',{
                    method: 'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        email:email,
                        password:password
                    })
    
                })
    
                const response = await res.json()
                if('errors' in response){
                    this.error = "Login Failed"
                    this.jwt=""
                    return false
                }
    
                this.jwt=response.data.access_token
                this.error=""
                return true
    
            }catch(error){
                console.log(error)
                this.error = "Login Failed"
                return false
    
            }
        }
    
    }

})