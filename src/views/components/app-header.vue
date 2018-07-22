<template>
  <el-header>
    <div class="el-header__container container">
      <div class="el-header__left">
        <img class="el-header__logo" src="@/assets/logo.png">
      </div>
      <div class="el-header__right">
      </div>
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
  position: relative;
  z-index: 10;
  border-bottom: 1px solid $gray;
  box-shadow: $shadow-simple;
  background: $white;

  &__container {
    display: flex;
    height: 100%;
  }

  &__left {
    flex: 1;
    text-align: left;
    height: inherit;
  }

  &__right {
    flex: 1;
    text-align: right;
    height: inherit;
  }

  &__logo {
    margin-top: 4px;
  }
  
  .el-button {
    margin-top: 10px;

    + .el-button {
      margin-left: 32px;
    }
  }
}
</style>