import { storiesOf } from '@storybook/vue';

storiesOf('TextInput', module)
  .add('Default', () => ({
    template: `
    <ca-text-input placeholder="holder"></ca-text-input>
    `,
  })).add('with model', () => ({
    data: () => ({
      model: 'text test',
    }),
    template: `
    <ca-tile>
      <ca-text-input placeholder="holder" v-model="model"></ca-text-input>
      model is {{model}}
    </ca-tile>
    `,
  }));
