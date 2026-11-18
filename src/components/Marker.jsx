/** Hand-written Permanent Marker annotation. tone: 'accent' | 'ink' | 'dark' */
export default function Marker({ children, tone = 'accent', small, style, className = '' }) {
  const cls = ['marker', tone === 'ink' && 'marker--ink', tone === 'dark' && 'marker--on-dark', small && 'marker--tilt-sm', className]
    .filter(Boolean)
    .join(' ');
  return <p className={cls} style={style}>{children}</p>;
}
