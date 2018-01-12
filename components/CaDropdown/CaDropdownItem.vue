<template>
  <li data-option :data-value="value" class="bx--dropdown-item">
    <a class="bx--dropdown-link" href="javascript:void(0)">
      <slot></slot>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'ca-dropdown-item',
    props: {
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>
