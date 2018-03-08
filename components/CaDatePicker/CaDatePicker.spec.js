import { shallow } from 'vue-test-utils';
import CaDatePicker from './CaDatePicker.vue';

describe('CaDatePicker', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaDatePicker);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
