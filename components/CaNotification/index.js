import CaNotification from './CaNotification.vue';
import CaNotificationTitle from './CaNotificationTitle.vue';
import CaNotificationSubtitle from './CaNotificationSubtitle.vue'

CaNotification.install = Vue => {
  Vue.component(CaNotification.name, CaNotification);
  Vue.component(CaNotificationTitle.name, CaNotificationTitle);
  Vue.component(CaNotificationSubtitle.name, CaNotificationSubtitle);
}

export default CaNotification
