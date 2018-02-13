import {storiesOf} from "@storybook/vue"

storiesOf('DatePicker', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-date-picker placeholder="m/d/y" errorMessage="wrong!"></ca-date-picker>
    `,
  }));
