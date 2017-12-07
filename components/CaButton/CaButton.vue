<template>
  <button data-button class="bx--btn bx--btn--primary" type="button">Primary button</button>
</template>

<script>
  import { FabButton } from 'carbon-components';

  export default {
    name: 'ca-button',
    mounted () {
      const button = FabButton.create(document.querySelector('[data-button]'));
    }
  }
</script>

<style></style>
