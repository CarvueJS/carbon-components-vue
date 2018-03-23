import CaNotification from './CaNotification.vue';

CaNotification.install = (Vue) => {
  Vue.component(CaNotification.name, CaNotification);
};

export default CaNotification;
