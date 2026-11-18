/** The oversized pale word behind each page intro. */
export default function Ghost({ children, size }) {
  return (
    <p className="ghost" aria-hidden="true" style={size ? { '--ghost-size': size } : undefined}>
      {children}
    </p>
  );
}
