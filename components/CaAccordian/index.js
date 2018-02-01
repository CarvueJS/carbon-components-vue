import CaAccordian from './CaAccordian';
import CaAccordianItem from './CaAccordianItem';

function install(Vue) {
  Vue.component(CaAccordian.name, CaAccordian);
  Vue.component(CaAccordianItem.name, CaAccordianItem);
}

export default {
  install,
};
