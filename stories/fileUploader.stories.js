import { storiesOf } from '@storybook/vue';

storiesOf('FileUploader', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-file-uploader>up up</ca-file-uploader>
    `,
  }));
