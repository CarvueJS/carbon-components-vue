import { shallow } from 'vue-test-utils';
import CaList from './CaList.vue';

describe('CaList', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaList);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
