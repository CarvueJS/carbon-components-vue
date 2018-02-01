<template>
  <div class="bx--form-item">
    <input class="bx--toggle" id="toggle1" type="checkbox">
    <label class="bx--toggle__label" for="toggle1">
      <span class="bx--toggle__text--left">{{this.left}}</span>
      <span class="bx--toggle__appearance"></span>
      <span class="bx--toggle__text--right">{{this.right}}</span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'ca-toggle',
    props: {
      left: {
        type: String,
        default: 'Off',
      },
      right: {
        type: String,
        default: 'On',
      },
    },
  };
</script>

<style></style>
