/** A slow, endless band of words. Pauses on hover; static for reduced motion. */
export default function Ticker({ items }) {
  const run = (hidden) => (
    <div className="ticker__run" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span className="ticker__item" key={item}>
          {item}
          <span className="ticker__sep" aria-hidden="true">✳</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker" role="marquee" aria-label={items.join(', ')}>
      <div className="ticker__track">
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}
