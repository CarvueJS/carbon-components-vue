<template>
  <ul data-accordion class="bx--accordion">
    <slot></slot>
  </ul>
</template>

<script>
  import { Accordion } from 'carbon-components'

  export default {
    name: 'ca-accordion',
    mounted() {
      Accordion.create(document.querySelector('[data-accordion]'));
    }
  }
</script>

<style></style>
