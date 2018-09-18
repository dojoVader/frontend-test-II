<template>

  <div id="app">
    <link href="https://unpkg.com/ionicons@4.4.2/dist/css/ionicons.min.css" rel="stylesheet">
    <ChatApp msg="Welcome to Your Vue.js + TypeScript App"/>
  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChatApp from "./components/ChatApp.vue";

@Component({
  components: {
    ChatApp
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
.clearfix {
  clear: both;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

  width: 400px;
  margin: 0px auto;
  background: white;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}
body {
  background: black;
  margin: 0 auto;
}
body,
html {
  height: 100%;
  min-height: auto;
}
</style>
