import Ghost from '../components/Ghost.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import Marker from '../components/Marker.jsx';
import WorkCard from '../components/WorkCard.jsx';
import FooterLine, { COPYRIGHT, EMAIL } from '../components/FooterLine.jsx';
import { Tag, TagList } from '../components/Tags.jsx';
import { ArrowDown } from '../components/Icons.jsx';
import usePageTitle from '../components/usePageTitle.js';
import Ticker from '../components/Ticker.jsx';
import { useDraggable, SplitWords } from '../components/Motion.jsx';

const ROLES = ['PRODUCT MANAGER', 'PRODUCT MARKETER', 'OPERATIONS', 'WRITER', '11+ YEARS', 'LAGOS, NIGERIA'];
const SKILLS = ['GO TO MARKET', 'USER RESEARCH', 'ROADMAPS', 'POSITIONING', 'PROCESS DESIGN', 'STAKEHOLDERS', 'UX WRITING', 'CONTENT STRATEGY'];

function Hero() {
  const tagRef = useDraggable();
  return (
    <div className="intro hero">
      <Ghost>ABDULWAHAB</Ghost>
      <SiteHeader />

      <section className="hero__body">
        <div className="hero__col">
          <p className="hero__me">ME</p>
          <div className="tags" data-reveal="stagger" style={{ '--d': 350 }}>
            {ROLES.map((r) => <Tag key={r}>{r}</Tag>)}
            <Tag href={`mailto:${EMAIL}`}>{EMAIL.toUpperCase()}</Tag>
          </div>
          <p className="hero__bio" data-reveal style={{ '--d': 650 }}>
            i started out in audit and investment research, spent years writing for tech, insurance and finance, then
            moved deeper into building products. i co-founded vascan and pramie, ran operations at halvest, and today i
            lead product marketing at medicare supply chain. somewhere in between, i published 14 poetry collections.
          </p>
        </div>

        <div className="hero__portrait">
          <img src="/img/hero-portrait.png" width="1003" height="884" alt="Fọlábòmí in his fila cap and printed agbada, smiling" />
          <div className="name-tag" ref={tagRef} title="Drag me">
            <p className="name-tag__hello">HELLO!</p>
            <p className="name-tag__sub">my name is</p>
            <p className="name-tag__name">FỌLÁBÒMÍ</p>
          </div>
          <p className="name-tag__hint" aria-hidden="true">← drag me</p>
        </div>

        <div className="hero__col hero__col--right" data-reveal="stagger" style={{ '--d': 500, '--step': '120ms' }}>
          <div className="facts">
            <h2 className="h-block">EXPERIENCE</h2>
            <p><strong>medicare supply chain</strong> (now)<br />product marketing &amp; app operations</p>
            <p><strong>halvest financial technologies</strong><br />business &amp; operations manager</p>
            <p><strong>vascan</strong> co-founder, product &amp; growth</p>
            <p><strong>pramie technologies</strong> co-founder, product &amp; ops</p>
          </div>
          <div className="facts">
            <h2 className="h-block">WRITING</h2>
            <p><strong>14 poetry collections</strong> published as ebooks<br /><strong>fiction &amp; nonfiction</strong> on medium</p>
          </div>
          <div className="facts">
            <h2 className="h-block">SKILLS</h2>
            <TagList items={SKILLS} size="sm" reveal={false} />
          </div>
        </div>
      </section>

      <a className="link-plain hero__scroll" href="#work" data-reveal style={{ '--d': 1200 }}>
        SCROLL FOR THE WORK <ArrowDown />
      </a>
    </div>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="section section--rule">
      <div className="section-head">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Marker>the receipts</Marker>
          <h2 className="display" style={{ fontSize: 'clamp(48px, 7vw, 108px)' }} data-reveal>SELECTED WORK</h2>
        </div>
        <p className="section-head__note" data-reveal style={{ '--d': 150 }}>
          products, launches and operations i've helped build, take to market and improve. click any project for the full story.
        </p>
      </div>

      <div className="grid-cards" style={{ '--min': '520px', '--gap': '20px', '--step': '120ms' }} data-reveal="stagger">
        <WorkCard
          to="/work/medicare"
          tags={['PRODUCT MARKETING', 'USER RESEARCH', 'APP OPS']}
          title="MEDICARE SUPPLY CHAIN"
          text="taking a b2b pharmaceutical marketplace to market. 100+ pharmacies researched to shape the product and the launch."
          media={
            <div className="work-card__media work-card__media--photo">
              <img src="/img/medicare-poor-timing.jpg" alt="Fọlábòmí presenting a slide titled Reason 7: Poor Timing" style={{ objectPosition: '40% 35%' }} />
              <span className="sticker work-card__badge">NOW</span>
            </div>
          }
        />

        <WorkCard
          to="/#work"
          tags={['CO-FOUNDER', 'PRODUCT OWNERSHIP', 'GROWTH']}
          title="VASCAN"
          text="four products, one art-tech ecosystem. 150+ businesses, 900+ creatives and 2,500+ artworks on the platform."
          media={
            <div className="work-card__media">
              <Ghost>VASCAN</Ghost>
              <div className="tile-grid">
                <span className="tile">SHOP</span>
                <span className="tile">FOR CRE8IVES</span>
                <span className="tile">FOR BUSINESSES</span>
                <span className="tile tile--solid">ART DEALER</span>
              </div>
            </div>
          }
        />

        <WorkCard
          to="/#work"
          tags={['BUSINESS OPERATIONS', 'PROJECT DELIVERY', 'FINTECH']}
          title="HALVEST"
          text="a fintech website redesign, run from first requirements to final handover, with leadership and an outside vendor kept in step."
          media={
            <div className="work-card__media">
              <Ghost>HALVEST</Ghost>
              <div className="flow">
                {['REQUIREMENTS', 'VENDORS', 'REVIEWS'].map((step) => (
                  <span key={step} style={{ display: 'contents' }}>
                    <span className="tile">{step}</span>
                    <span className="flow__arrow" aria-hidden="true">→</span>
                  </span>
                ))}
                <span className="tile tile--solid">DELIVERED</span>
              </div>
            </div>
          }
        />

        <WorkCard
          to="/#work"
          tags={['CO-FOUNDER', 'CONTENT STRATEGY', 'COMMUNITY']}
          title="A BLANK CANVAS"
          text="an art media platform of articles, interviews, podcasts and webinars. 25,000+ reads in 2026, up from 15,000+ in 2025."
          media={
            <div className="work-card__media">
              <p className="work-card__quote">art is more than the work on the wall</p>
            </div>
          }
        />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="dark contact">
      <Ghost>LET'S TALK</Ghost>
      <div className="contact__inner">
        <div className="contact__pitch">
          <Marker tone="dark">write me!</Marker>
          <SplitWords as="h2" text="OPEN TO PRODUCT, MARKETING & OPS ROLES." />
          <p className="contact__lede" data-reveal style={{ '--d': 300 }}>building something interesting? tell me what you're building. i'd love to hear about it.</p>
        </div>
        <div className="contact__links" data-reveal style={{ '--d': 400 }}>
          <a className="contact__email" href={`mailto:${EMAIL}`}>{EMAIL.toUpperCase()}</a>
          <div className="tags">
            <a className="btn btn--light" href={`mailto:${EMAIL}`}>SEND AN EMAIL</a>
            <a className="btn" href="#contact">LINKEDIN</a>
            <a className="btn" href="#contact">VIEW CV</a>
          </div>
        </div>
      </div>
      <FooterLine>
        <p>{COPYRIGHT}</p>
        <p>BUILDING PRODUCTS. SOLVING PROBLEMS. TELLING STORIES.</p>
        <p>LAGOS, NIGERIA</p>
      </FooterLine>
    </footer>
  );
}

export default function Home() {
  usePageTitle('Fọlábòmí · Product, marketing & operations');
  return (
    <>
      <Hero />
      <Ticker items={['PRODUCT MANAGER', 'building things', 'PRODUCT MARKETER', 'taking them to market', 'OPERATIONS', 'keeping them running', 'WRITER', 'telling the story', 'POET', '14 collections']} />
      <main>
        <SelectedWork />
      </main>
      <Contact />
    </>
  );
}
