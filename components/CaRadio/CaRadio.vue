<template>
  <div class="bx--form-item">
    <div class="bx--radio-button-group">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ca-radio',
  mounted() {
    this.$on('itemChange', this.updateValue);
  },
};
</script>

<style></style>
