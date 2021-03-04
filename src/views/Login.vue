<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-03 12:41:43
 * @LastEditors: lihao
 * @LastEditTime: 2021-03-04 10:44:06
-->
<template>
  <div class="login">
    <div class="top"></div>
    <div class="content">
      <div class="header">
        <img class="logo" src="../assets/xkt-logo.png" alt="" />
        <div class="lms">
          <img src="../assets/lmslogo.png" alt="" />
        </div>
      </div>
      <div class="footer">
        <el-input class="name" v-model="userName" placeholder="学员号/工号/手机号"></el-input>
        <el-input class="pass" v-model="password" placeholder="请输入密码(8位数以上，首字母大写，且后面位数不能全为数字)" show-password></el-input>
        <el-row>
        <el-button type='primary' class="submit" @click="loginSubmit()">登录</el-button>
        </el-row>
        <div class="forget">
          <span class="forget-text">忘记密码?</span>
        </div>
      </div>  
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
      res:{
        code: 1
      }
    }
  },
  methods: {
    loginSubmit() {
      if(this.userName === '') {
        this.$message.error('请输入账号')
      }else if(this.password === '') {
        this.$message.error('请输入密码');
      }else if(!(/^1[3456789]\d{9}$/.test(this.userName)) && !(/^\d{4}$/.test(this.userName))) {
        this.$message.error('请输入手机号或4位数字账号');
      }else if(!(/(?=^[A-Z]\w*[a-zA-Z_]+\w*$).{8,}/.test(this.password)) ) {
        this.$message.error('请输入正确格式密码')
      }else if(this.res.code === 1) {
        this.$router.push({
          path:'/index'
        })
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  background: linear-gradient(180deg,#f8fafc,#eff4f8);
  justify-content: center;
  .top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 344px;
    background: url(../assets/top-image.png) 50% no-repeat;
    background-size: auto 100%;
  }
  .content {
    width: 680px;
    height: 500px;
    margin-top: 230px;
    z-index: 100;
    padding-top: 40px;
    border-radius: 4px;
    background-color: #fff;
    .header::after {
      display: inline-block;
      position: absolute;
      content: "";
      height: 45px;
      border-left: 1px solid #d8d8d8;
      left: 50%;
      top: 45px;
    }
    .header {
      width: 420px;
      position: relative;
      margin: 0 auto;
      padding: 50px 0;
      display: flex;
      .logo {
        width: 180px;
        height: 30px;
        margin-right: 20px;
      }
      .lms {
        display: flex;
        width: 50%;
        flex-direction: column;
        margin: 0 auto;
        padding-left: 50px;
        img {
          width: 120px;
          height: 40px;
        }
      }
    }
    .footer {
      width: 420px;
      margin: auto;
      .name {
        margin-bottom: 25px;
      }
      .pass {
        margin-bottom: 60px;
      }
      .submit {
        width: 420px;
        line-height: 30px;
        font-size: 20px;
      }
      .forget {
        width: 420px;
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        .forget-text {
          color: #3b80fc;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
