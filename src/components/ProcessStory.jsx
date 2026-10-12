import { useEffect, useRef, useState } from 'react';
import SectionHead from './SectionHead.jsx';
import MorphCanvas from './MorphCanvas.jsx';
import Chip from './Chip.jsx';
import { steps } from '../data/content.js';

export default function ProcessStory() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  // The step crossing the middle of the viewport becomes the active stage.
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(Number(e.target.dataset.step)); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    stepRefs.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="block" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <SectionHead eyebrow="How a project moves" title="From a rough idea to a product people use." id="process-title">
          Every engagement runs through the same four stages. Scroll to watch the work take shape.
        </SectionHead>

        <div className="story">
          <div className="stage" aria-hidden="true">
            <div className="stage-label">Stage {active + 1} · {steps[active].title}</div>
            <MorphCanvas stage={active} />
            <div className="stage-hud">
              <span>Kickoff</span>
              <span className="bar"><i style={{ width: `${(active + 1) * 25}%` }} /></span>
              <span>Live</span>
            </div>
          </div>

          <div className="steps">
            {steps.map((s, i) => (
              <article
                key={s.title}
                ref={(el) => (stepRefs.current[i] = el)}
                data-step={i}
                className={`step${i === active ? ' on' : ''}`}
              >
                <span className="k">{s.when}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>{s.tags.map((t) => <Chip as="li" key={t}>{t}</Chip>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
