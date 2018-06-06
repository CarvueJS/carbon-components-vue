<template>
  <div :class="bindClass" >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ca-flex',
  props: {
    col: {
      type: String,
      default: 'x1',
    },
  },
  computed: {
    bindClass() {
      return `ca-flex__${this.col}`;
    },
  },
};
</script>

<style scoped>
.ca-flex__x1 {
  flex: 0 0 8.333333%;
}

.ca-flex__x2 {
  flex: 0 0 16.66667%;
}

.ca-flex__x3 {
  flex: 0 0 25%;
}

.ca-flex__x4 {
  flex: 0 0 33.333333%;
}

.ca-flex__x5 {
  flex: 0 0 41.66666%;
}

.ca-flex__x6 {
  flex: 0 0 50%;
}

.ca-flex__x7 {
  flex: 0 0 58.333333%;
}

.ca-flex__x8 {
  flex: 0 0 66.66667%;
}

.ca-flex__x9 {
  flex: 0 0 75%;
}

.ca-flex__x10 {
  flex: 0 0 83.333333%;
}

.ca-flex__x11 {
  flex: 0 0 91.66667%;
}

.ca-flex__x12 {
  flex: 0 0 100%;
}
</style>

