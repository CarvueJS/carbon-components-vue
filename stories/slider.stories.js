import { storiesOf } from '@storybook/vue';

storiesOf('Slider', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-slider :step="2" :min="2" :max="102" :value="41"></ca-slider>
    `,
  }));
