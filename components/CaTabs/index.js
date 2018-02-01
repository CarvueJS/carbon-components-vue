import CaTabs from './CaTabs';
import CaTabsNav from './CaTabsNav';
import CaTabsPanel from './CaTabsPanel';

CaTabs.install = (Vue) => {
  Vue.component(CaTabs.name, CaTabs);
  Vue.component(CaTabsNav.name, CaTabsNav);
  Vue.component(CaTabsPanel.name, CaTabsPanel);
};

export default CaTabs;
