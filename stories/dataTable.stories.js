import { storiesOf } from '@storybook/vue';

storiesOf('DataTable', module)
  .addWithJSX('Default', () => ({
    template: `
    <ca-data-table>
      <thead>

        <tr>
          <th>
            head1
          </th>
          <th>
            head2
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            itemA
          </th>
          <th>
            itemB
          </th>
        </tr>
        <tr>
          <th>
            itemE
          </th>
          <th>
            itemD
          </th>
        </tr>
      </tbody>
    </ca-data-table>
    `,
  }));
