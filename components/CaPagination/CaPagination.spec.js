import { shallow } from 'vue-test-utils';
import CaPagination from './CaPagination.vue';
import CaPaginationItem from './CaPaginationItem.vue';

describe('CaPagination', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaPagination, { 
      slots: {
        default: CaPaginationItem
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
