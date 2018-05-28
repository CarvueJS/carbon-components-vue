<template>
  <ul data-accordion class="bx--accordion">
    <slot></slot>
  </ul>
</template>

<script>
import { Accordion } from 'carbon-components';

export default {
  name: 'ca-accordion',
  mounted() {
    Accordion.create(this.$el);
  },
};
</script>

<style></style>
