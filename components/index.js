import * as components from './components';

require('carbon-components/css/carbon-components.css');

const Carbon = {};

Carbon.install = (Vue) => {
  Object.values(components).forEach((component) => {
    Vue.use(component);
  });
};

export default Carbon;

