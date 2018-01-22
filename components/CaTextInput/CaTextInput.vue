<template>
  <div class="bx--form-item">
    <input id="text-input-1" type="text" class="bx--text-input" :placeholder="placeholder">
  </div>
</template>

<script>
  export default {
    name: 'ca-text-input',
    props: {
      placeholder: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style></style>
