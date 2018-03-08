import { shallow } from 'vue-test-utils';
import CaSearch from './CaSearch.vue';

describe('CaSearch', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaSearch);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
