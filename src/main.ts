import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

import { VueQueryPlugin } from 'vue-query';

import { createPinia } from 'pinia';
const pinia = createPinia();

import '@/scss/index.scss';

// Vuetify

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import vuetify from './plugin/vuetify';

createApp(App)
	.use(VueQueryPlugin)
	.use(pinia)
	.use(vuetify)
	.use(router)
	.mount('#app');
