<template>
  <div class="app_container" style="text-align: center;background-color: #fefefe;height: 100%">
    <img src="../../assets/dengluing.gif">
    <div>
      <span style="font-size: 30px;font-weight: bold;color: #5ec7e2">正在登录...</span>
    </div>
  </div>
<!--  <div class="login-container">-->
<!--&lt;!&ndash;    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="title-container">&ndash;&gt;-->
<!--&lt;!&ndash;        <h3 class="title">&ndash;&gt;-->
<!--&lt;!&ndash;          {{ $t('login.title') }}&ndash;&gt;-->
<!--&lt;!&ndash;        </h3>&ndash;&gt;-->
<!--&lt;!&ndash;        <lang-select class="set-language" />&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->

<!--&lt;!&ndash;      <el-form-item prop="username">&ndash;&gt;-->
<!--&lt;!&ndash;        <span class="svg-container">&ndash;&gt;-->
<!--&lt;!&ndash;          <svg-icon icon-class="user" />&ndash;&gt;-->
<!--&lt;!&ndash;        </span>&ndash;&gt;-->
<!--&lt;!&ndash;        <el-input&ndash;&gt;-->
<!--&lt;!&ndash;          ref="username"&ndash;&gt;-->
<!--&lt;!&ndash;          v-model="loginForm.username"&ndash;&gt;-->
<!--&lt;!&ndash;          :placeholder="$t('login.username')"&ndash;&gt;-->
<!--&lt;!&ndash;          name="username"&ndash;&gt;-->
<!--&lt;!&ndash;          type="text"&ndash;&gt;-->
<!--&lt;!&ndash;          auto-complete="on"&ndash;&gt;-->
<!--&lt;!&ndash;        />&ndash;&gt;-->
<!--&lt;!&ndash;      </el-form-item>&ndash;&gt;-->

<!--&lt;!&ndash;      <el-form-item prop="password">&ndash;&gt;-->
<!--&lt;!&ndash;        <span class="svg-container">&ndash;&gt;-->
<!--&lt;!&ndash;          <svg-icon icon-class="password" />&ndash;&gt;-->
<!--&lt;!&ndash;        </span>&ndash;&gt;-->
<!--&lt;!&ndash;        <el-input&ndash;&gt;-->
<!--&lt;!&ndash;          ref="password"&ndash;&gt;-->
<!--&lt;!&ndash;          v-model="loginForm.password"&ndash;&gt;-->
<!--&lt;!&ndash;          :type="passwordType"&ndash;&gt;-->
<!--&lt;!&ndash;          :placeholder="$t('login.password')"&ndash;&gt;-->
<!--&lt;!&ndash;          name="password"&ndash;&gt;-->
<!--&lt;!&ndash;          auto-complete="on"&ndash;&gt;-->
<!--&lt;!&ndash;          @keyup.enter.native="handleLogin"&ndash;&gt;-->
<!--&lt;!&ndash;        />&ndash;&gt;-->
<!--&lt;!&ndash;        <span class="show-pwd" @click="showPwd">&ndash;&gt;-->
<!--&lt;!&ndash;          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />&ndash;&gt;-->
<!--&lt;!&ndash;        </span>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-form-item>&ndash;&gt;-->

<!--&lt;!&ndash;      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">&ndash;&gt;-->
<!--&lt;!&ndash;        {{ $t('login.logIn') }}&ndash;&gt;-->
<!--&lt;!&ndash;      </el-button>&ndash;&gt;-->

<!--&lt;!&ndash;      <div style="position:relative">&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="tips">&ndash;&gt;-->
<!--&lt;!&ndash;          <span>{{ $t('login.username') }} : admin</span>&ndash;&gt;-->
<!--&lt;!&ndash;          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="tips">&ndash;&gt;-->
<!--&lt;!&ndash;          <span style="margin-right:18px;">&ndash;&gt;-->
<!--&lt;!&ndash;            {{ $t('login.username') }} : editor&ndash;&gt;-->
<!--&lt;!&ndash;          </span>&ndash;&gt;-->
<!--&lt;!&ndash;          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->

<!--&lt;!&ndash;        <el-button class="thirdparty-button" type="primary" @click="showDialog=true">&ndash;&gt;-->
<!--&lt;!&ndash;          {{ $t('login.thirdparty') }}&ndash;&gt;-->
<!--&lt;!&ndash;        </el-button>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </el-form>&ndash;&gt;-->

<!--&lt;!&ndash;    <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog">&ndash;&gt;-->
<!--&lt;!&ndash;      {{ $t('login.thirdpartyTips') }}&ndash;&gt;-->
<!--&lt;!&ndash;      <br>&ndash;&gt;-->
<!--&lt;!&ndash;      <br>&ndash;&gt;-->
<!--&lt;!&ndash;      <br>&ndash;&gt;-->
<!--&lt;!&ndash;      <social-sign />&ndash;&gt;-->
<!--&lt;!&ndash;    </el-dialog>&ndash;&gt;-->
<!--  </div>-->
</template>

<script>
import { validUsername } from '@/utils/validate'
// import LangSelect from '@/components/LangSelect'
// import SocialSign from './socialsignin'

export default {
  name: 'Login',
  // components: { LangSelect, SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
    setTimeout(() => {
      this.earlyLogin()
    }, 2000)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  },
  methods: {
    earlyLogin: function() {
      console.log('开始自动登录')
      this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
        this.loading = false
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        // this.$router.push({ path: this.redirect || '/' })
        this.$router.push({ path: '/' })
      }
      ).catch((msg) => {
        this.$message.error(msg)
        this.loading = false
      })
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1)
      // const hashObj = getQueryObject(hash)
      // const originUrl = window.location.origin
      // history.replaceState({}, '', originUrl)
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // }
      // const codeName = hashObj[codeMap[this.auth_type]]
      // if (!codeName) {
      //   alert('第三方登录失败')
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' })
      //   })
      // }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 3px;
      font-size:18px;
      right: 0px;
      cursor: pointer;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
}
</style>
