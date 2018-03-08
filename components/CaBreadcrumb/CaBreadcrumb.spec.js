import { shallow } from 'vue-test-utils';
import CaBreadcrumb from './CaBreadcrumb.vue';
import CaBreadcrumbItem from './CaBreadcrumbItem.vue';

describe('CaBreadcrumb', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaBreadcrumb, { 
      slots: {
        default: CaBreadcrumbItem
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
