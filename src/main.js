import { createApp } from 'vue'
import { createHead } from "@vueuse/head"
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import './assets/main.css'
import {createPinia} from "pinia";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faBehance, faInstagram, faLinkedin, faFlickr } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter, faBehance, faInstagram, faLinkedin, faFlickr)

const pinia = createPinia()
const head = createHead()

const app = createApp(App)
    .use(pinia)
    .use(head)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
