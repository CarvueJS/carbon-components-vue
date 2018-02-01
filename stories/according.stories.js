import { storiesOf } from '@storybook/vue';

storiesOf('According', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-accordion>
      <ca-accordion-item>
        <div slot="title">this is a title</div>
        <div slot="content"><p>this is a content</p></div>
      </ca-accordion-item>
    </ca-accordion>
    `,
  }));
