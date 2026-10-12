import { RavenMark, Wordmark } from './Logo.jsx';
import Button from './Button.jsx';
import { navLinks } from '../data/content.js';

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Corvabyte home">
          <RavenMark />
          <Wordmark />
        </a>
        <ul>
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <Button href="#contact" arrow>Start a project</Button>
      </div>
    </header>
  );
}
