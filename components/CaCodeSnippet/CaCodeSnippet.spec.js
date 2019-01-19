import { shallow } from 'vue-test-utils';
import CaCodeSnippet from './CaCodeSnippet.vue';

jest.useFakeTimers();

describe('CaCodeSnippet', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(CaCodeSnippet);
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('when clicked on copy button', () => {
    beforeEach(() => {
      document.createRange = () => ({
        selectNode: () => {},
      });
      window.getSelection = () => ({
        addRange: () => {},
        removeAllRanges: () => {},
      });
    });

    describe('if copy succeeds', () => {
      beforeEach(() => {
        document.execCommand = jest.fn(() => true);
        wrapper.find('button').trigger('click');
      });

      it('should call the copy api', () => {
        expect(document.execCommand).toHaveBeenCalledWith('copy');
      });

      it('should show the feedback', () => {
        expect(wrapper.vm.$data.showFeedback).toBe(true);
      });

      describe('after 2 seconds', () => {
        beforeEach(() => {
          jest.advanceTimersByTime(2000);
        });

        it('should hide the feedback', () => {
          expect(wrapper.vm.$data.showFeedback).toBe(false);
        });
      });
    });
  });
});
