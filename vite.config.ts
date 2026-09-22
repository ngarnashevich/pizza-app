import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pxToVwPlugin from './vite-plugin-px-to-vw.js';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: 'esbuild',
        cssMinify: true,
        sourcemap: false,
    },
    plugins: [
        react({
            compiler: true,
        }),
        pxToVwPlugin({
            minWidth: '768px',
            maxWidth: '1440px',
            include: /app\.(scss|css)$/,
        }),
        visualizer({ open: false, filename: 'stats.html' }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

});
