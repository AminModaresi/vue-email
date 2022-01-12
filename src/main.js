import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faStar , faUser , faExchangeAlt , faCog, faExclamationCircle, faRedoAlt, faEllipsisH, faInbox, faClock, faTimesCircle, faBook, faPaperPlane, faBookmark, faNotesMedical, faTag, faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
library.add(faUser , faExchangeAlt , faCog , faExclamationCircle ,faRedoAlt , faEllipsisH , faInbox , faStar ,faClock , faTimesCircle , faBook , faPaperPlane , faBookmark , faNotesMedical , faTag , faBars)

import BaseCheckBox from "./components/layout/BaseCheckBox.vue"
import BaseEmailLine from "./components/layout/BaseEmailLine.vue"
import BaseStarred from "./components/layout/BaseStarred.vue"
import BaseBookmark from "./components/layout/BaseBookmark.vue"
import BasePagination from "./components/layout/BasePagination.vue"

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component("base-check-box" , BaseCheckBox)
app.component("base-email-line" , BaseEmailLine)
app.component("base-starred" , BaseStarred)
app.component("base-bookmark" , BaseBookmark)
app.component("base-pagination" , BasePagination)
app.use(store)
app.use(router)
app.use(VueToast);
app.use(BootstrapVue3)
app.mount('#app')
