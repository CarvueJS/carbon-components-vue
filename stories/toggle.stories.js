import { storiesOf } from '@storybook/vue';

storiesOf('Toggle', module)
  .add('Default', () => ({
    template: `
    <ca-toggle left="kai" right="guan"></ca-toggle>
    `,
  })).add('with model', () => ({
    data: () => ({
      model: true,
    }),
    template: `
    <ca-tile>
      <ca-toggle left="off" right="on" v-model="model"></ca-toggle>
      model is {{model}}
    </ca-tile>
    `,
  }));
