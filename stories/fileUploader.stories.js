import { storiesOf } from '@storybook/vue';

storiesOf('FileUploader', module)
  .addWithJSX('Default', () => ({
    data: () => ({
      image: null,
    }),
    template: `
    <ca-tile>
      <ca-file-uploader v-model="image">up up</ca-file-uploader>
      <div class="container"></div>
    </ca-tile>
    `,
    watch: {
      image(newImage) {
        document.querySelector('.container').appendChild(newImage);
      },
    },
  }));
