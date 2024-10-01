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
import { ThemeDefinition, createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

const myCustomLightTheme: ThemeDefinition = {
	dark: true,
	colors: {
		primary: '#33627f',
		secondary: '#34997e',
		black: '#0f172a',
	},
};

const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: 'myCustomLightTheme',
		themes: {
			myCustomLightTheme,
		},
	},
});

createApp(App)
	.use(VueQueryPlugin)
	.use(pinia)
	.use(vuetify)
	.use(router)
	.mount('#app');
