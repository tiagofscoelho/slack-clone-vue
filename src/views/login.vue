<template>
  <div class="login">
    <el-form 
      :model="loginForm" 
      :rules="rules" 
      ref="loginForm" 
      label-position="top"
      class="login__form">

      <h4 class="text-center">
        Welcome back! 
      </h4>

      <el-form-item 
        label="Email" 
        prop="email">
        <el-input v-model="loginForm.email"/>
      </el-form-item>
      <el-form-item 
        label="Password" 
        prop="password">
        <el-input 
          v-model="loginForm.password"
          type="password"/>
      </el-form-item>
      <el-form-item>
        <el-button 
          type="text"
          @click="$router.push({ name: 'register' })">
          Register
        </el-button>
        <el-button 
          type="primary" 
          @click="submitForm('loginForm')">
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ElForm } from 'element-ui/types/form'

@Component
export default class AppHeader extends Vue {
  private loginForm = {
    email: '',
    password: ''
  }

  private rules = {
    email: [
      { required: true, message: 'Email is required.', trigger: 'blur' }
    ],
    password: [
      { required: true, message: 'Password is required.', trigger: 'blur' }
    ]
  }

  private submitForm() {
    (this.$refs.loginForm as ElForm).validate((valid: boolean) => {
      if (valid) {
        // TODO: action to login
      }
    })
  }
}
</script>

<style lang="scss">
.login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__form {
    padding: 40px 40px 20px;
    margin: 0 auto;
    flex: 0 0 480px;
    box-shadow: $shadow-simple;
    background: $white;
    border-radius: 4px;

    h4 {
      margin-bottom: 16px;
    }
  }

  .el-form-item__content {
    text-align: right;

    .el-button + .el-button {
      margin-left: 20px;
    }
  }
}
</style>