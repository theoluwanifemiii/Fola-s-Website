import { Link } from 'react-router-dom';
import Ghost from '../components/Ghost.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import Marker from '../components/Marker.jsx';
import NumberedCards from '../components/NumberedCards.jsx';
import FooterLine, { COPYRIGHT, EMAIL } from '../components/FooterLine.jsx';
import { ArrowRight } from '../components/Icons.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { CountUp, SplitWords } from '../components/Motion.jsx';

const META = [
  ['ROLE', 'product marketing & app operations manager'],
  ['INDUSTRY', 'health-tech, b2b e-commerce'],
  ['FOCUS', 'product marketing, user research, product ops, go to market'],
  ['STAGE', '0 to 1 rollout, ongoing'],
];

const WORKSTREAMS = [
  { title: 'UNDERSTANDING THE MARKET', text: 'led research with 100+ pharmacies on needs, workflows and adoption barriers. the findings shaped segmentation, requirements, priorities and launch planning.' },
  { title: 'CUSTOMERS INTO PRODUCT', text: 'working with product, engineering and operations to turn market feedback into product decisions on onboarding, inventory visibility, logistics and trust.' },
  { title: 'READY FOR MARKET', text: 'positioning, website messaging, customer education, onboarding, field activation and materials for commercial teams.' },
  { title: 'APP OPERATIONS', text: 'coordinating pharmacy onboarding, supplier workflows, retention planning and customer-facing processes.' },
];

const OUTCOMES = [
  'positioning and go to market materials for the platform',
  'channels for gathering and sharing market feedback',
  'product requirements and operational planning for the 0 to 1 rollout',
  '“why good products fail”, presented to frame adoption as the real finish line',
];

export default function MedicareCaseStudy() {
  usePageTitle('Case study · Medicare Supply Chain · Fọlábòmí');
  return (
    <>
      <div className="intro">
        <Ghost size="clamp(80px, 17vw, 270px)">MEDICARE</Ghost>
        <SiteHeader current="work" />
        <section className="case-intro">
          <Link className="link-plain" to="/#work" style={{ alignSelf: 'flex-start' }}>← ALL WORK</Link>
          <Marker>case study, now</Marker>
          <SplitWords as="h1" className="case-title" text="TAKING A PHARMACEUTICAL MARKETPLACE TO MARKET" />
          <dl className="meta-grid" data-reveal="stagger" style={{ '--d': 500 }}>
            {META.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <main>
        <section className="case-hero">
          <figure data-reveal="photo">
            <img className="photo" src="/img/medicare-poor-timing.jpg" width="1800" height="1513" alt="Fọlábòmí explaining a slide titled Reason 7: Poor Timing" />
            <figcaption className="sticker">“WHY GOOD PRODUCTS FAIL”</figcaption>
          </figure>
        </section>

        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="grid-cards" style={{ '--min': '460px', '--step': '120ms' }} data-reveal="stagger">
            <div className="card card--roomy">
              <h2 className="h-block">THE CHALLENGE</h2>
              <p className="body">pharmaceutical distribution connects suppliers, distributors and pharmacies. a marketplace for it needs more than listings and checkout. it means understanding buying habits, business relationships, product availability, operational constraints and the concerns that decide adoption.</p>
            </div>
            <div className="card card--roomy">
              <h2 className="h-block">MY ROLE</h2>
              <p className="body">i lead product marketing and support app operations for a b2b pharmaceutical e-commerce platform: understanding the market, informing product decisions, building the go to market strategy and getting the business ready for adoption.</p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="section-head" style={{ marginBottom: 32 }}>
            <h2 className="display" data-reveal>WHAT I WORKED ON</h2>
            <Marker small style={{ fontSize: 28, alignSelf: 'auto' }}>four workstreams</Marker>
          </div>
          <NumberedCards items={WORKSTREAMS} />
        </section>

        <section className="photo-pair grid-cards" style={{ '--min': '420px', '--step': '150ms' }} data-reveal="stagger">
          <img className="photo" src="/img/presenting-profile.jpg" width="1790" height="1800" alt="Fọlábòmí in profile, presenting to the team" style={{ objectPosition: '50% 30%' }} loading="lazy" />
          <img className="photo" src="/img/medicare-adoption-slide.jpg" width="1800" height="1244" alt="Fọlábòmí beside a slide reading Building gets us to launch, adoption gets us to impact" style={{ objectPosition: '35% 50%' }} loading="lazy" />
        </section>

        <section className="section side-by-side outcomes" style={{ paddingBottom: 0 }}>
          <div className="outcomes__stat">
            <h2 className="h-block">OUTCOMES SO FAR</h2>
            <p className="big-number"><CountUp to={100} /><span className="accent">+</span></p>
            <p className="body-sm" style={{ lineHeight: 1.5, maxWidth: '30ch' }}>pharmacies researched to inform product and market decisions</p>
          </div>
          <ul className="rows" style={{ gap: 0 }} data-reveal="stagger">
            {OUTCOMES.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </section>

        <section className="dark section lesson">
          <Marker tone="dark">lesson learnt</Marker>
          <SplitWords as="blockquote" className="statement" text="GO TO MARKET GETS STRONGER WHEN IT STARTS WITH WHAT CUSTOMERS ACTUALLY DO, NOT WHAT A BUSINESS ASSUMES THEY'LL DO." />
        </section>
      </main>

      <footer id="contact" className="contact-strip">
        <Link className="next-case" to="/#work">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p className="eyebrow">NEXT CASE STUDY</p>
            <p className="next-case__name" data-reveal>VASCAN</p>
            <p className="body-sm">four products, one art-tech ecosystem</p>
          </div>
          <ArrowRight />
        </Link>
        <FooterLine>
          <p>{COPYRIGHT}</p>
          <a href={`mailto:${EMAIL}`} style={{ textDecoration: 'none' }}>{EMAIL.toUpperCase()}</a>
          <p>LAGOS, NIGERIA</p>
        </FooterLine>
      </footer>
    </>
  );
}
