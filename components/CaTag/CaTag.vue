<template>
  <span data-tag>
    <slot></slot>
  </span>
</template>

<script>
  const initModifier = ['bx--tag'];

  export default {
    name: 'ca-tag',
    data() {
      return {
        modifier: initModifier,
      };
    },
    props: {
      ibm: {
        type: Boolean,
        default: false,
      },
      beta: {
        type: Boolean,
        default: false,
      },
      thirdParty: {
        type: Boolean,
        default: false,
      },
      local: {
        type: Boolean,
        default: false,
      },
      dedicated: {
        type: Boolean,
        default: false,
      },
      custom: {
        type: Boolean,
        default: false,
      },
      experimental: {
        type: Boolean,
        default: false,
      },
      commumity: {
        type: Boolean,
        default: false,
      },
      private: {
        type: Boolean,
        default: false,
      },
    },
    mounted() {
      if (this.ibm) this.modifier.push('bx--tag--ibm');
      if (this.beta) this.modifier.push('bx--tag--beta');
      if (this.thirdParty) this.modifier.push('bx--tag--third-party');
      if (this.local) this.modifier.push('bx--tag--local');
      if (this.dedicated) this.modifier.push('bx--tag--dedicated');
      if (this.custom) this.modifier.push('bx--tag--custom');
      if (this.experimental) this.modifier.push('bx--tag--experimental');
      if (this.commumity) this.modifier.push('bx--tag--commumity');
      if (this.private) this.modifier.push('bx--tag--private');
      this.$el.className = this.modifier.join(' ');
    },
  };
</script>

<style></style>
