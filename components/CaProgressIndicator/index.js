import CaProgressIndicator from './CaProgressIndicator';
import CaProgressIndicatorStep from './CaProgressIndicatorStep';

CaProgressIndicator.install = (Vue) => {
  Vue.component(CaProgressIndicator.name, CaProgressIndicator);
  Vue.component(CaProgressIndicatorStep.name, CaProgressIndicatorStep);
};

export default CaProgressIndicator;
