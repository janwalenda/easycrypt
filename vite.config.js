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
        id: "https://easycrypt.janwalenda.de/",
        lang: "en-US",
        description: "EasyCrypt is a simple and secure way to encrypt your text.",
        name: 'EasyCrypt',
        short_name: 'EC',
        start_url: '/',
        display: 'standalone',
        background_color: '#588157',
        theme_color: '#588157',
        icons,
        screenshots,
      }
    }),
  ],
})
