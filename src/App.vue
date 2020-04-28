<!-- 1模板 ：html结构 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">login</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<!-- 2行为：处理逻辑 -->
<script>
export default {
  
}
</script>

<!-- 3样式 解决样式 -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
