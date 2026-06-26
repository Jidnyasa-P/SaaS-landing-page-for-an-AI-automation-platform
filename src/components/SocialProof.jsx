import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, LinkIcon } from './icons';

const LOGOS = ['Aether Financial', 'Nova Genomics', 'Apex Logistics', 'Sentinel Cyber'];

export default function SocialProof() {
  const rowRef = useRef(null);

  function scrollBy(direction) {
    rowRef.current?.scrollBy({ left: direction * 220, behavior: 'smooth' });
  }

  return (
    <section className="proof section-light-alt" id="proof" aria-labelledby="proof-heading">
      <div className="container">
        <span className="label">// Trusted by</span>
        <h2 id="proof-heading">Running in production across regulated industries</h2>

        <div className="logo-row-wrap">
          <button
            className="logo-row-nav"
            aria-label="Scroll logos left"
            onClick={() => scrollBy(-1)}
          >
            <ChevronLeftIcon />
          </button>

          <ul className="logo-row" aria-label="Companies using Daemon" ref={rowRef}>
            {LOGOS.map((name) => (
              <li key={name} className="mono logo-row-item">
                {name}
                <a href="#proof" className="case-study-link" aria-label={`View ${name} case study`}>
                  <LinkIcon />
                </a>
              </li>
            ))}
          </ul>

          <button
            className="logo-row-nav"
            aria-label="Scroll logos right"
            onClick={() => scrollBy(1)}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
