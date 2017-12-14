<template>
  <div id="app">
    <ca-button primary></ca-button>
    <ca-pagination></ca-pagination>
    <ca-accordion>
      <ca-accordion-item></ca-accordion-item>
    </ca-accordion>
    <ca-checkbox></ca-checkbox>
    <ca-dropdown></ca-dropdown>
    <ca-radio></ca-radio>
    <ca-breadcrumb>
      <ca-breadcrumb-item>1</ca-breadcrumb-item>
      <ca-breadcrumb-item>2</ca-breadcrumb-item>
      <ca-breadcrumb-item>3</ca-breadcrumb-item>
    </ca-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'app',
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
