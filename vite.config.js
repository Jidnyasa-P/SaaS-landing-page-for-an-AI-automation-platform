import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plain Vite + React. No UI/animation plugins — keeps Feature 2's
// zero-dependency rule trivially auditable from this file alone.
export default defineConfig({
  plugins: [react()],
});
