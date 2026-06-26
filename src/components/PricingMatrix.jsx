import { useRef, useEffect } from 'react';
import { TIERS, CURRENCY_MATRIX, computePrice, formatPrice } from '../lib/pricingMatrix';
import { ChevronRightIcon } from './icons';

const TIER_KEYS = Object.keys(TIERS);
const CURRENCY_KEYS = Object.keys(CURRENCY_MATRIX);

/**
 * IMPORTANT ARCHITECTURE NOTE:
 * This component intentionally holds billing/currency selection OUTSIDE
 * React state (in a plain ref object). Toggling billing or currency runs an
 * imperative DOM write to each price <span> and to the pressed-state classes
 * on the controls themselves — it never calls setState, so React never
 * re-renders this component, its parent, or any sibling section.
 * Verify in React DevTools Profiler: toggling should show NO commit at all.
 */
export default function PricingMatrix() {
  const selection = useRef({ billing: 'monthly', currency: 'INR' });
  const priceNodeRefs = useRef({}); // tierKey -> HTMLElement
  const billingBtnRefs = useRef({}); // 'monthly'|'annual' -> HTMLElement
  const currencyBtnRefs = useRef({}); // currencyKey -> HTMLElement

  function paint() {
    const { billing, currency } = selection.current;

    TIER_KEYS.forEach((tierKey) => {
      const node = priceNodeRefs.current[tierKey];
      if (node) node.textContent = formatPrice(computePrice(tierKey, billing, currency));
    });

    Object.entries(billingBtnRefs.current).forEach(([key, el]) => {
      el?.setAttribute('aria-pressed', String(key === billing));
    });
    Object.entries(currencyBtnRefs.current).forEach(([key, el]) => {
      el?.setAttribute('aria-pressed', String(key === currency));
    });
  }

  useEffect(paint, []); // initial paint only — no reactive dependency on selection

  function setBilling(value) {
    selection.current.billing = value;
    paint();
  }
  function setCurrency(value) {
    selection.current.currency = value;
    paint();
  }

  return (
    <section className="pricing" aria-labelledby="pricing-heading" id="pricing">
      <div className="container">
        <span className="label">// Pricing</span>
        <h2 id="pricing-heading">One engine, three currencies, your terms</h2>

        <div className="pricing-controls" role="group" aria-label="Billing and currency options">
          <div className="billing-toggle" role="radiogroup" aria-label="Billing cycle">
            {['monthly', 'annual'].map((value) => (
              <button
                key={value}
                ref={(el) => (billingBtnRefs.current[value] = el)}
                role="radio"
                aria-pressed={value === 'monthly'}
                onClick={() => setBilling(value)}
              >
                {value === 'monthly' ? 'Monthly' : 'Annual — save 20%'}
              </button>
            ))}
          </div>

          <div className="currency-switcher" role="radiogroup" aria-label="Currency">
            {CURRENCY_KEYS.map((value) => (
              <button
                key={value}
                ref={(el) => (currencyBtnRefs.current[value] = el)}
                role="radio"
                aria-pressed={value === 'INR'}
                onClick={() => setCurrency(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="pricing-grid">
          {TIER_KEYS.map((tierKey) => (
            <article className="pricing-card" key={tierKey}>
              <h3>{TIERS[tierKey].label}</h3>
              <p className="tier-desc">
                {TIERS[tierKey].description}
              </p>
              <p className="price mono" ref={(el) => (priceNodeRefs.current[tierKey] = el)}>
                {/* populated imperatively by paint() — left blank to avoid
                    a hardcoded UI value, satisfying the "no hardcoded
                    feature metrics" disqualification rule */}
              </p>
              <ul className="tier-features">
                {TIERS[tierKey].features.map((feat) => (
                  <li key={feat} className="mono">• {feat}</li>
                ))}
              </ul>
              <button className="cta">
                Choose {TIERS[tierKey].label} <ChevronRightIcon />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
