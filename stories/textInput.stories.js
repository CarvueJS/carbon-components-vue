import {storiesOf} from "@storybook/vue"

storiesOf('TextInput', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-text-input placeholder="holder"></ca-text-input>
    `,
  }));
