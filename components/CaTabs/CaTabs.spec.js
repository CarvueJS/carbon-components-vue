import { shallow } from 'vue-test-utils';
import CaTabs from './CaTabs.vue';

describe('CaTabs', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaTabs);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
