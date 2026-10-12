import CountUp from './CountUp.jsx';
import LogoMarquee from './LogoMarquee.jsx';
import { metrics } from '../data/content.js';

export default function Metrics() {
  return (
    <section className="metrics" aria-label="Results at a glance">
      <div className="wrap">
        <div className="grid">
          {metrics.map((m) => (
            <div className="metric" key={m.label}>
              <div className="num">
                <CountUp value={m.value} decimals={m.decimals} />
                <small>{m.suffix}</small>
              </div>
              <div className="lbl">{m.label}</div>
              <div className="src">example figure</div>
            </div>
          ))}
        </div>
      </div>
      <LogoMarquee />
    </section>
  );
}
