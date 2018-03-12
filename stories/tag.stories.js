import { storiesOf } from '@storybook/vue';

storiesOf('Tag', module)
  .add('Default', () => ({
    template: `
    <ca-tag ibm>IBM</ca-tag>
    `,
  }));
