import { useState } from 'react';
import Button from './Button.jsx';
import ContactModal from './ContactModal.jsx';

export default function Closing() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="block closing" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <span className="eyebrow">Start a project</span>
        <h2 id="contact-title">Have an idea? <span className="iri">Let’s build it.</span></h2>
        <div className="hero-cta">
          <button className="btn btn-primary" type="button" onClick={() => setIsContactOpen(true)}>
            Book a call <span className="arr" aria-hidden="true">→</span>
          </button>
          <Button href="#services" variant="ghost">See services</Button>
        </div>
        <p className="contact-line">Or write to <span>hello@corvabyte.com</span></p>
      </div>
      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </section>
  );
}
