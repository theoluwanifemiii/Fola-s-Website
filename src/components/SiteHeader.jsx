import { Link } from 'react-router-dom';

/**
 * current: 'work' | 'about' | 'corner' | undefined
 * talkHref: where LET'S TALK points (defaults to this page's #contact)
 */
export default function SiteHeader({ current, talkHref = '#contact' }) {
  const aria = (key) => (current === key ? { 'aria-current': 'page' } : {});
  return (
    <header className="site-header">
      <Link className="logo" to="/">FỌLÁBÒMÍ.</Link>
      <nav className="nav" aria-label="Main">
        <Link className="nav__link" to="/#work" {...aria('work')}>WORK</Link>
        <Link className="nav__link" to="/about" {...aria('about')}>ABOUT</Link>
        <Link className="nav__link" to="/corner" {...aria('corner')}>FỌLÁ'S CORNER</Link>
        <Link className="nav__link nav__link--cta" to={talkHref}>LET'S TALK</Link>
      </nav>
    </header>
  );
}
