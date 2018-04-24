import { shallow } from 'vue-test-utils';
import CaNumberInput from './CaNumberInput.vue';

describe('CaNumberInput', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaNumberInput);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot', () => {
    const wrapper = shallow(CaNumberInput);
    expect(wrapper.html()).toMatchSnapshot()
  });
})
