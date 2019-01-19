<template>
  <div
    v-if="clickHandler"
    @click="clickHandler"
    data-tile="clickable"
    class="bx--tile bx--tile--clickable"
  >
    <slot></slot>
  </div>
  <div v-else data-tile="clickable" class="bx--tile">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ca-tile',
  props: {
    clickHandler: {
      type: Function,
      default: null,
    },
  },
};
</script>

<style></style>
