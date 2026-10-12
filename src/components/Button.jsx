export default function Button({ href, variant = 'primary', arrow = false, children }) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      {children} {arrow && <span className="arr">→</span>}
    </a>
  );
}
