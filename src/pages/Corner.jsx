import { Link } from 'react-router-dom';
import Ghost from '../components/Ghost.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import Marker from '../components/Marker.jsx';
import FooterLine, { COPYRIGHT } from '../components/FooterLine.jsx';
import { TagList } from '../components/Tags.jsx';
import usePageTitle from '../components/usePageTitle.js';

// Cover colour for each of the 14 collections, in shelf order.
// '' = white, 'accent' = brand red, 'ink' = black, 'stone' = warm grey.
const COVER_LOOKS = ['accent', '', 'ink', 'stone', '', 'ink', 'stone', 'accent', 'ink', '', 'stone', 'ink', '', 'accent'];
const KNOWN_TITLES = { 0: 'COLOURS OF THE HEART', 13: 'THE VALENTINE NOTES V' };

const BOOKS = COVER_LOOKS.map((look, i) => ({
  num: String(i + 1).padStart(2, '0'),
  title: KNOWN_TITLES[i] ?? '[COLLECTION TITLE]',
  meta: i === 13 ? 'the 14th collection · ebook' : 'ebook · [year]',
  look,
}));

const ARCHIVE = [
  { name: 'FICTION', text: "for the stories that won't leave me alone. relationships, choices, memory and regret. some are quiet. others are much less forgiving.", cta: 'READ ON MEDIUM →', href: '#archive' },
  { name: 'NONFICTION', text: 'observations, experiences and occasional complaints. occasionally, i even arrive at a conclusion.', cta: 'READ ON MEDIUM →', href: '#archive' },
  { name: 'POETRY', text: 'a few words can carry quite a lot. standalone poems on love, loss, hope and nostalgia.', cta: 'READ THE POEMS →', href: '#archive' },
  { name: 'BOOKS', text: 'fourteen published anthologies, with descriptions and where to buy them.', cta: 'SEE THE SHELF →', href: '#shelf' },
];

function Book({ book }) {
  return (
    <a className="book" href="#shelf">
      <div className={'book__cover' + (book.look ? ` book__cover--${book.look}` : '')}>
        <span className="book__no">NO. {book.num}</span>
        <p className="book__title">{book.title}</p>
        <p className="book__author">FỌLÁBÒMÍ ÀMỌ̀Ó</p>
      </div>
      <div className="book__caption">
        <p>{book.title}</p>
        <p>{book.meta}</p>
      </div>
    </a>
  );
}

export default function Corner() {
  usePageTitle("Fọlá's Corner · Fọlábòmí");
  return (
    <>
      <div className="intro">
        <Ghost size="clamp(100px, 22vw, 340px)">POETRY</Ghost>
        <SiteHeader current="corner" talkHref="/#contact" />
        <section className="page-intro corner-intro">
          <div className="page-intro__main">
            <Marker>the less corporate side</Marker>
            <h1 className="corner-title">FỌLÁ'S<br />CORNER</h1>
            <p className="corner-lede">because there's more to me than product roadmaps, business strategies and spreadsheets.</p>
          </div>
          <div className="corner-aside">
            <TagList items={['POET', 'STORYTELLER', 'READER', 'OVERTHINKER']} solidFirst />
            <p className="body-sm" style={{ lineHeight: 1.6, maxWidth: '46ch' }}>
              years of writing about love, longing, grief, vulnerability and the strange things people do to themselves
              and one another. sometimes it becomes poetry. sometimes fiction. sometimes essays about ordinary things that
              turn out to be anything but.
            </p>
          </div>
        </section>
      </div>

      <main>
        <section id="shelf" className="section section--rule">
          <div className="section-head">
            <div className="shelf-head">
              <p className="big-number accent" style={{ lineHeight: 0.8 }}>14</p>
              <h2>POETRY COLLECTIONS. ONE SHELF.</h2>
            </div>
            <p className="shelf-note">apparently one wasn't enough</p>
          </div>

          <div className="grid-cards shelf">
            {BOOKS.map((b) => <Book key={b.num} book={b} />)}
          </div>

          <div className="shelf-foot">
            <p>covers are stand-ins until the real artwork arrives.</p>
            <a className="btn btn--solid" href="#shelf">BROWSE &amp; BUY THE COLLECTIONS →</a>
          </div>
        </section>

        <section id="archive" className="section section--flush-top">
          <h2 className="display" style={{ marginBottom: 32 }}>THE ARCHIVE</h2>
          <div style={{ border: '1px solid var(--ink)' }}>
            {ARCHIVE.map((row) => (
              <a key={row.name} className="archive__row" href={row.href}>
                <span className="archive__name">{row.name}</span>
                <span className="archive__desc">{row.text}</span>
                <span className="tag">{row.cta}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="dark confession">
        <Marker tone="dark">a small confession</Marker>
        <p className="statement">I LOVE WORDS. THAT'S PROBABLY WHY I HAVEN'T STOPPED WRITING. AND I DON'T INTEND TO.</p>
        <div className="tags" style={{ marginTop: 40 }}>
          <Link className="btn btn--light" to="/">← BACK TO THE DAY JOB</Link>
          <a className="btn" href="#archive">MEDIUM</a>
        </div>
        <FooterLine>
          <p>{COPYRIGHT} · LAGOS, NIGERIA</p>
        </FooterLine>
      </footer>
    </>
  );
}
