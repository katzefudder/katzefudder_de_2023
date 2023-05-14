import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import './assets/main.css'
import {createPinia} from "pinia";


const pinia = createPinia()

const app = createApp(App)
    .use(pinia)
    .mount('#app')
