import { shallow } from 'vue-test-utils';
import CaLoading from './CaLoading.vue';

describe('CaLoading', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaLoading, {
      propsData: {
        show: true
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
