<template>
  <div class="bx--form-item">
    <input id="text-input-1" type="text" class="bx--text-input" :placeholder="placeholder" :value="value" @change="change">
  </div>
</template>

<script>
export default {
  name: 'ca-text-input',
  props: {
    value: null,
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    change(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style></style>
