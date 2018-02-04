import { storiesOf } from '@storybook/vue';

storiesOf('Link', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-link>Link</ca-link>
    `,
  }));
