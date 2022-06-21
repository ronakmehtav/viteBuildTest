import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      base: '/viteBuildTest/',
    };
  } else {
    return {
      base: '/',
    };
  }
});
