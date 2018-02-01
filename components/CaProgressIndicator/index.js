import CaProgressIndicator from './CaProgressIndicator.vue';
import CaProgressIndicatorStep from './CaProgressIndicatorStep.vue';

CaProgressIndicator.install = (Vue) => {
  Vue.component(CaProgressIndicator.name, CaProgressIndicator);
  Vue.component(CaProgressIndicatorStep.name, CaProgressIndicatorStep);
};

export default CaProgressIndicator;
