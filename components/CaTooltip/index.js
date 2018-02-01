import CaTooltip from './CaTooltip.vue';
import CaTooltipLabel from './CaTooltipLabel.vue';
import CaTooltipTrigger from './CaTooltipTrigger.vue';

CaTooltip.install = (Vue) => {
  Vue.component(CaTooltip.name, CaTooltip);
  Vue.component(CaTooltipLabel.name, CaTooltipLabel);
  Vue.component(CaTooltipTrigger.name, CaTooltipTrigger);
};

export default CaTooltip;
