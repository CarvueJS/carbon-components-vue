<template>
  <div class="bx--form-item">
    <input class="bx--toggle" id="toggle1" type="checkbox" @change="change">
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
    value: null,
    left: {
      type: String,
      default: 'Off',
    },
    right: {
      type: String,
      default: 'On',
    },
  },
  methods: {
    change(e) {
      this.$emit('input', e.target.checked);
    },
  },
};
</script>

<style></style>
