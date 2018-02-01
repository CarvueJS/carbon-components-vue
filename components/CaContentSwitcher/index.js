import CaContentSwitcher from './CaContentSwitcher';
import CaContentSwitcherButton from './CaContentSwitcherButton';

CaContentSwitcher.install = (Vue) => {
  Vue.component(CaContentSwitcher.name, CaContentSwitcher);
  Vue.component(CaContentSwitcherButton.name, CaContentSwitcherButton);
};

export default CaContentSwitcher;
