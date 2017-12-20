<template>
  <div class="bx--file" data-file>
    <label
      for="your-file-importer-id-here"
      class="bx--file-btn bx--btn bx--btn--secondary"
      role="button"
      tabindex="0">Add files</label>
    <input
      type="file"
      class="bx--file-input"
      id="your-file-importer-id-here"
      data-file-uploader
      data-target="[data-file-container]"
      multiple
    />
    <div data-file-container class="bx--file-container"></div>
  </div>
</template>

<script>
  export default {
    name: 'ca-file-uploader'
  }
</script>

<style></style>
