import * as components from './components';

const Carbon = {};

Carbon.install = Vue => {
  Object.values(components).forEach(component => {
    Vue.use(component);
  });
};

export default Carbon;

