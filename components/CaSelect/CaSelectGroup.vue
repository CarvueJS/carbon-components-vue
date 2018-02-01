<template>
  <optgroup class="bx--select-optgroup" :label="label">
    <slot></slot>
  </optgroup>
</template>

<script>
  export default {
    name: 'ca-select-group',
    props: {
      label: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style></style>
