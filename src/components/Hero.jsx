import { ChevronRightIcon, SearchIcon } from './icons';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="container hero-inner">
        <span className="label">// AI Data Automation Platform</span>
        <h1>Automate enterprise workflows with secure AI agents.</h1>
        <p className="hero-sub">
          Daemon connects databases, APIs, and file systems to run autonomous multi-step operations. No manual triggers, no fragile scripts, built with military-grade privacy.
        </p>
        <div className="hero-actions">
          <a className="cta" href="#pricing">
            Start building <ChevronRightIcon />
          </a>
          <a className="cta cta-ghost" href="#features">
            <SearchIcon /> See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
