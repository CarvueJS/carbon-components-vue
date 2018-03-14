import CaAccordion from './CaAccordion.vue';
import CaAccordionItem from './CaAccordionItem.vue';

function install(Vue) {
  Vue.component(CaAccordion.name, CaAccordion);
  Vue.component(CaAccordionItem.name, CaAccordionItem);
}

export default {
  install,
};
