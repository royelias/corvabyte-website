import SectionHead from './SectionHead.jsx';
import CaseCard from './CaseCard.jsx';
import { cases } from '../data/content.js';

export default function CaseStudies() {
  return (
    <section className="block flush-top" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <SectionHead eyebrow="Selected work" title="Results our clients measure." id="work-title">
          Placeholder case studies showing the format. Real projects and quotes go here once confirmed.
        </SectionHead>
        <div className="cases">
          {cases.map((c) => <CaseCard key={c.tag} {...c} />)}
        </div>
      </div>
    </section>
  );
}
