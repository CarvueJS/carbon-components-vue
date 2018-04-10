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

  test('Mathes snapshot: without last slash', () => {
      const wrapper = shallow(CaBreadcrumb, { 
        propsData: {
          noSlash: true
        },
        slots: {
          default: [CaBreadcrumbItem, CaBreadcrumbItem]
        }
      }
    )
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('Mathes snapshot: with last slash', () => {
    const wrapper = shallow(CaBreadcrumb, { 
      slots: {
        default: [CaBreadcrumbItem, CaBreadcrumbItem]
      }
    }
  )
  expect(wrapper.html()).toMatchSnapshot()
});
})
