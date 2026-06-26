import { ChevronUpSolidIcon } from './icons';

export default function Footer() {
  return (
    <footer className="site-footer section-dark">
      <div className="container footer-inner">
        <span className="mono">daemon</span>
        <p>&copy; {new Date().getFullYear()} Daemon, Inc. Built for the Next-Gen AI Platform Speed Run.</p>
        <a href="#top" className="back-to-top" aria-label="Back to top">
          <ChevronUpSolidIcon />
        </a>
      </div>
    </footer>
  );
}
