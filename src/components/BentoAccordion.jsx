import { useRef, useState, useEffect } from 'react';
import { Cube16SolidIcon, ArrowPathIcon, LinkSolidIcon, Cog8ToothIcon, ChevronDownIcon } from './icons';

const FEATURES = [
  {
    icon: Cube16SolidIcon,
    title: 'Visual Workflow Orchestrator',
    body: 'Design, test, and audit multi-step agent behaviors on an interactive node canvas. Connect tables, models, and notifications in real-time.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Deterministic AI Execution',
    body: 'Combine LLM reasoning with deterministic code gates. Run multi-stage pipelines with built-in self-healing and error retry policies.',
  },
  {
    icon: LinkSolidIcon,
    title: 'Isolated Data Shield',
    body: 'Process enterprise records locally. Zero permanent storage of your input keys, model weights, or private databases.',
  },
  {
    icon: Cog8ToothIcon,
    title: 'Native Enterprise Connectors',
    body: 'Deploy pre-built secure adapters for PostgreSQL, Snowflake, Slack, and cloud storage providers in a single click.',
  },
];

const MOBILE_QUERY = '(max-width: 768px)';

export default function BentoAccordion() {
  const activeIndexRef = useRef(0); // last hovered/focused bento node — survives resize
  const wasMobileRef = useRef(false);
  const [openIndex, setOpenIndex] = useState(null); // accordion-only state
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_QUERY).matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    wasMobileRef.current = mq.matches;

    function handleChange(e) {
      const nowMobile = e.matches;
      // The Context Lock Constraint: only fires on the desktop -> mobile
      // transition, and only transfers whatever index was last active.
      if (nowMobile && !wasMobileRef.current) {
        setOpenIndex(activeIndexRef.current);
      }
      wasMobileRef.current = nowMobile;
      setIsMobile(nowMobile);
    }

    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  function markActive(index) {
    activeIndexRef.current = index;
  }

  return (
    <section className="features section-dark" aria-labelledby="features-heading" id="features">
      <div className="container">
        <span className="label">// Capabilities</span>
        <h2 id="features-heading">Built for autonomous operation</h2>

        {isMobile ? (
          <ul className="accordion" role="presentation">
            {FEATURES.map((f, i) => (
              <AccordionItem
                key={f.title}
                feature={f}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </ul>
        ) : (
          <div className="bento-grid" role="list">
            {FEATURES.map((f, i) => (
              <article
                key={f.title}
                className="bento-card"
                role="listitem"
                tabIndex={0}
                onMouseEnter={() => markActive(i)}
                onFocus={() => markActive(i)}
              >
                <f.icon className="bento-icon" aria-hidden="true" />
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function AccordionItem({ feature, isOpen, onToggle }) {
  const panelId = `panel-${feature.title.replace(/\s+/g, '-').toLowerCase()}`;
  const Icon = feature.icon;
  return (
    <li className="accordion-item">
      <h3>
        <button
          className="accordion-trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="accordion-trigger-label">
            <Icon className="accordion-icon-feature" aria-hidden="true" />
            {feature.title}
          </span>
          <ChevronDownIcon className={`accordion-chevron ${isOpen ? 'is-open' : ''}`} aria-hidden="true" />
        </button>
      </h3>
      {/* grid-template-rows 0fr -> 1fr trick: animates height without
          ever reading scrollHeight, so it's pure CSS, no layout thrash */}
      <div
        id={panelId}
        className="accordion-panel"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="accordion-panel-inner">
          <p>{feature.body}</p>
        </div>
      </div>
    </li>
  );
}
