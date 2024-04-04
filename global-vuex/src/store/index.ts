import { createStore } from 'vuex'

export default createStore({
  state: {
    // Data
    counter:1
  },
  getters: {
    // Computed
    time2(state){
      return state.counter*2
    }
  },
  mutations: {
    // set sync
    setcounter(state,value){
      state.counter=value;
    }
  }
  //actions: {
  // // set async
  // },
  //modules: {
  //  // subdivide the store
  //}
})
