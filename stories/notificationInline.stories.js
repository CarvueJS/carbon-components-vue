import { storiesOf } from '@storybook/vue';

storiesOf('Notification/inline', module)
  .add('Default', () => ({
    template: `
    <ca-notification-inline
      title="this is title"
      subtitle="this is subtitle"
      info
    >
    </ca-notification-inline>
    `,
  }));
