<template>
  <h3>Counter</h3>
  <h3>{{ store.count }} * 2 = {{ store.time2 }}</h3>
  <button @click="store.increment()">Increment</button>
</template>
<script setup>
  import { useCounterStore } from './store/counter';
  const store = useCounterStore()
</script>