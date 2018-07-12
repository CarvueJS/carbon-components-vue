import * as components from './components';

require('carbon-components/css/carbon-components.css');

const Carvue = {};

Carvue.install = (Vue) => {
  Object.values(components).forEach((component) => {
    Vue.use(component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Carvue);
}

export default Carvue;
