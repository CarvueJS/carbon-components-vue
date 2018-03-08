import { shallow } from 'vue-test-utils';
import CaTile from './CaTile.vue';

describe('CaTile', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaTile);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
