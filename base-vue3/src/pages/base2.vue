<script>
export default {
  name: 'B-2'
}
</script>
<script setup>
// 标签初始化后，加载资源前触发
const handleCreated = () => console.log('created')

// 资源加载完成，开始渲染之前触发
const handleBeforemount = () => console.log('beforemount')

// 子应用渲染结束后触发
const handleMounted = () => console.log('mounted')

// 子应用卸载时触发
const handleUnmount = () => console.log('unmount')

// 子应用渲染出错时触发
const handleError = () => console.log('error')



</script>

<template>
  <div>
    <h1>子应用</h1>
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <!-- 如果子应用是hash模式，则不需要设置baseroute -->
    <micro-app
      name='app1'
      url='http://localhost:3001/'
      baseroute="/app1/"
      @created="handleCreated"
      @beforemount="handleBeforemount"
      @mounted="handleMounted"
      @unmount="handleUnmount"
      @error='handleError'
    />
  </div>
</template>