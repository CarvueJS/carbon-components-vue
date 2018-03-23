import { storiesOf } from '@storybook/vue';

storiesOf('Notification/toast', module)
  .add('info', () => ({
    template: `
    <ca-notification-toast
      title="this is title"
      subtitle="this is subtitle"
      caption="this is caption"
      info
    >
    </ca-notification-toast>
    `,
  })).add('error', () => ({
    template: `
    <ca-notification-toast
      title="this is title"
      subtitle="this is subtitle"
      caption="this is caption"
      error
    >
    </ca-notification-toast>
    `,
  })).add('success', () => ({
    template: `
    <ca-notification-toast
      title="this is title"
      subtitle="this is subtitle"
      caption="this is caption"
      success
    >
    </ca-notification-toast>
    `,
  }))
  .add('warning', () => ({
    template: `
    <ca-notification-toast
      title="this is title"
      subtitle="this is subtitle"
      caption="this is caption"
      warning
    >
    </ca-notification-toast>
    `,
  }));
