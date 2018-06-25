<template>
  <div :class="bindClass" >
    <slot/>
  </div>
</template>

<script>
import './caflex.css';

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
      const breakpoints = this.col.split(' ');
      let res = '';
      breakpoints.forEach((bp) => {
        res += `ca-flex__${bp} `;
      });
      const offsets = this.offset ? this.offset.split(' ') : [];
      offsets.forEach((os) => {
        res += `ca-flex__offset-${os} `;
      });
      return res;
    },
  },
};
</script>
