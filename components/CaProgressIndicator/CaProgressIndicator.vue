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
      value: {
        type: Number,
        default: 0
      }
    },
    updated() {
      this.progressIndicator.setCurrent(this.value);
    },
    mounted() {
     this.progressIndicator = ProgressIndicator.create(this.$el);
     this.progressIndicator.setCurrent(this.value);
    },
  };
</script>
