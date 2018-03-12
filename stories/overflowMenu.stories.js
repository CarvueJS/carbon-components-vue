import { storiesOf } from '@storybook/vue';

storiesOf('OverflowMenu', module)
  .add('Default', () => ({
    template: `
    <ca-overflow-menu>
      <ca-overflow-menu-option>
        <button class="bx--overflow-menu-options__btn" data-floating-menu-primary-focus>Option 1</button>
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        <button class="bx--overflow-menu-options__btn">Option 2</button>
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        <button class="bx--overflow-menu-options__btn">Option 3</button>
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        <button class="bx--overflow-menu-options__btn">Option 4</button>
      </ca-overflow-menu-option>
    </ca-overflow-menu>
    `,
  }));
