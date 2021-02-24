import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  build: {},
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  // modules: ['@nuxtjs/axios'],
  plugins: ['~/plugins/axios-accessor']
};

export default config;
