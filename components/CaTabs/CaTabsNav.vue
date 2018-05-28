<template>
  <li class="bx--tabs__nav-item" :class="dynamicClass" :data-target="tabID" role="presentation">
    <a class="bx--tabs__nav-link" href="javascript:void(0)" role="tab" :aria-controls="controls" :aria-selected="selected">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'ca-tabs-nav',
  props: {
    controls: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
    },
    tabID: {
      type: String,
      default: '',
    },
  },
  computed: {
    dynamicClass() {
      return {
        'bx--tabs__nav-item--selected': this.selected,
      };
    },
  },
};
</script>

<style>

</style>
