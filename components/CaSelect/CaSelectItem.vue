<template>
  <option class="bx--select-option" :value="value">
    <slot></slot>
  </option>
</template>

<script>
  export default {
    name: 'ca-select-item',
    props: {
      value: null,
    },
  };
</script>

<style></style>
