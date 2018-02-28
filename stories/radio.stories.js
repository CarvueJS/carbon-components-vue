import { storiesOf } from '@storybook/vue';

storiesOf('Radio', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-radio v-model="radioData">
      <ca-radio-item radioID="radio-button-1" value="value1">radio1</ca-radio-item>
      <ca-radio-item radioID="radio-button-2" value="value2" checked>radio2</ca-radio-item>
      <ca-radio-item radioID="radio-button-3" value="value3">radio3</ca-radio-item>
      <br>radioData is {{radioData}}
    </ca-radio>
    `,
    data() {
      return {
        radioData: 'value1',
      };
    },
  }));
