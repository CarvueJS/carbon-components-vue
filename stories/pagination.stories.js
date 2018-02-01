import { storiesOf } from '@storybook/vue';

storiesOf('Pagination', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-pagination>
      <ca-pagination-item slot="prePage">10</ca-pagination-item>
      <ca-pagination-item slot="prePage" selected>20</ca-pagination-item>
      <ca-pagination-item slot="prePage">30</ca-pagination-item>
      <ca-pagination-item slot="prePage">40</ca-pagination-item>

      <ca-pagination-item slot="page">1</ca-pagination-item>
      <ca-pagination-item slot="page" selected>2</ca-pagination-item>
      <ca-pagination-item slot="page">3</ca-pagination-item>
      <ca-pagination-item slot="page">4</ca-pagination-item>
    </ca-pagination>
    `,
  }));
