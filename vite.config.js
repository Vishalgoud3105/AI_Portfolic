import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable automatic JSX React import (optional based on your needs)
      jsxImportSource: '@emotion/react', // or 'react' depending on usage
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  build: {
    // Enable better code-splitting and minification
    chunkSizeWarningLimit: 1000, // Increase warning limit for large chunks
    minify: 'esbuild', // Faster and more efficient minifier
    sourcemap: true, // Enable sourcemaps for debugging
  },
  server: {
    open: true, // Automatically open the browser on server start
    proxy: {
      // Example: Add proxy for API calls to avoid CORS issues during development
      '/api': 'http://localhost:5000', 
    },
  },
  css: {
    preprocessorOptions: {
      // Add support for Sass/SCSS if you're using it
      sass: {
        additionalData: `@import "@/styles/variables.scss";`, // Automatically import a global stylesheet
      },
    },
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      // Add any other dependencies that need pre-bundling
    ],
  },
  esbuild: {
    // Enable tree shaking to remove unused code
    treeShaking: true,
  },
  define: {
    // Define environment variables or global constants for your app
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  // Optional: Adding PWA plugin if you want PWA support
  // pwa: {
  //   workbox: {
  //     swDest: 'sw.js',
  //     globPatterns: ['**/*.{js,css,html,ico,png}'],
  //   },
  // },
});
