<template>
  <button data-button type="button">Primary button</button>
</template>

<script>
  import { FabButton } from 'carbon-components';

  const initModifiers = ['bx--btn'];
  const initMixins = [];

  export default {
    name: 'ca-button',
    props: {
      primary: {
        type: Boolean,
        default: false
      },
      secondary: {
        type: Boolean,
        default: false
      },
      danger: {
        type: Boolean,
        default: false
      },
      sm: {
        type: Boolean,
        default: false
      },
    },
    data () {
      return {
        modifiers: initModifiers,
        mixins: initMixins
      }
    },
    mounted () {
      if (this.primary) this.modifiers.push('bx--btn--primary');
      if (this.secondary) this.modifiers.push('bx--btn--secondary');
      if (this.danger) this.modifiers.push('bx--btn--danger');
      if (this.sm) this.modifiers.push('bx--btn--sm');
      const raw = document.querySelector('[data-button]');
      raw.className = this.modifiers.join(' ');
      const button = FabButton.create(document.querySelector('[data-button]'));
    }
  }
</script>

<style></style>
