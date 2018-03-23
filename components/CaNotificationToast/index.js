import CaNotificationToast from './CaNotificationToast.vue';

CaNotificationToast.install = (Vue) => {
  Vue.component(CaNotificationToast.name, CaNotificationToast);
};

export default CaNotificationToast;
