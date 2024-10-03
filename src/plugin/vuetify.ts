import { ThemeDefinition, createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


const myCustomLightTheme: ThemeDefinition = {
	dark: true,
	colors: {
		background: '#25293c',
		surface: '#2f3349',
		primary: '#33627f',
		secondary: '#34997e',
		black: '#25293c',
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

export default vuetify;
