<template>
  <option class="bx--select-option" value="20" :selected="selected"><slot></slot></option>
</template>

<script>
export default {
  name: 'ca-pagination-item',
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
