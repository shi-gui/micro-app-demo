<template>
  <router-link to="/app1-p1">app1-p1</router-link>
  <router-link to="/app1-p2">app1-p2</router-link>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}

</script>
<script setup>
// 子应用卸载
window.addEventListener('unmount', function () {
  // 执行卸载相关操作
  console.log('子应用卸载');
})

// 判断是否在微前端环境中
if (window.__MICRO_APP_ENVIRONMENT__) {
  console.log('我在微前端环境中')
}

// 在子应用中获取<micro-app></micro-app> 中的name值
console.log(window.__MICRO_APP_NAME__)

// 判断是否是基座应用
if (window.__MICRO_APP_BASE_APPLICATION__) {
  console.log('我是基座应用')
} else {
  console.log('我不是基座应用');
}

console.log(window)
</script>
