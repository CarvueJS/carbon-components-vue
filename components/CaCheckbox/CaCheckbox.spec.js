import { shallow } from 'vue-test-utils';
import CaCheckbox from './CaCheckbox.vue';

describe('CaCheckbox', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaCheckbox, {
      propsData: {
        inputValue: []
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('click', () => {
    const model = ['a']
    const wrapper = shallow(CaCheckbox, {
      attachToDocument: true,
      propsData: {
        inputValue: model,
        itemId: 'a',
        itemValue: 'a'
      }
    });
    wrapper.find('input').element.checked = true
    expect(model).toEqual(
      expect.arrayContaining(['a']),
    );
  });
})
