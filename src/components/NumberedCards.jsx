/** Grid of 01–04 cards used by "How I work" and "What I worked on". */
export default function NumberedCards({ items }) {
  return (
    <div className="grid-cards" data-reveal="stagger">
      {items.map((item, i) => (
        <div className="card" key={item.title}>
          <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="h-card">{item.title}</h3>
          <p className="body-sm">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
