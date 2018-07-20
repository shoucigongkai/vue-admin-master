<template>
  <div class="bgImg">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码" @keyup.enter.native = "handleSubmit"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
        <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { requestLogin, menuList } from '../api/api';
  import { mapActions, mapGetters } from 'vuex'
  import MenuUtils from '../vuex/store';
  import Home from './Home.vue'
  // import Menu from '../menu.js'

  //import NProgress from 'nprogress'
  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '1234'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
        // menu: []
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit() {
        let _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            //_this.$router.replace('/table');
            this.logining = true;
            //NProgress.start();
            let loginParams = { loginName: this.ruleForm2.account, password: this.ruleForm2.checkPass };
            // let roles = sessionStorage.getItem('roles');
            // let menu =[]
            requestLogin(loginParams).then(date => {
              this.logining = false;
              let { data, message, success, token } = date;
              if (success === true) {
                  this.$store.commit('set_token',token);
                  sessionStorage.setItem('user', JSON.stringify(data.name));
                  // sessionStorage.setItem('roles', Number(data.roles));
                  sessionStorage.setItem('token', JSON.stringify(token));
                  menuList({roleIds: data.roles}).then(data =>{
                      sessionStorage.setItem('menus',JSON.stringify(data.data));
                      if (data.success === true) {
                        let menu = [];
                        data.data.forEach(function(currentValue, index, arr){
                          menu.push({
                            "component": Home,
                            "iconCls": currentValue.iconCls,
                            "id": currentValue.id,
                            "leaf": currentValue.leaf,
                            "name": currentValue.name,
                            "path": currentValue.path
                          })
                        });
                        // console.log(menu);
                        this.$router.addRoutes(menu.concat([{
                            path: '*',
                            hidden: true,
                            redirect: { path: '/404' }
                        }]));
                      }else {
                          this.$message({
                              message: message,
                              type: 'error'
                          });
                      }
                  });
                  this.$router.push(
                      {
                          path: '/'
                      }
                  );
              } else {
                  this.$message({
                      message: message,
                      type: 'error'
                  });
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }

</script>

<style lang="scss" scoped>
  .bgImg{
    padding: 1px 0;
    background: url("../assets/bg.png") 100%;
  }
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 155px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>