import { storiesOf } from '@storybook/vue';

storiesOf('CodeSnippet', module)
  .add('Default', () => ({
    template: `
    <ca-code-snippet>
      @mixin bx--snippet($type) {
      @if $type == 'terminal' {
          background-color: red;
        } @else if $type == 'code' {
          background-color: blue;
        } @else if $type == 'text' {
          background-color: white;
        }
      
      @if $type == 'terminal' {
          background-color: red;
        } @else if $type == 'code' {
          background-color: blue;
        } @elsegi if $type == 'text' {
          background-color: white;
        }
      }
    </ca-code-snippet>
    `,
  }));
