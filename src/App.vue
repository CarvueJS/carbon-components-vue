<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div data-loading=""></div>
    <router-view/>
  </div>
</template>

<script>
import { Loading } from 'carbon-components';

export default {
  name: 'app',
  mounted() {
    Loading.create(window.document.querySelector('[data-loading]'));
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
