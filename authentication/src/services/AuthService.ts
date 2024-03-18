import {Ref,ref} from 'vue'

class AuthService{

    private jwt: Ref<string>
    private error: Ref<string>
    constructor(){
        this.jwt = ref('')
        this.error = ref('')
    }

    getJwt():Ref<string>{
        return this.jwt
    }
    getError():Ref<string>{
        return this.error
    }

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
                this.error.value = "Login Failed"
                this.jwt=ref('')
                return false
            }

            this.jwt.value=response.data.access_token
            this.error=ref('')
            return true

        }catch(error){
            console.log(error)
            this.error.value = "Login Failed"
            return false

        }
    }

}

export default AuthService