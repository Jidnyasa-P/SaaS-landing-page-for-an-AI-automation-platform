import { useState } from 'react';
import { Cube16SolidIcon, XMarkIcon } from './icons';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo mono">
          <Cube16SolidIcon className="logo-mark" />
          daemon
        </a>

        <nav aria-label="Primary" className={navOpen ? 'nav-open' : ''}>
          <ul>
            <li><a href="#features" onClick={() => setNavOpen(false)}>Capabilities</a></li>
            <li><a href="#pricing" onClick={() => setNavOpen(false)}>Pricing</a></li>
            <li><a href="#proof" onClick={() => setNavOpen(false)}>Proof</a></li>
          </ul>
        </nav>

        <a className="cta nav-cta" href="#pricing">Get started</a>

        <button
          className="nav-toggle"
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          {navOpen ? <XMarkIcon /> : (
            <span className="hamburger" aria-hidden="true">
              <span /><span /><span />
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
