import { storiesOf } from '@storybook/vue';

storiesOf('OverflowMenu', module)
  .add('Default', () => ({
    methods: {
      onClick() {
        console.log('onClick');
      },
    },
    template: `
    <ca-overflow-menu>
      <ca-overflow-menu-option :onClick="onClick">
        Option 1
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        Option 2
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        Option 3
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        Option 4
      </ca-overflow-menu-option>
    </ca-overflow-menu>
    `,
  }));
