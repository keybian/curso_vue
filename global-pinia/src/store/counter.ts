import { defineStore } from "pinia";

export const useCounterStore=defineStore('counter',{
    //STATE
    state:()=>{
        return {
            count:1
        }
    },

    //GETTERS
    getters:{
        time2:(state)=> state.count*2
    },

    //ACTIONS
    actions:{
        increment(){            
            this.count += 1
        }
    }
})