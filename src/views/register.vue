<template>
  <div class="register">
    <el-form 
      :model="registerForm" 
      :rules="rules" 
      ref="registerForm" 
      label-position="top"
      class="register__form">

      <h4 class="text-center">
        Register a new account
      </h4>

      <el-form-item 
        label="Name" 
        prop="name">
        <el-input v-model="registerForm.name"/>
      </el-form-item>
      <el-form-item 
        label="Email" 
        prop="email">
        <el-input v-model="registerForm.email"/>
      </el-form-item>
      <el-form-item 
        label="Password" 
        prop="password">
        <el-input v-model="registerForm.password"/>
      </el-form-item>
      <el-form-item>
        <el-button 
          type="text"
          @click="$router.push({ name: 'login' })">
          Login
        </el-button>
        <el-button 
          type="primary" 
          @click="submitForm('registerForm')">
          Register
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ElForm } from 'element-ui/types/form';

@Component
export default class AppHeader extends Vue {
  registerForm = {
    name: '',
    email: '',
    password: ''
  }

  rules = {
    name: [
      { required: true, message: 'Name is required.', trigger: 'blur' }
    ],
    email: [
      { required: true, message: 'Email is required.', trigger: 'blur' }
    ],
    password: [
      { required: true, message: 'Password is required.', trigger: 'blur' }
    ]
  }

  submitForm() {
    (this.$refs.registerForm as ElForm).validate((valid: boolean) => {
      if (valid) {
        // TODO: action to register
      }
    })
  }
}
</script>

<style lang="scss">
.register {
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

  .el-form-item__content{
    text-align: right;

    .el-button + .el-button {
      margin-left: 20px;
    }
  }
}
</style>