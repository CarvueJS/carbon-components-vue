import { storiesOf } from '@storybook/vue';

storiesOf('Icon', module)
  .add('Default', () => ({
    template: `
    <ca-icon iconName="icon--add" description="add"></ca-icon>
    `,
  })).add('app-services', () => ({
    template: `
    <ca-icon iconName="icon--app-services" description="add"></ca-icon>
    `,
  }));
