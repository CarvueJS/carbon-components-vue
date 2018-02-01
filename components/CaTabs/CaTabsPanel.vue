<template>
  <div :id="PanelID" :class="tabID" role="tabpanel" :aria-labelledby="labelledby" :aria-hidden="ariaHidden" :hidden="hidden">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ca-tabs-panel',
    props: {
      PanelID: {
        type: String,
        default: '',
      },
      labelledby: {
        type: String,
        default: '',
      },
      hidden: {
        type: Boolean,
        default: true,
      },
      ariaHidden: {
        type: Boolean,
        default: true,
      },
      tabID: {
        type: String,
        default: '',
      },
    },
  };
</script>


