import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion.js';

// Shows the final value at rest; counts up from zero only when scrolled into view later.
export default function CountUp({ value, decimals = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(value);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const born = performance.now();
    let frame;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      if (performance.now() - born < 400) return; // already on screen at load
      const t0 = performance.now();
      const run = (now) => {
        const t = Math.min((now - t0) / 1400, 1);
        setShown(value * (1 - Math.pow(1 - t, 3)));
        if (t < 1) frame = requestAnimationFrame(run);
      };
      frame = requestAnimationFrame(run);
    }, { threshold: 0.6 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [value, reduced]);

  return <span ref={ref}>{shown.toFixed(decimals)}</span>;
}
