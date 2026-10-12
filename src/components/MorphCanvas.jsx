import { useEffect, useRef } from 'react';
import useCanvas from '../hooks/useCanvas.js';

const N = 168;

// Target positions for each stage: idea cloud, wireframe, code lines, growth curve.
function formation(stage, w, h) {
  const cx = w / 2, cy = h * 0.46, S = Math.min(w, h) * 0.36, out = [];

  if (stage === 0) {
    let seed = 7;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < N; i++) {
      const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * S * 1.1;
      out.push([cx + Math.cos(a) * r * 1.3, cy + Math.sin(a) * r * 0.85, rnd() * 1.8 + 0.6]);
    }
  } else if (stage === 1) {
    const rects = [[-1.25, -0.95, 2.5, 0.28], [-1.25, -0.55, 1.15, 0.95], [0.1, -0.55, 1.15, 0.42], [0.1, -0.02, 1.15, 0.42], [-1.25, 0.55, 2.5, 0.4]];
    const per = Math.floor(N / rects.length);
    rects.forEach((rect, ri) => {
      const [x, y, rw, rh] = rect.map((v) => v * S), peri = 2 * (rw + rh);
      const cnt = ri === rects.length - 1 ? N - out.length : per;
      for (let i = 0; i < cnt; i++) {
        const t = (i / cnt) * peri;
        let px, py;
        if (t < rw) { px = x + t; py = y; }
        else if (t < rw + rh) { px = x + rw; py = y + t - rw; }
        else if (t < 2 * rw + rh) { px = x + rw - (t - rw - rh); py = y + rh; }
        else { px = x; py = y + rh - (t - 2 * rw - rh); }
        out.push([cx + px, cy + py, 1.4]);
      }
    });
  } else if (stage === 2) {
    const lens = [0.9, 0.6, 0.75, 0.4, 0.85, 0.55, 0.7, 0.3, 0.8, 0.5, 0.65, 0.45];
    const indents = [0, 0.15, 0.15, 0.3, 0.15, 0, 0.15, 0.3, 0.3, 0.15, 0, 0];
    const total = lens.reduce((a, b) => a + b);
    lens.forEach((len, r) => {
      const cnt = r === lens.length - 1 ? N - out.length : Math.round((N * len) / total);
      for (let i = 0; i < cnt && out.length < N; i++) {
        const x0 = -1.15 * S + indents[r] * S;
        out.push([cx + x0 + (i / Math.max(cnt - 1, 1)) * len * 2 * S, cy - S * 0.95 + r * ((S * 1.9) / (lens.length - 1)), r % 3 === 0 ? 2.2 : 1.6]);
      }
    });
    while (out.length < N) out.push(out[out.length - 1]);
  } else {
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1), x = -1.3 + t * 2.6, y = 0.9 - Math.pow(t, 2.2) * 1.9 + Math.sin(t * 18) * 0.03;
      out.push([cx + x * S, cy + y * S, 1.2 + t * 1.6]);
    }
  }
  return out;
}

function retarget(parts, stage, w, h, instant) {
  formation(stage, w, h).forEach(([tx, ty, ts], i) => {
    const p = parts[i];
    Object.assign(p, { tx, ty, ts, delay: instant ? 0 : (i % 40) * 1.5 });
    if (instant) Object.assign(p, { x: tx, y: ty, s: ts });
  });
}

export default function MorphCanvas({ stage }) {
  const stageRef = useRef(stage);
  const tick = useRef(0);

  const setup = ({ w, h }, prev) => {
    const parts = prev?.parts ?? Array.from({ length: N }, () => ({}));
    retarget(parts, stage, w, h, true);
    return { parts, w, h };
  };

  const draw = (ctx, { w, h }, { parts }, reduced) => {
    const t = ++tick.current;
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(95,107,122,.12)';
    ctx.lineWidth = 1;
    for (let x = 24; x < w; x += 32) { ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, h); ctx.stroke(); }
    for (let y = 24; y < h; y += 32) { ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(w, y + 0.5); ctx.stroke(); }

    parts.forEach((p, i) => {
      if (p.delay > 0) p.delay--;
      else { p.x += (p.tx - p.x) * 0.075; p.y += (p.ty - p.y) * 0.075; p.s += (p.ts - p.s) * 0.08; }
      const wob = stageRef.current === 0 && !reduced ? Math.sin(t * 0.02 + i) * 0.6 : 0;
      const k = i / N;
      ctx.fillStyle = `rgb(${(45 + 66 * k) | 0},${(140 + 74 * k) | 0},255)`;
      ctx.shadowColor = ctx.fillStyle;
      ctx.shadowBlur = 8;
      ctx.beginPath(); ctx.arc(p.x + wob, p.y + wob, p.s, 0, Math.PI * 2); ctx.fill();
    });
    ctx.shadowBlur = 0;

    if (stageRef.current === 3) {
      const head = parts[N - 1];
      ctx.strokeStyle = 'rgba(191,224,255,.5)';
      ctx.beginPath(); ctx.arc(head.x, head.y, 7 + Math.sin(t * 0.08) * 2, 0, Math.PI * 2); ctx.stroke();
    }
  };

  const { ref, state } = useCanvas(setup, draw, [stage]);

  useEffect(() => {
    if (stageRef.current === stage || !state.current) return;
    stageRef.current = stage;
    const { parts, w, h } = state.current;
    const instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    retarget(parts, stage, w, h, instant);
  }, [stage, state]);

  return <canvas ref={ref} />;
}
