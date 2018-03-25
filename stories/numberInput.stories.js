import { storiesOf } from '@storybook/vue';

storiesOf('NumberInput', module)
  .add('Default', () => ({
    template: `
    <ca-number-input :max="200" :min="100"></ca-number-input>
    `,
  })).add('with model', () => ({
    data: () => ({
      model: 3,
    }),
    template: `
    <ca-tile>
      <ca-number-input :max="200" :min="100" v-model="model"></ca-number-input>
      {{model}}
    </ca-tile>
    `,
  })).add('disabled', () => ({
    template: `
    <ca-number-input :max="200" :min="100" disabled></ca-number-input>
    `,
  }))
  .add('step', () => ({
    data: () => ({
      model: 6,
    }),
    template: `
    <ca-number-input :max="200" :min="100" v-model="model" :step="3"></ca-number-input>
    `,
  }));
