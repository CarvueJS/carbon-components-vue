<template>
  <div class="bx--file" data-file>
    <label
      for="your-file-importer-id-here"
      class="bx--file-btn bx--btn bx--btn--secondary"
      role="button"
      tabindex="0">
      <slot></slot>
    </label>
    <input
      type="file"
      class="bx--file-input"
      id="your-file-importer-id-here"
      data-file-uploader
      data-target="[data-file-container]"
      @change="change"
      :multiple="multiple"
    />
    <div data-file-container class="bx--file-container"></div>
  </div>
</template>

<script>
  import { FileUploader } from 'carbon-components'
  
  export default {
    name: 'ca-file-uploader',
    props: {
      value: null,
      multiple: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      fileUploader: {}
    }),
    mounted () {
      this.fileUploader = FileUploader.create(this.$el);
    },
    methods: {
      change () {
        var image = this.$createElement('img');
        image.src = URL.createObjectURL(this.fileUploader.input.files[0]);
        this.$emit('input', image)
      }
    }
  };
</script>

<style></style>
