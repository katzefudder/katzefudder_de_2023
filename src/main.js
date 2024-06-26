import { createApp } from 'vue'
import { createHead } from "@vueuse/head"
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import './assets/main.css'
import {createPinia} from "pinia";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faTwitter, faBehance, faInstagram, faLinkedin, faFlickr } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faTwitter, faBehance, faInstagram, faLinkedin, faFlickr)
import {FlickrGalleryPlugin} from "flickrgallery";
import "flickrgallery/dist/style.css";

import router from './router.js';

const pinia = createPinia()
const head = createHead()

createApp(App)
    .use(router)
    .use(pinia)
    .use(head)
    .use(FlickrGalleryPlugin)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
