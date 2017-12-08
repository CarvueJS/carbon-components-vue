import CaAccordian from './CaAccordian.vue';
import CaAccordianItem from './CaAccordianItem.vue';

function install(Vue) {
  Vue.component(CaAccordian.name, CaAccordian);
  Vue.component(CaAccordianItem.name, CaAccordianItem);
}

export default {
  install
}
