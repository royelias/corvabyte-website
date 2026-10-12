import { useRef, useState } from 'react';
import SectionHead from './SectionHead.jsx';
import ServiceMock from './ServiceMock.jsx';
import Chip from './Chip.jsx';
import { services } from '../data/content.js';

export default function ServicesTour() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const select = (i, focus) => {
    setActive(i);
    if (focus) tabRefs.current[i].focus();
  };

  // Arrow keys, Home and End move between tabs (WAI-ARIA tabs pattern).
  const onKeyDown = (e) => {
    const last = services.length - 1;
    const next = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select((next + services.length) % services.length, true);
  };

  const s = services[active];

  return (
    <section className="block flush-top" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <SectionHead eyebrow="Services" title="One team for the whole product." id="services-title">
          Pick a discipline to see what we deliver and the tools we deliver it with.
        </SectionHead>

        <div className="tour">
          <div className="tabs" role="tablist" aria-label="Services" onKeyDown={onKeyDown}>
            {services.map((svc, i) => (
              <button
                key={svc.id}
                ref={(el) => (tabRefs.current[i] = el)}
                className="tab"
                role="tab"
                id={`tab-${svc.id}`}
                aria-controls={`panel-${svc.id}`}
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                onClick={() => select(i)}
              >
                <small>{svc.kicker}</small>{svc.tab}
              </button>
            ))}
          </div>

          {/* key remounts the panel so its entry animation replays on each tab change */}
          <div className="panel enter" role="tabpanel" id={`panel-${s.id}`} aria-labelledby={`tab-${s.id}`} key={s.id}>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="deliv">
                {s.deliverables.map(([name, time]) => (
                  <li key={name}><span>{name}</span><span>{time}</span></li>
                ))}
              </ul>
              <div className="stack">{s.stack.map((t) => <Chip key={t}>{t}</Chip>)}</div>
            </div>
            <ServiceMock id={s.id} />
          </div>
        </div>
      </div>
    </section>
  );
}
