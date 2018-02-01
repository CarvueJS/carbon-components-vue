import CaTooltip from './CaTooltip';
import CaTooltipLabel from './CaTooltipLabel';
import CaTooltipTrigger from './CaTooltipTrigger';

CaTooltip.install = (Vue) => {
  Vue.component(CaTooltip.name, CaTooltip);
  Vue.component(CaTooltipLabel.name, CaTooltipLabel);
  Vue.component(CaTooltipTrigger.name, CaTooltipTrigger);
};

export default CaTooltip;
