<script setup>
import { ref } from 'vue';

const value = ref('base1');
</script>
<script>
export default {
    name: 'B-1'
}
</script>

<template>
  <div>
    <h1>{{ value }}</h1>
  </div>
</template>