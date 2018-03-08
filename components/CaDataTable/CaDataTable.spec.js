import { shallow } from 'vue-test-utils';
import CaDataTable from './CaDataTable.vue';

describe('CaDataTable', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaDataTable);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
