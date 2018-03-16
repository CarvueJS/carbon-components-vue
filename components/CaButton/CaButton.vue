<template>
  <button data-button type="button" class="bx--btn" :class="dynamicClass" :disabled="disabled">
    <slot></slot>
    <ca-icon v-if=" icon !=='' " :iconName="icon" className="bx--btn__icon"></ca-icon>
  </button>
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
        default: false,
      },
      secondary: {
        type: Boolean,
        default: false,
      },
      danger: {
        type: Boolean,
        default: false,
      },
      sm: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: ''
      }
    },
    computed: {
      dynamicClass () {
        return {
          'bx--btn--primary': this.primary,
          'bx--btn--secondary': this.secondary,
          'bx--btn--danger': this.danger,
          'bx--btn--sm': this.sm
        }
      }
    },
    data() {
      return {
        modifiers: initModifiers,
        mixins: initMixins,
      };
    },
    mounted() {
//      if (this.primary) this.modifiers.push('bx--btn--primary');
//      if (this.secondary) this.modifiers.push('bx--btn--secondary');
//      if (this.danger) this.modifiers.push('bx--btn--danger');
//      if (this.sm) this.modifiers.push('bx--btn--sm');
//      const raw = document.querySelector('[data-button]');
//      raw.className = this.modifiers.join(' ');
//      const button = FabButton.create(document.querySelector('[data-button]'));
    },
  };
</script>

<style></style>
