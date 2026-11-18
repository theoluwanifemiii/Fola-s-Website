const SIZE = { md: '', sm: ' tag--sm', xs: ' tag--xs' };

export function Tag({ children, size = 'md', solid, accent, href }) {
  const cls = 'tag' + SIZE[size] + (solid ? ' tag--solid' : '') + (accent ? ' tag--accent' : '');
  return href ? <a className={cls} href={href}>{children}</a> : <span className={cls}>{children}</span>;
}

/** A wrapping row of tags. The first item can be made solid with `solidFirst`. */
export function TagList({ items, size, solidFirst, reveal = true }) {
  return (
    <div className="tags" data-reveal={reveal ? 'stagger' : undefined}>
      {items.map((t, i) => (
        <Tag key={t} size={size} solid={solidFirst && i === 0}>{t}</Tag>
      ))}
    </div>
  );
}
