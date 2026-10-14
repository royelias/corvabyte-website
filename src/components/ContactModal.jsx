import { useEffect, useRef, useState } from 'react';

const CONTACT_EMAIL = 'hello@corvabyte.com';
const FORMBOOST_ENDPOINT = 'https://formboost.app/f/snysqg6d';

export default function ContactModal({ onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data._subject = 'Project inquiry from corvabyte.com';

    setStatus('sending');
    try {
      const res = await fetch(FORMBOOST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Formboost submission failed (${res.status})`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
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
          Leave your email or mobile number and a short note. We’ll get back to you shortly.
        </p>
        {status === 'sent' ? (
          <p className="contact-form-status contact-form-sent" role="status">
            Thanks, your message is on its way. We’ll be in touch soon.
          </p>
        ) : (
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
            <input type="text" name="_honey" className="contact-form-hp" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'} <span aria-hidden="true">→</span>
            </button>
            {status === 'error' && (
              <p className="contact-form-status" role="alert">
                Something went wrong. Please try again or write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            )}
          </form>
        )}
      </div>
    </dialog>
  );
}
