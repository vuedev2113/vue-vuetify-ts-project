import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers';

import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			extensions: ['vue'],
			dirs: ['src/components'],
			include: [/\.vue$/, /\.vue\?vue/],
			deep: true,
			resolvers: [Vuetify3Resolver()],
			types: [
				{
					from: 'vue-router',
					names: ['RouterLink', 'RouterView'],
				},
			],
		}),
		AutoImport({
			include: [
				/\.vue$/,
				/\.vue\?vue/, // .vue
			],
			imports: ['vitest', 'pinia', 'vue', 'vue-router'],
			dts: true,
			eslintrc: {
				enabled: true, // Default `false`
				filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
				globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			},
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
