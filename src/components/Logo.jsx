import cMark from '../assets/logo/c-mark-transparent.png';
 

// The Corvabyte mark: the stylised "C".
export function BrandMark({ size, className }) {
  return (
    <img src={cMark} height={size} className={className} alt="" aria-hidden="true" />
  );
}

export function Wordmark({ className = '' }) {
  return <span className={`wm ${className}`}>Corvabyte</span>;
}
