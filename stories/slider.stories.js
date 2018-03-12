import { storiesOf } from '@storybook/vue';

storiesOf('Slider', module)
  .add('Default', () => ({
    template: `
    <ca-slider :step="2" :min="2" :max="102"></ca-slider>
    `,
  })).add('with model', () => ({
    data: () => ({
      model: 43,
    }),
    template: `
    <ca-tile>
      <ca-slider :step="2" :min="2" :max="102" v-model="model"></ca-slider>
      model is {{model}}
    </ca-tile>
    `,
  }));
