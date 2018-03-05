<template>
  <div>
    <input :id="radioID" class="bx--radio-button" v-model="dynamicModel" type="radio" :value="value" name="radio-button" :tabindex="tabIndex" :checked="checked" :disable="disable">
    <label :for="radioID" class="bx--radio-button__label">
      <span class="bx--radio-button__appearance"></span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'ca-radio-item',
    model: {
      prop: 'inputValue',
      event: 'check'
    },
    props: {
      inputValue: null,
      checked: {
        type: Boolean,
        defalut: false,
      },
      disable: {
        type: Boolean,
        defalut: false,
      },
      value: null,
      tabIndex: {
        type: Number,
        defalut: 0,
      },
      radioID: {
        type: String,
        defalut: '',
      },
    },
    computed: {
      dynamicModel: {
        get () {
          return this.inputValue
        },
        set (newVal) {
          this.$emit('check', newVal)
        }
      }
    }
  };
</script>

<style></style>
