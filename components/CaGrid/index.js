import CaContainer from './CaContainer.vue';
import CaLayout from './CaLayout.vue';
import CaFlex from './CaFlex.vue';

const CaGrid = {};

CaGrid.install = (Vue) => {
  Vue.component(CaContainer.name, CaContainer);
  Vue.component(CaLayout.name, CaLayout);
  Vue.component(CaFlex.name, CaFlex);
};

export default CaGrid;
