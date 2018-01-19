<template>
  <div class="bx--slider-test">
    <div class="bx--slider-container">
      <span class="bx--slider__range-label">0</span>
      <div class="bx--slider" data-slider data-slider-input-box="#slider-input-box">
        <div class="bx--slider__track"></div>
        <div class="bx--slider__filled-track"></div>
        <div class="bx--slider__thumb" tabindex="0"></div>
        <input id="slider" class="bx--slider__input" type="range" :step="step" :min="min" :max="max" :value="value">
      </div>
      <span class="bx--slider__range-label">100</span>
      <input id="slider-input-box" type="number" class="bx--text-input bx--slider-text-input" placeholder="0">
    </div>
  </div>
</template>

<script>
  import { Slider } from "carbon-components";

  export default {
    name: 'ca-slider',
    data() {
      return {
        slider: null
      }
    },
    props: {
      step: {
        type: Number,
        default: 1
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      value: {
        type: Number,
        default: 50
      },
    },
    mounted() {
      this.slider = Slider.create(document.querySelector('[data-slider]'));
    }
  }
</script>
