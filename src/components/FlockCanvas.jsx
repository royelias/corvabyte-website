import { useEffect, useRef } from 'react';
import useCanvas from '../hooks/useCanvas.js';

// Drifting network of nodes; links brighten and nodes scatter near the pointer.
function setup({ w, h }) {
  const n = Math.round(Math.min(110, (w * h) / 11000));
  return Array.from({ length: n }, () => ({
    x: Math.random() * w, y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
    r: Math.random() * 1.4 + 0.5,
  }));
}

export default function FlockCanvas() {
  const mouse = useRef({ x: -9999, y: -9999 });

  const draw = (ctx, { w, h }, nodes, reduced) => {
    const m = mouse.current;
    ctx.clearRect(0, 0, w, h);

    if (!reduced) {
      for (const p of nodes) {
        const dx = p.x - m.x, dy = p.y - m.y, d2 = dx * dx + dy * dy;
        if (d2 < 22000) { p.vx += (dx / d2) * 0.6; p.vy += (dy / d2) * 0.6; }
        p.vx = p.vx * 0.985 + (Math.random() - 0.5) * 0.01;
        p.vy = p.vy * 0.985 + (Math.random() - 0.5) * 0.01;
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10; if (p.y > h + 10) p.y = -10;
      }
    }

    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d >= 120) continue;
        const near = Math.hypot((a.x + b.x) / 2 - m.x, (a.y + b.y) / 2 - m.y);
        const boost = near < 200 ? (1 - near / 200) * 0.5 : 0;
        ctx.strokeStyle = `rgba(45,140,255,${(1 - d / 120) * (0.14 + boost)})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
    for (const p of nodes) {
      ctx.fillStyle = Math.hypot(p.x - m.x, p.y - m.y) < 160 ? '#bfe0ff' : 'rgba(191,224,255,.55)';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
  };

  const { ref } = useCanvas(setup, draw);

  useEffect(() => {
    const host = ref.current.parentElement;
    const move = (e) => {
      const r = ref.current.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const leave = () => { mouse.current = { x: -9999, y: -9999 }; };
    host.addEventListener('pointermove', move);
    host.addEventListener('pointerleave', leave);
    return () => { host.removeEventListener('pointermove', move); host.removeEventListener('pointerleave', leave); };
  }, [ref]);

  return <canvas ref={ref} aria-hidden="true" />;
}
