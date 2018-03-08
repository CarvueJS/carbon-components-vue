import { shallow } from 'vue-test-utils';
import CaModal from './CaModal.vue';

describe('CaModal', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaModal);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
