// The Corvabyte mark: a perched raven whose leg is a circuit trace ending in a node.
export function RavenMark({ size, className }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className} aria-hidden="true">
      <path
        fill="#2d8cff"
        d="M3 61 22 35l8-11 3-10c2-5 6-7 10-7l7 2.5c4.5.3 8.5 1.8 11 4.5l-.8 1.6L50 15.2c-2 .3-3 1.3-3 2.8l2.5 6c1 3 0 5.5-2 7.5L36 40 12 51l-5 9.5z"
      />
      <path
        d="M30 24c5-1 9 1 10 4.5s-.5 6-3.5 8.5L14 48"
        fill="none" stroke="#07090d" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"
      />
      <path d="M40 10.8 46 11.2 42 13.4z" fill="#07090d" />
      <g fill="none" stroke="#2d8cff" strokeWidth="2.2">
        <path d="M33 41v6l5 5h4" />
        <rect x="42" y="48.5" width="7" height="7" />
      </g>
      <rect x="44.3" y="50.8" width="2.4" height="2.4" fill="#2d8cff" />
    </svg>
  );
}

export function Wordmark({ className = '' }) {
  return <span className={`wm ${className}`}>Corvabyte</span>;
}
