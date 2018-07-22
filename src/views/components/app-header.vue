<template>
  <el-header>
    <div class="el-header__left">
      <img class="el-header__logo" src="@/assets/logo.png">
    </div>
    <div class="el-header__right">
      <el-button type="text">
        Login
      </el-button>
      <el-button type="primary">
        Register
      </el-button>
    </div>
  </el-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppHeader extends Vue {}
</script>

<style lang="scss">

.el-header {
  display: flex;
  border-bottom: 1px solid #eee;

  &__left {
    flex: 1;
    text-align: left;
  }

  &__right {
    flex: 1;
    text-align: right;
  }
}
</style>