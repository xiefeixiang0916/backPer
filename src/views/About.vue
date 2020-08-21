<template>
  <div class="about" id="about">
    <h1>This is an about page</h1>
    dasdad
    <router-link to="/vbvcbv">增加用户</router-link>
    <router-link to="/adsda">用户列表</router-link>
    <div class="right">
      <!-- 右侧用来显示子路由对应的内容，即子路由对应页面的显示区域 -->
      <router-view></router-view>
    </div>
  </div>
</template>


<style scoped>
 #about {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 }
 .right{
   /* 右侧自适应 */
   flex:1;
   background-color: aqua;
   height: 100px;
 }
</style>
