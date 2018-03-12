import { storiesOf } from '@storybook/vue';

storiesOf('According', module)
  .add('Default', () => ({
    template: `
    <ca-accordion>
      <ca-accordion-item>
        <div slot="title">this is a title</div>
        <div slot="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p></div>
      </ca-accordion-item>
      <ca-accordion-item>
        <div slot="title">this is a titleB</div>
        <div slot="content"><p>this is a contentB</p></div>
      </ca-accordion-item>
      <ca-accordion-item active>
        <div slot="title">this is a titleC</div>
        <div slot="content">
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
        </div>
      </ca-accordion-item>
      <ca-accordion-item>
        <div slot="title">this is a titleD</div>
        <div slot="content"><p>this is a contentB</p></div>
      </ca-accordion-item>
    </ca-accordion>
    `,
  }));
