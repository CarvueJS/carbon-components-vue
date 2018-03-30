<template>
  <table class="bx--data-table-v2 bx--data-table-v2--zebra">
    <slot></slot>
  </table>
</template>

<script>
  export default {
    name: 'ca-data-table',
    props: {
      rows: {
        type: Array,
        default: () => []
      },
      headers: {
        type: Array,
        default: () => []
      }
    },
    
  };
</script>
