<template>
  <div data-overflow-menu tabindex="0" aria-label="Overflow menu description" class="bx--overflow-menu" >
    <svg class="bx--overflow-menu__icon" width="4" height="20" viewBox="0 0 4 20" fill-rule="evenodd">
      <circle cx="2" cy="2" r="2"></circle>
      <circle cx="2" cy="10" r="2"></circle>
      <circle cx="2" cy="18" r="2"></circle>
    </svg>
    <ul class="bx--overflow-menu-options" tabindex="-1">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { OverflowMenu } from 'carbon-components';

export default {
  name: 'ca-overflow-menu',
  data: () => ({
    overflowMenuInstance: null,
  }),
  mounted() {
    this.overflowMenuInstance = OverflowMenu.create(this.$el);
  },
};
</script>

<style scoped>
.bx--overflow-menu-options:focus {
  outline: none;
}
</style>
