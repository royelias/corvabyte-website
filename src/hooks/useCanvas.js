import { useEffect, useRef } from 'react';
import useReducedMotion from './useReducedMotion.js';

// Sizes a canvas to its box (retina-aware) and runs `draw` every frame.
// `setup(size, prevState)` runs on mount and resize and returns the state `draw` receives.
// With reduced motion, draws a single still frame (and again whenever `deps` change).
export default function useCanvas(setup, draw, deps = []) {
  const ref = useRef(null);
  const state = useRef(null);
  const reduced = useReducedMotion();
  const api = useRef({ setup, draw });
  api.current = { setup, draw };

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let frame, size;

    const render = () => api.current.draw(ctx, size, state.current, reduced);
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      size = { w: r.width, h: r.height };
      canvas.width = size.w * dpr;
      canvas.height = size.h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      state.current = api.current.setup(size, state.current);
      if (reduced) render();
    };
    const loop = () => { render(); frame = requestAnimationFrame(loop); };

    resize();
    if (!reduced) loop();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(frame); ro.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, ...(reduced ? deps : [])]);

  return { ref, state };
}
