import { storiesOf } from '@storybook/vue';

storiesOf('DropDown', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-dropdown>
      <ca-dropdown-item value="date1">
        option1
      </ca-dropdown-item>
      <ca-dropdown-item value="data2" >
        option2
      </ca-dropdown-item>
      <ca-dropdown-item value="data3">
        option3
      </ca-dropdown-item>
    </ca-dropdown>
    `,
  }));
