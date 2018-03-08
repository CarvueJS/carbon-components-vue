import { shallow } from 'vue-test-utils';
import CaStructuredList from './CaStructuredList.vue';

describe('CaStructuredList', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaStructuredList);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
