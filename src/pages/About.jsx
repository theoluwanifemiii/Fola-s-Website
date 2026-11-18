import Ghost from '../components/Ghost.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import Marker from '../components/Marker.jsx';
import NumberedCards from '../components/NumberedCards.jsx';
import FooterLine, { COPYRIGHT, EMAIL } from '../components/FooterLine.jsx';
import { Tag, TagList } from '../components/Tags.jsx';
import { Link } from 'react-router-dom';
import usePageTitle from '../components/usePageTitle.js';

const TIMELINE = [
  { role: 'AUDIT TRAINEE', text: 'auditing firm. financial analysis, reporting and the importance of getting the details right.', years: '[YEARS]' },
  { role: 'RESEARCH ANALYST', text: 'financial services. investment research and structured thinking.', years: '[YEARS]' },
  { role: 'WRITER & COPYWRITER', text: 'technology, insurance and financial services. ux writing, articles and campaigns.', years: '[YEARS]' },
  { role: 'PRAMIE TECHNOLOGIES', text: 'co-founder, product & operations lead, editor of the pramie pub.', years: '[YEARS]' },
  { role: 'VASCAN', text: 'co-founder, product & growth leadership across a four-product art-tech ecosystem.', years: '[YEARS]' },
  { role: 'HALVEST', text: 'business & operations manager, working closely with leadership on planning and delivery.', years: '[YEARS]' },
  { role: 'MEDICARE SUPPLY CHAIN', text: 'product marketing & app operations manager. a b2b pharma marketplace, 0 to 1.', current: true },
];

const HABITS = [
  { title: 'UNDERSTAND THE PROBLEM FIRST', text: "research, conversations and business context before any solution. what customers ask for isn't always the problem they need solved." },
  { title: 'MAKE THE COMPLICATED CLEAR', text: 'engineers, executives, customers or partners: ideas clear enough for people to make good decisions.' },
  { title: 'CONNECT PLANNING WITH EXECUTION', text: "strategy needs ownership, timelines, communication and follow through. i'm comfortable doing the thinking and the practical work." },
  { title: 'KEEP LEARNING', text: "i've worked across several industries because i'm interested in new businesses, people and problems." },
];

const INTERESTS = ['POET', '14 COLLECTIONS', 'READER', 'LITERARY COMMUNITIES', 'SPORTS', 'TECH & BUSINESS', 'CURRENT AFFAIRS', 'COOKING'];

export default function About() {
  usePageTitle('Fọlábòmí · About');
  return (
    <>
      <div className="intro">
        <Ghost>ABOUT</Ghost>
        <SiteHeader current="about" />
        <section className="page-intro">
          <div className="page-intro__main">
            <Marker>the long version</Marker>
            <h1 className="page-title">CURIOUS ABOUT HOW THINGS WORK. EVEN MORE CURIOUS HOW TO MAKE THEM BETTER.</h1>
            <div className="split body">
              <p>my name is abdulwahab olúfọlábòmí sanuth, though i usually go by fọlábòmí. i'm a product, marketing and operations professional, entrepreneur and writer based in lagos.</p>
              <p>my journey hasn't followed one straight line. finance and investment research first, then years of writing and communication, then deeper into technology, product, operations and strategy. that range shapes how i work.</p>
            </div>
          </div>
          <figure className="portrait">
            <img className="photo" src="/img/presenting-profile.jpg" width="1790" height="1800" alt="Fọlábòmí in profile, presenting to a room" />
            <span className="sticker">AKA FỌLÁ</span>
          </figure>
        </section>
      </div>

      <main>
        <section className="section section--rule">
          <div className="section-head">
            <h2 className="display">HOW I GOT HERE</h2>
            <p className="section-head__note" style={{ maxWidth: '40ch' }}>
              different industries. different responsibilities. one recurring interest: understanding problems and doing the work to solve them.
            </p>
          </div>
          <ol className="rows timeline">
            {TIMELINE.map((step, i) => (
              <li key={step.role} className={step.current ? 'timeline__current' : undefined}>
                <span className="timeline__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="timeline__role">{step.role}</span>
                <span className="timeline__desc">{step.text}</span>
                {step.current ? <Tag size="xs" accent>NOW</Tag> : <Tag size="xs">{step.years}</Tag>}
              </li>
            ))}
          </ol>
        </section>

        <section className="section section--flush-top">
          <div className="section-head">
            <h2 className="display">HOW I WORK</h2>
            <Marker small style={{ fontSize: 28, alignSelf: 'auto' }}>four habits</Marker>
          </div>
          <NumberedCards items={HABITS} />
        </section>

        <section className="section section--rule side-by-side">
          <h2 className="display">OUTSIDE WORK</h2>
          <div>
            <TagList items={INTERESTS} solidFirst />
            <p className="body" style={{ maxWidth: '58ch' }}>
              i'm an author, poet and reader. i enjoy fiction, creative communities, conversations about books and the
              occasional chance to get dramatic with words. i also appreciate good food, especially when i get to do the
              cooking. i don't see creativity and analytical thinking as opposites. some of my most useful skills came
              from learning to work with both.
            </p>
            <Link className="btn" to="/corner" style={{ alignSelf: 'flex-start' }}>VISIT FỌLÁ'S CORNER →</Link>
          </div>
        </section>
      </main>

      <footer id="contact" className="dark contact-strip">
        <div className="contact-strip__row">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Marker tone="dark">say hello</Marker>
            <a className="contact-strip__email" href={`mailto:${EMAIL}`}>{EMAIL.toUpperCase()}</a>
          </div>
          <div className="tags">
            <a className="btn" href="#contact">LINKEDIN</a>
            <a className="btn btn--light" href="#contact">VIEW CV</a>
          </div>
        </div>
        <FooterLine>
          <p>{COPYRIGHT} · LAGOS, NIGERIA</p>
        </FooterLine>
      </footer>
    </>
  );
}
