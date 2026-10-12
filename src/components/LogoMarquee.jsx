import { clients } from '../data/content.js';

export default function LogoMarquee() {
  // The list is rendered twice so the CSS loop is seamless; the copy is hidden from screen readers.
  return (
    <div className="logos" aria-label="Clients (placeholder names)">
      <div className="logos-track">
        {[...clients, ...clients].map((name, i) => (
          <span className="logo-item" key={i} aria-hidden={i >= clients.length || undefined}>
            <i />{name}
          </span>
        ))}
      </div>
    </div>
  );
}
