// The card's glow follows the pointer through the --mx / --my custom properties.
export default function CaseCard({ tag, figure, unit, title, quote, cite }) {
  const onPointerMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <article className="case" onPointerMove={onPointerMove}>
      <span className="tag">{tag}</span>
      <div className="big">{figure}<span>{unit}</span></div>
      <h3>{title}</h3>
      <blockquote>
        “{quote}”
        <cite>{cite}</cite>
      </blockquote>
    </article>
  );
}
