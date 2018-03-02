import { storiesOf } from '@storybook/vue';

storiesOf('FileUploader', module)
  .addWithJSX('normal', () => ({
    data: () => ({
      image: null,
    }),
    template: `
    <div>
      <ca-file-uploader v-model="image">up up</ca-file-uploader>
      <div class="container"></div>
    </div>
    `,
    watch: {
      image(newImage) {
        document.querySelector('.container').appendChild(newImage);
      },
    },
  }));
