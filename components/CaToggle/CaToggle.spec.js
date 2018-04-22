import { shallow } from 'vue-test-utils';
import CaToggle from './CaToggle.vue';

describe('CaToggle', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaToggle);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot', () => {
    const wrapper = shallow(CaToggle);
    expect(wrapper.html()).toMatchSnapshot()
  });
})
