import { storiesOf } from '@storybook/vue';

storiesOf('OverflowMenu', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-overflow-menu>
      <ca-overflow-menu-option>
        option1
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        option2
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        option3
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        option4
      </ca-overflow-menu-option>
    </ca-overflow-menu>
    `,
  }));
