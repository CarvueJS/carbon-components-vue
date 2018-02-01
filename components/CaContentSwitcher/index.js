import CaContentSwitcher from './CaContentSwitcher.vue';
import CaContentSwitcherButton from './CaContentSwitcherButton.vue';

CaContentSwitcher.install = (Vue) => {
  Vue.component(CaContentSwitcher.name, CaContentSwitcher);
  Vue.component(CaContentSwitcherButton.name, CaContentSwitcherButton);
};

export default CaContentSwitcher;
