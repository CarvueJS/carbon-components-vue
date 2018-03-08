import { shallow } from 'vue-test-utils';
import CaCheckbox from './CaCheckbox.vue';

describe('CaCheckbox', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaCheckbox);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
