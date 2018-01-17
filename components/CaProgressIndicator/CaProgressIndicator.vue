<template>
  <ul data-progress data-progress-current class="bx--progress">
    <slot></slot>
  </ul>
</template>

<script>
  import { ProgressIndicator } from 'carbon-components';

  export default {
    name: 'ca-progress-indicator',
    mounted() {
//      const pi = ProgressIndicator.create(document.querySelector('[data-progress]'));
//      pi.setCurrent(2);
    }
  }
</script>
