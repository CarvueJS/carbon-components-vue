import { storiesOf } from '@storybook/vue';

storiesOf('FormItem', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-form-item>
      <label for="text-area-2" class="bx--label">Text area label</label>
      <textarea id="text-area-2" class="bx--text-area" rows="4" cols="50" placeholder="Placeholder text"></textarea>
      <div class="bx--form-requirement">
        Please do not leave blank.
      </div>
    </ca-form-item>
    `,
  }));
