<template>
  <div>
    <input :id="radioID" class="bx--radio-button" type="radio" :value="value" name="radio-button" :tabindex="tabIndex" :checked="checked" :disable="disable">
    <label :for="radioID" class="bx--radio-button__label">
      <span class="bx--radio-button__appearance"></span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'ca-radio-item',
    props: {
      checked: {
        type: Boolean,
        defalut: false,
      },
      disable: {
        type: Boolean,
        defalut: false,
      },
      value: {
        type: String,
        defalut: ''
      },
      tabIndex: {
        type: Number,
        defalut: 0,
      },
      radioID: {
        type: String,
        defalut: '',
      }
    },
  }
</script>

<style></style>
