import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	// Also see info about setting up tailwind with svelte
	// https://dev.to/swyx/how-to-set-up-svelte-with-tailwind-css-4fg5
	preprocess: preprocess({
		scss: {},
        postcss: true
	}),
	kit: {
		adapter: adapter({
			postcss: true,
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
	},
	server: {
		hmr: {
			host: 'localhost',
			port: 15000,
			protocol: 'ws'
		}
	}
};

export default config;
