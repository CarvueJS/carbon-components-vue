import CaTabs from './CaTabs.vue';
import CaTabsNav from './CaTabsNav.vue';
import CaTabsPanel from './CaTabsPanel.vue';

CaTabs.install = Vue => {
  Vue.component(CaTabs.name, CaTabs);
  Vue.component(CaTabsNav.name, CaTabsNav);
  Vue.component(CaTabsPanel.name, CaTabsPanel);
}

export default CaTabs
