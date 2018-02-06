import { storiesOf } from '@storybook/vue';

storiesOf('Toggle', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-toggle left="kai" right="guan"></ca-toggle>
    `,
  }));
