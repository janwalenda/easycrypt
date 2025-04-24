import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifestFilename: 'easycrypt.manifest',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'EasyCrypt',
        short_name: 'EC',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/favicon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: '/screenshot.png',
            sizes: '1350x2012',
            type: 'image/png',
          },
          {
            src: '/screenshot_wide.png',
            sizes: '2784x2008',
            type: 'image/png',
            form_factor: 'wide'
          },
        ]
      }
    }),
  ],
})
