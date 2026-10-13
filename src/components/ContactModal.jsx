import { useEffect, useRef } from 'react';

const CONTACT_EMAIL = 'hello@corvabyte.com';

export default function ContactModal({ onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const contact = formData.get('contact');
    const message = formData.get('message');
    const subject = encodeURIComponent('Project inquiry');
    const body = encodeURIComponent(`Contact: ${contact}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    dialogRef.current?.close();
  };

  return (
    <dialog
      className="contact-dialog"
      ref={dialogRef}
      aria-labelledby="contact-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className="contact-dialog-content">
        <button
          className="contact-dialog-close"
          type="button"
          aria-label="Close contact form"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
        <span className="eyebrow">Get in touch</span>
        <h2 id="contact-dialog-title">Let’s talk about your project.</h2>
        <p className="contact-dialog-intro">
          Leave your email or mobile number and a short note. We’ll prepare an email for you to send.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-detail">Email or mobile</label>
          <input
            id="contact-detail"
            name="contact"
            type="text"
            autoComplete="email"
            placeholder="you@example.com or +1 555 123 4567"
            required
          />
          <label htmlFor="contact-message">How can we help?</label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            maxLength="1000"
            placeholder="A few details about what you have in mind..."
            required
          />
          <button className="btn btn-primary" type="submit">Open email draft <span aria-hidden="true">→</span></button>
        </form>
      </div>
    </dialog>
  );
}
