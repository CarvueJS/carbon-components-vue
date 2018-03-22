import { storiesOf } from '@storybook/vue';

storiesOf('FileUploader', module)
  .add('Default', () => ({
    data: () => ({
      image: null,
    }),
    template: `
    <ca-tile>
      <ca-file-uploader v-model="image">up up</ca-file-uploader>
      <img class="container"></div>
    </ca-tile>
    `,
    watch: {
      image(newImage) {
        document.querySelector('.container').setAttribute('src', newImage.src)
      },
    },
  }));
