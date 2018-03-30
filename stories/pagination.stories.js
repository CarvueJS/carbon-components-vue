import { storiesOf } from '@storybook/vue';

storiesOf('Pagination', module)
  .add('Default', () => ({
    data: () => ({
      model: 3,
    }),
    template: `
    <ca-pagination v-model="model"></ca-pagination>
    `,
  }));
