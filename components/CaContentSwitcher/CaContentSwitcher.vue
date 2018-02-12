<template>
  <div data-content-switcher class="bx--content-switcher">
    <slot></slot>
  </div>
</template>

<script>
  import { ContentSwitcher } from "carbon-components"

  export default {
    name: 'ca-content-switcher',
    mounted() {
      const switcher = document.querySelector('[data-content-switcher]');
      // TODO: improve for SSR
      switcher.addEventListener('content-switcher-selected', (e)=>{
        this.$emit('selected', e.detail.item.getAttribute('switchvalue'))
      });
    }
  };
</script>

<style></style>
