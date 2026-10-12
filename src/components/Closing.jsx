import Button from './Button.jsx';

export default function Closing() {
  return (
    <section className="block closing" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <span className="eyebrow">Start a project</span>
        <h2 id="contact-title">Have an idea? <span className="iri">Let’s build it.</span></h2>
        <div className="hero-cta">
          <Button href="#contact" arrow>Book a 30-minute call</Button>
          <Button href="#services" variant="ghost">See services</Button>
        </div>
        <p className="contact-line">Or write to <span>hello@corvabyte.com</span> (placeholder address)</p>
      </div>
    </section>
  );
}
