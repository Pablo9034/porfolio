// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  	i18n: {
    	locales: ['es', 'pt', 'en'],
    	defaultLocale: 'es',
    	routing: {
      		prefixDefaultLocale: true
    	}
  	},
  	vite: {
  	  	plugins: [tailwindcss()]
  	}
});