import { storiesOf } from '@storybook/vue';

storiesOf('According', module)
  .addWithJSX('Default', () => ({
    template: `
    <ca-accordion>
      <ca-accordion-item>
        <div slot="title">this is a title</div>
        <div slot="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p></div>
      </ca-accordion-item>
      <ca-accordion-item active>
        <div slot="title">this is a titleB</div>
        <div slot="content"><p>this is a contentB</p></div>
      </ca-accordion-item>
    </ca-accordion>
    `,
  }));
