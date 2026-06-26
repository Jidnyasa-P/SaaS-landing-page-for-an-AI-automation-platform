import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ============================================================
// Entry orchestration — must complete within 500ms total and
// must never block semantic HTML indexing or delay TTI. We do this
// with a single rAF + CSS class toggle, no JS animation engine.
// ============================================================
requestAnimationFrame(() => {
  const loader = document.getElementById('app-loader');
  const heroEl = document.querySelector('.hero');

  // Loader fades 0-200ms (matches --dur-micro * ~1.1 budget)
  loader?.classList.add('is-hidden');
  setTimeout(() => loader?.remove(), 220);

  // Hero content reveals 100-450ms — orchestrated stagger, single timeline
  heroEl?.classList.add('hero-enter');
});
