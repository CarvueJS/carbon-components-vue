import { shallow,  mount} from 'vue-test-utils';
import CaTextInput from './CaTextInput.vue';


describe('CaTextInput', () => {
  
  function triggerChange(wrapper) {
    return new Promise((resolve, reject) => {
      const input = wrapper.find('input')
      input.element.value = 'text test'
      input.trigger('change')
      setImmediate(resolve)
    })
  }
  
  test('is a Vue instance', () => {
    const wrapper = shallow(CaTextInput);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot', () => {
    const wrapper = shallow(CaTextInput);
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('trigger the value of model', () => {
    let model = 'test'
    const wrapper = mount(CaTextInput, {
      propsData: { value: model },
    })
    const input = wrapper.find('input')
    input.element.value = 'text test'
    input.trigger('change')
    expect(wrapper.emitted().input[0]).toEqual(['text test'])
  });
})
