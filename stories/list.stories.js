import { storiesOf } from '@storybook/vue';

storiesOf('List', module)
  .add('Default', () => ({
    template: `
    <ca-list>
      <ca-list-item>
        Ordered List level 1
      </ca-list-item>
      <ca-list-item>
        Ordered List level 2
      </ca-list-item>
      <ca-list-item>
        Ordered List level 3
      </ca-list-item>
    </ca-list>
    `,
  }));
