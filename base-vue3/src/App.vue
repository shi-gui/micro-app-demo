<template>
<ul>
  <li><router-link to="/">base1</router-link></li>
  <li><router-link to="/base2">base2</router-link></li>
</ul>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>
