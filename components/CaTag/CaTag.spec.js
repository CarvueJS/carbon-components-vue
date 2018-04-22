import { shallow } from 'vue-test-utils';
import CaTag from './CaTag.vue';

describe('CaTag', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaTag);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot', () => {
    const wrapper = shallow(CaTag);
    expect(wrapper.html()).toMatchSnapshot()
  });
})
