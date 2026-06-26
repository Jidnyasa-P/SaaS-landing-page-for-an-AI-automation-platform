import { ChartPieIcon, ArrowTrendingUpIcon, ChevronUpIcon } from './icons';

const STATS = [
  { icon: ChartPieIcon, value: '14ms', label: 'Average execution latency per agent step' },
  { icon: ArrowTrendingUpIcon, value: '12x', label: 'Improvement in data processing throughput' },
  { icon: ChevronUpIcon, value: '99.99%', label: 'SLA uptime for critical automation nodes' },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Platform statistics">
      <div className="container stats-grid">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div className="stat" key={label}>
            <Icon className="stat-icon" />
            <span className="stat-value mono">{value}</span>
            <p className="stat-label">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
