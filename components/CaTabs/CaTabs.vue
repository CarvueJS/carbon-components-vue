<template>
  <div>
    <nav data-tabs class="bx--tabs" role="navigation">
      <div class="bx--tabs-trigger" tabindex="0">
        <a href="javascript:void(0)" class="bx--tabs-trigger-text" tabindex="-1"></a>
        <svg width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
          <path d="M10 0L5 5 0 0z"></path>
        </svg>
      </div>
      <ul class="bx--tabs__nav bx--tabs__nav--hidden" role="tablist">
        <slot name="nav"></slot>
      </ul>
    </nav>
    <div style="padding: 1rem;">
      <slot name="panel"></slot>
    </div>
  </div>
</template>

<script>
  import { Tab } from 'carbon-components';

  export default {
    name: 'ca-tabs',
    mounted() {
      this.tabs = Tab.create(document.querySelector('[data-tabs]'));
    },
    data() {
      return {
        tabs: null,
      };
    },
  };
</script>

<style></style>
