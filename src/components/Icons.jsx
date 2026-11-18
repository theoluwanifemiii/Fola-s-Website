const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const ArrowDown = ({ size = 14 }) => (
  <svg width={size} height={size} {...base}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
);

export const ArrowRight = ({ size = 56 }) => (
  <svg width={size} height={size} {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
