<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.jpg" />
      </div>

      <!-- 登录表单区域 -->
      <div>
        <el-form ref="form" :model="form" label-width="0px" class="login_form">
          <!-- 用户名 -->
          <el-form-item>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <!-- 按钮区域 -->
          <el-form-item class="btns">
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  background-image: url("../assets/timg.jpg");
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  height: 100%;

}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding:0 20px;
  box-sizing:border-box;
}

.btns{
  display: flex;
  justify-content: flex-end;
}

</style>