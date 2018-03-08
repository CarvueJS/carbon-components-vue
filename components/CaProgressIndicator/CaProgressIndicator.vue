<template>
  <ul data-progress data-progress-current class="bx--progress">
    <slot></slot>
  </ul>
</template>

<script>
  import { ProgressIndicator } from 'carbon-components';

  export default {
    name: 'ca-progress-indicator',
    data: () => ({
      progressIndicator: null
    }),
    props: {
      value: 1
    },
    updated() {
      this.progressIndicator.setCurrent(this.value);
    },
    mounted() {
    // TODO: should improve
    //  this.progressIndicator = ProgressIndicator.create(this.$el);
    //  progressIndicator.setCurrent(this.value);
    },
  };
</script>
