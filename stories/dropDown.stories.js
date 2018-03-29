import { storiesOf } from '@storybook/vue';

storiesOf('DropDown', module)
  .add('Default', () => ({
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
      <ca-dropdown-item value="data4">
        option4
      </ca-dropdown-item>
    </ca-dropdown>
    `,
  })).add('with model', () => ({
    data: () => ({
      model: '',
    }),
    template: `
    <ca-tile>
      <ca-dropdown v-model="model">
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
      selected is {{model}}
    </ca-tile>
    `,
  }))
