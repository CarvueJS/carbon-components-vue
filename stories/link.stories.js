import { storiesOf } from '@storybook/vue';

storiesOf('Link', module)
  .addWithJSX('Default', () => ({
    template: `
    <ca-link>Link</ca-link>
    `,
  }));
