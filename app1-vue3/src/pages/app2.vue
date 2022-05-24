<script setup>
import { ref } from 'vue';

const value = ref('app1-p2');
</script>
<script>
export default {
    name: 'A1-2'
}
</script>

<template>
  <div>
    <h1>{{ value }}</h1>
  </div>
</template>