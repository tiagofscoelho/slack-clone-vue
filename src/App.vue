<template>
  <div id="app">
    <app-header/>
    <div class="app-content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppHeader from '@/views/components/app-header.vue'

@Component({
  components: {
    AppHeader
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;

  .app-content {
    height: calc(100% - 60px);
    background-color: $light-gray;
  }
}
</style>
