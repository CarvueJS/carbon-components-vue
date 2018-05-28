<template>
  <div data-numberinput class="bx--number">
    <input id="number-input" type="number" :min="min" :max="max" :value="value" :disabled="disabled" step="10">
    <div class="bx--number__controls">
      <button class="bx--number__control-btn up-icon" @click.prevent="handleClick('up')">
        <svg viewBox="0 2 10 5" width="10" height="5" fill-rule="evenodd">
          <path d="M10 5L5 0 0 5z"></path>
        </svg>
      </button>
      <button class="bx--number__control-btn down-icon" @click.prevent="handleClick('down')">
        <svg viewBox="0 2 10 5" width="10" height="5" fill-rule="evenodd">
          <path d="M10 0L5 5 0 0z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { NumberInput } from 'carbon-components';

export default {
  name: 'ca-number-input',
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
    disabled: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    invalidText: {
      type: String,
      default: 'Provide invalidText',
    },
  },
  data: () => ({
    numberInput: null,
  }),
  mounted() {
    this.numberInput = NumberInput.create(this.$el);
    this.numberInput.element.addEventListener('change', (e) => {
      // this.$emit('input', e.target.value)
    });
  },
  methods: {
    handleClick(type) {
      if (type === 'up') {
        this.$emit('input', this.value + this.step);
      } else {
        this.$emit('input', this.value - this.step);
      }
    },
  },
};
</script>
