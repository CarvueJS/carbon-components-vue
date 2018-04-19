import { shallow } from 'vue-test-utils';
import CaSelect from './CaSelect.vue';

describe('CaSelect', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaSelect);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot', () => {
    const wrapper = shallow(CaSelect);
    expect(wrapper.html()).toMatchSnapshot()
  });
})
