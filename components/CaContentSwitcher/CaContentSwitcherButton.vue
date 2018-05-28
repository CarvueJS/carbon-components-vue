<template>
  <button class="bx--content-switcher-btn" data-target=".demo--panel--opt-2" :class="dynamicClass" :switchValue="switchValue">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ca-content-switcher-button',
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    switchValue: {
      type: String,
      default: '',
    },
  },
  computed: {
    dynamicClass() {
      return {
        'bx--content-switcher--selected': this.selected,
      };
    },
  },
};
</script>

<style></style>
