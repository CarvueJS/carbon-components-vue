import { shallow } from 'vue-test-utils';
import CaButton from './CaButton.vue';

describe('CaButton', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaButton);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot: primary', () => {
    const wrapper = shallow(CaButton, { 
      propsData: {
        primary: true
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('Mathes snapshot: secondary', () => {
    const wrapper = shallow(CaButton, { 
      propsData: {
        secondary: true
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('Mathes snapshot: danger', () => {
    const wrapper = shallow(CaButton, { 
      propsData: {
        danger: true
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('Mathes snapshot: sm', () => {
    const wrapper = shallow(CaButton, { 
      propsData: {
        sm: true
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('Mathes snapshot: disabled', () => {
    const wrapper = shallow(CaButton, { 
      propsData: {
        disabled: true
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('Mathes snapshot: icon', () => {
    const wrapper = shallow(CaButton, { 
      propsData: {
        icon: 'help_out'
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  });
})
