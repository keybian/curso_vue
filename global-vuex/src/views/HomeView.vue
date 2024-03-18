<template>
  <h3>Counter</h3>
  <h3>{{ counter }} * 2 = {{ time2 }}</h3>
  <button @click="increment">Increment</button>
</template>

<script >
import { defineComponent,computed } from 'vue';
//este import es solo si se esta usando el mapeo con Option API
import {mapMutations,mapState,mapGetters} from 'vuex';
//este import es para traabajar con composition API
import {useStore} from 'vuex';
//option API solo
/*export default defineComponent({
  name: 'HomeView',
  computed:{
    counter(){
      return this.$store.state.counter
    },
    time2(){
      return this.$store.getters.time2
    }
  },
  methods: {
    increment(){
      this.$store.commit('setcounter',this.counter +1)
    }
  }
  
});*/
//Composition API , NOTA: en composition API no se usan map , map es solo 
//con option API ya que los dos tienen la misma estructura o composicion
export default defineComponent({
  name:'HomeView',
  setup(){
     const store = useStore()
     const counter = computed(()=> store.state.counter)
     const time2 = computed(()=> store.getters.time2)
     const increment = ()=> store.commit('setcounter',counter.value +1)
     return {increment,counter,time2}
  }
})
//Option API con mapeo y express Operator
/*export default defineComponent({
  name:'HomeView',
  computed:{
    ...mapState(['counter']),
    ...mapGetters(['time2'])
  },
  methods:{
    ...mapMutations(['setcounter']),
    increment(){
      this.setcounter(this.counter+1)
    }
  }  
});*/
</script>
