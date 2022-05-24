<script setup>
import { ref } from 'vue';

const value = ref('app1-p1');
</script>
<script>
export default {
    name: 'A1-1'
}
</script>

<template>
  <div>
    <h1>{{ value }}</h1>
    <h2>我是子应用的</h2>
  </div>
</template>