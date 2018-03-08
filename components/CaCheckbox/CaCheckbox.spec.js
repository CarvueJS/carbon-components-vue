import { shallow } from 'vue-test-utils';
import CaCheckbox from './CaCheckbox.vue';

describe('CaCheckbox', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaCheckbox, {
      propsData: {
        inputValue: []
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
