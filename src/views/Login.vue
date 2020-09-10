<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/img/logo.jpg" />
      </div>

      <!-- 登录表单区域 -->
      <div>
        <el-form ref="loginFromRef" :model="login" class="login_form" :rules="loginFromRules">
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input v-model="login.username" prefix-icon="el-icon-user-solid"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input v-model="login.password" type="password" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <!-- 按钮区域 -->
          <el-form-item class="btns">
            <el-button type="primary" @click="loginClick">登录</el-button>
            <el-button @click="resetLoginFrom">重置</el-button>
            <el-button type="primary" @click="loginTouristClick">游客模式</el-button>
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
      //表单登录对象
      login: {
        username: 'admin',
        password: '123456',
      },
      //表单验证规则
      loginFromRules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          {
            min: 0,
            max: 10,
            message: '长度在 0 到 10 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 0,
            max: 15,
            message: '长度在 0 到 15 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    loginClick() {
      //进行正则验证
      this.$refs.loginFromRef.validate((valid) => {
        // console.log(valid)
        if (!valid) return

        this.$http.post('login', this.login).then((response) => {
          //console.log(response.data)
          const { data: res } = response.data
          this.$message.success('登陆成功')
          //存储token
          window.sessionStorage.setItem('token', res.token)
          this.$router.push('/home')
        })
      })
    },
    loginTouristClick() {
      //存储token
      window.sessionStorage.setItem('token', '123456')
      this.$router.push('/home')
    },
    //点击按钮 重置登录表单
    resetLoginFrom() {
      // console.log(this)
      this.$refs.loginFromRef.resetFields()
    },
  },
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  background-image: url('../assets/img/timg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
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

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>