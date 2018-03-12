import { storiesOf } from '@storybook/vue';

storiesOf('Slider', module)
  .addWithJSX('Default', () => ({
    template: `
    <ca-slider :step="2" :min="2" :max="102"></ca-slider>
    `,
  })).addWithJSX('with model', () => ({
    data: () => ({
      model: 43,
    }),
    template: `
    <div>
      <ca-slider :step="2" :min="2" :max="102" v-model="model"></ca-slider>
      model is {{model}}
    </div>
    `,
  }));
