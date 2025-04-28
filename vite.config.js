import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { icons } from './icons.json';
import { screenshots } from './screenshots.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifestFilename: 'easycrypt.manifest',
      manifest: {
        name: 'EasyCrypt',
        short_name: 'EC',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons,
        screenshots,
      }
    }),
  ],
})
