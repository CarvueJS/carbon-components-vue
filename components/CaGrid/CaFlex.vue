<template>
  <div :class="bindClass" >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ca-flex',
  props: {
    // TODO: the validation of props should be stronger
    col: {
      type: String,
      default: null,
    },
    offset: {
      type: String,
      default: null,
    },
  },
  computed: {
    bindClass() {
      return `${this.col != null ? `ca-flex__${this.col}` : ''} ${this.offset != null ? `ca-flex__offset-${this.offset}` : ''}`;
    },
  },
};
</script>

<style scoped>
.ca-flex__offset-x1 {
  margin-left: 8.333333%;
}

.ca-flex__offset-x2 {
  margin-left: 16.66667%;
}

.ca-flex__offset-x3 {
  margin-left: 25%;
}

.ca-flex__offset-x4 {
  margin-left: 33.333333%;
}

.ca-flex__offset-x5 {
  margin-left: 41.66666%;
}

.ca-flex__offset-x6 {
  margin-left: 50%;
}

.ca-flex__offset-x7 {
  margin-left: 58.333333%;
}

.ca-flex__offset-x8 {
  margin-left: 66.66667%;
}

.ca-flex__offset-x9 {
  margin-left: 75%;
}

.ca-flex__offset-x10 {
  margin-left: 83.333333%;
}

.ca-flex__offset-x11 {
  margin-left: 91.66667%;
}

.ca-flex__offset-x12 {
  margin-left: 100%;
}

.ca-flex__x1 {
  flex: 0 0 8.33333333%;
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

