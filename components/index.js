import * as components from './components.js';

const Carbon = {};

Carbon.install = Vue => {
  Object.values(components).forEach(component => {
    Vue.use(component);
  });
}

export default Carbon;

