<template>
  <div class="ca-layout" :class="bindClass">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ca-layout',
  props: {
    wrap: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    bindClass() {
      return this.wrap ? 'ca-layout__wrap' : '';
    },
  },
};
</script>

<style>
.ca-layout {
  display: flex;
}

.ca-layout__wrap {
  flex-wrap: wrap;
}
</style>
