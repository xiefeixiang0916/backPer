<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 搜索导航区域 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <!--用户列表区域 -->
      <el-table :data="userTableData" style="width: 100%" border stripe>
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column prop="username" label="用户名称" width="180"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色名称" width="180"></el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <template slot-scope="scope">
            <!-- {{scope.row}} -->
            <el-switch v-model="scope.row.mgState" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-tooltip class="item" effect="dark" content="修改" :enterable="false" placement="top">
              <el-button type="primary" icon="el-icon-edit"></el-button>
            </el-tooltip>

            <!-- 删除按钮 -->
            <el-tooltip class="item" effect="dark" content="删除" :enterable="false" placement="top">
              <el-button type="danger" icon="el-icon-delete"></el-button>
            </el-tooltip>

            <!-- 分配角色按钮 -->
            <el-tooltip
              class="item"
              effect="dark"
              content="分配角色"
              :enterable="false"
              placement="top"
            >
              <el-button type="warning" icon="el-icon-share"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //获取用户列表的参数对象
      userQuerInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2,
      },
      total: 0,
      userTableData: [],
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    async getUserList() {
      const { data: res } = await this.$http.get('users', {
        params: this.userQuerInfo,
      })

      // console.log(res)

      if (res.meta.status != 200) return this.$message.error('获取用户列表失败')

      this.userTableData = res.data.users
      this.total = res.data.total
    },
    handleSizeChange(newSize) {
      console.log(`每页 ${newSize} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },
}
</script>