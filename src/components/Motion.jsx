import { Fragment, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Watches every [data-reveal] element on the current page and adds .is-in when it
 * scrolls into view. Children of data-reveal="stagger" get an index (--i) so they
 * arrive one after another. Also publishes scroll position as --sy for parallax.
 */
export function MotionManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    els.forEach((el) => {
      if (el.dataset.reveal === 'stagger') {
        Array.from(el.children).forEach((child, i) => child.style.setProperty('--i', i));
      }
    });

    if (reducedMotion() || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }

    // A fully clipped "write" note has no visible area to intersect, so watch its parent.
    const targets = new Map();
    els.forEach((el) => {
      const target = el.dataset.reveal === 'write' ? el.parentElement : el;
      if (!targets.has(target)) targets.set(target, []);
      targets.get(target).push(el);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targets.get(entry.target).forEach((el) => el.classList.add('is-in'));
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    targets.forEach((_, target) => io.observe(target));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (reducedMotion()) return undefined;
    const root = document.documentElement;
    let frame = 0;
    const update = () => {
      frame = 0;
      root.style.setProperty('--sy', String(Math.min(window.scrollY, 1600)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

/** Counts from 0 to `to` once it scrolls into view. */
export function CountUp({ to, duration = 1200 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(reducedMotion() ? to : 0);

  useEffect(() => {
    if (reducedMotion()) return undefined;
    const el = ref.current;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4);
        setValue(Math.round(eased * to));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} aria-label={String(to)}>
      <span aria-hidden="true">{value}</span>
    </span>
  );
}

/** Renders a sentence so each word rises in turn. */
export function SplitWords({ text, as: Tag = 'p', className }) {
  return (
    <Tag className={className} data-reveal="stagger" aria-label={text}>
      {text.split(' ').map((word, i) => (
        <Fragment key={i}>
          <span className="word" aria-hidden="true">{word}</span>{' '}
        </Fragment>
      ))}
    </Tag>
  );
}

/** Lets a decorative element (the name tag) be picked up and moved with mouse or touch. */
export function useDraggable() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let startX = 0, startY = 0, baseX = 0, baseY = 0, x = 0, y = 0, dragging = false;

    const down = (e) => {
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      baseX = x;
      baseY = y;
      el.setPointerCapture(e.pointerId);
      el.classList.add('is-dragging');
    };
    const move = (e) => {
      if (!dragging) return;
      x = baseX + e.clientX - startX;
      y = baseY + e.clientY - startY;
      el.style.translate = `${x}px ${y}px`;
    };
    const up = (e) => {
      dragging = false;
      el.classList.remove('is-dragging');
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    };

    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    return () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
    };
  }, []);

  return ref;
}
