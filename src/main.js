import { createApp } from 'vue'
import { createHead } from "@vueuse/head"
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import './assets/main.css'
import { createPinia } from "pinia";

import FlickrGallery from 'flickrgallery'
import "flickrgallery/dist/flickrgallery.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faTwitter, faBehance, faInstagram, faLinkedin, faFlickr, faMastodon } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faTwitter, faBehance, faInstagram, faLinkedin, faFlickr, faMastodon)

import router from './router.js';

const pinia = createPinia()
const head = createHead()

const app = createApp(App);
app.use(pinia)
app.use(FlickrGallery, { pinia });
app.use(head)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')