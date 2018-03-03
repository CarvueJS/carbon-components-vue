<template>
  <div data-numberinput class="bx--number">
    <input id="number-input" type="number" :min="min" :max="max" :value="value">
    <div class="bx--number__controls">
      <button class="bx--number__control-btn up-icon">
        <svg viewBox="0 2 10 5" width="10" height="5" fill-rule="evenodd">
          <path d="M10 5L5 0 0 5z"></path>
        </svg>
      </button>
      <button class="bx--number__control-btn down-icon">
        <svg viewBox="0 2 10 5" width="10" height="5" fill-rule="evenodd">
          <path d="M10 0L5 5 0 0z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  import { NumberInput } from 'carbon-components'

  export default {
    name: 'ca-number-input',
    data: () => ({
      numberInput: null,
    }),
    props: {
      value: null,
      max: {
        type: Number,
        default: 100,
      },
      min: {
        type: Number,
        default: 0,
      },
    },
    mounted () {
      this.numberInput = NumberInput.create(document.querySelector('[data-numberinput]'))
      this.numberInput.element.addEventListener('change', (e)=>{
        this.$emit('input', e.target.value)
      })
    }
  };
</script>
