// ============================================================
// Feature 1 — Matrix-Driven Pricing
// Pure data + pure functions. Nothing in this file touches the DOM,
// so it's trivially testable and trivially reusable from any framework.
// ============================================================

// Base monthly rate per tier, in INR (our reference currency).
export const TIERS = {
  starter: {
    label: 'Developer',
    baseINR: 1200,
    description: 'For individuals building and testing autonomous single-node pipelines.',
    features: ['3 active agents', '10,000 runs/month', 'Standard connectors', 'Community support'],
  },
  pro: {
    label: 'Production',
    baseINR: 4500,
    description: 'For growing teams automating core operational workloads and databases.',
    features: ['Unlimited agents', '100,000 runs/month', 'Advanced AI routing', 'Next-business-day SLA'],
  },
  scale: {
    label: 'Enterprise',
    baseINR: 12000,
    description: 'For high-throughput requirements needing isolated clusters and custom SLA.',
    features: ['Dedicated execution environments', 'Custom security integrations', 'Dedicated support engineer', 'Custom SLA agreements'],
  },
};

// Multi-dimensional conversion + regional tariff matrix.
// rate: INR -> currency conversion factor
// tariff: additional regional pricing adjustment (e.g. payment processing,
// import/export cost modelling for SaaS billing in that region)
export const CURRENCY_MATRIX = {
  INR: { symbol: '₹', rate: 1,     tariff: 1.0 },
  USD: { symbol: '$', rate: 0.012, tariff: 1.18 },
  EUR: { symbol: '€', rate: 0.011, tariff: 1.22 },
};

export const ANNUAL_DISCOUNT_MULTIPLIER = 0.8; // flat 20% off annual billing

/**
 * Computes a final display price.
 * @param {'starter'|'pro'|'scale'} tierKey
 * @param {'monthly'|'annual'} billing
 * @param {'INR'|'USD'|'EUR'} currencyKey
 * @returns {{ amount: number, symbol: string, suffix: string }}
 */
export function computePrice(tierKey, billing, currencyKey) {
  const tier = TIERS[tierKey];
  const currency = CURRENCY_MATRIX[currencyKey];
  if (!tier || !currency) throw new Error('Invalid tier/currency key');

  const monthlyConverted = tier.baseINR * currency.rate * currency.tariff;

  if (billing === 'annual') {
    const annualTotal = monthlyConverted * 12 * ANNUAL_DISCOUNT_MULTIPLIER;
    return { amount: annualTotal, symbol: currency.symbol, suffix: '/yr' };
  }
  return { amount: monthlyConverted, symbol: currency.symbol, suffix: '/mo' };
}

export function formatPrice({ amount, symbol, suffix }) {
  const rounded = amount >= 1000 ? Math.round(amount) : Math.round(amount * 100) / 100;
  return `${symbol}${rounded.toLocaleString()}${suffix}`;
}
