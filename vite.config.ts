import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plain Vite + React. No UI/animation plugins — keeps Feature 2's
// zero-dependency rule trivially auditable from this file alone.
export default defineConfig({
  plugins: [react()],
  server: {
    // HMR can be disabled via DISABLE_HMR env var.
    hmr: process.env.DISABLE_HMR !== 'true',
    // Disable file watching when DISABLE_HMR is true to save CPU during edits.
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
