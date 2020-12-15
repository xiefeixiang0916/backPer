<template>
  <div style="height: 100%">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <!-- 菜单组件 -->
          <my-menu></my-menu>
        </el-aside>
        <el-main>
          <!-- 主体 -->
          <my-home></my-home>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import myMenu from '@/components/menu/index'
import myHome from '@/components/home/index'
import myHeader from '@/components/header/index'
// import request from '@/utils/request'

export default {
  components: {
    myMenu,
    myHome,
    myHeader,
  },
  data() {
    return {
      message:'1234'
    }
  },
  created () {
    this.getInfo();
    console.group('------created创建完毕状态------');
    console.log("%c%s", "color:red","el     : " + this.$el); //undefined
    console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red","message: " + this.message); //已被初始化
  },
  methods: {
    //使用
    getInfo() {
        this.$http.get('getc').then((response) => {
            console.log(response)
        })
    },
  },

}
</script>

<style lang="less">
.el-aside {
  overflow: hidden;
}
.el-container {
  height: 100%;
}
</style>
