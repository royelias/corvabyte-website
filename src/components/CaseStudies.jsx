import SectionHead from './SectionHead.jsx';
import CaseCard from './CaseCard.jsx';
import { cases } from '../data/content.js';

export default function CaseStudies() {
  return (
    <section className="block flush-top" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <SectionHead eyebrow="Selected work" title="What clients get working with us" id="work-title">
          Real improvements, transparent delivery, and software engineered for demanding environments.
        </SectionHead>
        <div className="cases">
          {cases.map((c) => <CaseCard key={c.tag} {...c} />)}
        </div>
      </div>
    </section>
  );
}
