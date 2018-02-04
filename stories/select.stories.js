import { storiesOf } from '@storybook/vue';

storiesOf('Select', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-select>
      <ca-select-item>Choose an option</ca-select-item>
      <ca-select-item value="solong">A much longer option that is worth having around to check how text flows</ca-select-item>
      <ca-select-group label="Category 1">
        <ca-select-item value="option1">11</ca-select-item>
        <ca-select-item value="option2">22</ca-select-item>
      </ca-select-group>
      <ca-select-group label="Category 22">
        <ca-select-item value="option3">33</ca-select-item>
        <ca-select-item value="option4">44</ca-select-item>
      </ca-select-group>
    </ca-select>
    `,
  }));
