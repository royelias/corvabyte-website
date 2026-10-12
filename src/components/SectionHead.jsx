export default function SectionHead({ eyebrow, title, id, children }) {
  return (
    <div className="head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={id}>{title}</h2>
      </div>
      <p>{children}</p>
    </div>
  );
}
