<template>
  <li data-progress-step class="bx--progress-step" :class="modifiers">
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12"></circle>
      <polygon points="10.3 13.6 7.7 11 6.3 12.4 10.3 16.4 17.8 9 16.4 7.6"></polygon>
    </svg>
    <p class="bx--progress-label">
      <slot></slot>
    </p>
    <span class="bx--progress-line"></span>
  </li>
</template>

<script>

  const initModifer = {
    'bx--progress-step--complete': false,
    'bx--progress-step--incomplete': true,
    'bx--progress-step--current': false,
  };

  export default {
    name: 'ca-progress-indicator-step',
    props: {
      isCompleted: {
        type: Boolean,
        defalut: false,
      },
      isInComplete: {
        type: Boolean,
        defalut: true,
      },
      isCurrent: {
        type: Boolean,
        defalut: false,
      },
    },
    data() {
      return {
        modifers: initModifer,
      };
    },
    computed: {
      modifiers() {
        return {
          'bx--progress-step--complete': this.isCompleted,
          'bx--progress-step--incomplete': this.isInComplete,
          'bx--progress-step--current': this.isCurrent,
        };
      },
    },
  };
</script>

<style></style>
