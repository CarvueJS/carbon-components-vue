import { storiesOf } from '@storybook/vue';

storiesOf('Link', module)
  .add('Default', () => ({
    template: `
    <ca-link>Link</ca-link>
    `,
  }));
