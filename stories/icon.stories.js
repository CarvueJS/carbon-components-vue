import { storiesOf } from '@storybook/vue';

storiesOf('Icon', module)
  .add('Default', () => ({
    template: `
    <ca-icon iconName="icon--add"></ca-icon>
    `,
  }));
