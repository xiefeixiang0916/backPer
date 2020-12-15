<template>
  <div style="height: 100%">
    <el-container>
      <el-header>Header</el-header>
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
export default {
  components: {
    myMenu,
    myHome
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style lang="less">
.el-aside{
  overflow: hidden;
}
.el-container{
  height: 100%;
}
</style>
