import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import Footer from '../components/Footer';

const EarlyDrop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study">
      {/* Back Button */}
      <div className="case-study__back">
        <Link to="/#projects" className="back-btn">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <ScrollReveal direction="up">
        <section className="case-study__hero">
          <h1 className="case-study__title">EarlyDrop</h1>
          <h2 className="case-study__subtitle">Music Pre-Order & Discovery App</h2>
          <p className="case-study__tagline">
            Stream and pre-order new music before it officially drops
          </p>
          <img
            src="/images/earlydropHiFi.png"
            alt="EarlyDrop high-fidelity mockup"
            className="case-study__hero-image"
            style={{
              maxWidth: '360px',
              width: '100%',
              margin: '2rem auto 0',
              display: 'block',
              borderRadius: '18px',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.13)',
            }}
          />
          <div
            style={{
              marginTop: '1.5rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              fontSize: '1.1rem',
            }}
          >
            UX Case Study &nbsp; | &nbsp; Justin Adame
          </div>
        </section>
      </ScrollReveal>

      {/* Project Overview */}
      <ScrollReveal direction="up">
        <section className="case-study__overview">
          <h2 className="section-title">Project Overview</h2>
          <div className="overview-card-grid">
            <div className="overview-card">
              <div className="overview-card-icon" role="img" aria-label="Role">
                🧑‍💻
              </div>
              <div className="overview-card-title">Role</div>
              <div className="overview-card-content">UX Researcher & Designer</div>
            </div>
            <div className="overview-card">
              <div className="overview-card-icon" role="img" aria-label="Duration">
                ⏳
              </div>
              <div className="overview-card-title">Duration</div>
              <div className="overview-card-content">3 weeks (June-July 2022)</div>
            </div>
            <div className="overview-card">
              <div className="overview-card-icon" role="img" aria-label="Tools">
                🛠️
              </div>
              <div className="overview-card-title">Tools</div>
              <div className="overview-card-content">
                <span title="Figma">🎨</span> Figma, <span title="Usability Testing">🗣️</span> Usability Testing
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-card-icon" role="img" aria-label="Platform">
                📱
              </div>
              <div className="overview-card-title">Platform</div>
              <div className="overview-card-content">Mobile App (iOS/Android)</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Problem & Solution */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">The Challenge</h2>

          <div className="case-study__problem-solution">
            <div className="ps-card ps-card--problem">
              <h3 className="section-subtitle">The Problem</h3>
              <p className="section-text">
                Music fans miss out on limited releases and can't discover new music before it hits
                mainstream platforms. There's no unified way to stream early, pre-order physical copies,
                and earn rewards—forcing users to juggle multiple apps and websites while risking sold-out
                albums.
              </p>
            </div>

            <div className="ps-card ps-card--solution">
              <h3 className="section-subtitle">The Solution</h3>
              <p className="section-text">
                EarlyDrop gives fans exclusive early streaming access combined with seamless pre-ordering
                for vinyl, CDs, and digital downloads. A built-in rewards system encourages discovery and
                repeat purchases, while curated drops help users find new artists before anyone else.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* User Research */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">User Research</h2>
          <div className="research-card">
            <h3 className="section-subtitle">Research Methodology</h3>
            <p className="section-text">
              Conducted an unmoderated usability study with 5 participants (ages 18-35) who attend 2+
              live music events weekly. Sessions focused on browsing, ordering, and checkout flows.
            </p>
            <ul className="research-list">
              <li><strong>Method:</strong> Unmoderated usability testing (remote)</li>
              <li><strong>Participants:</strong> 3 males, 2 females, all service industry workers</li>
              <li><strong>Duration:</strong> 10-15 minute sessions + questionnaire</li>
              <li><strong>Key Metrics:</strong> Time on task, error rates, conversion rates</li>
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* Design Process – Screens */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">Design Process</h2>

          <div className="design-process-grid">
            {/* Homepage/Login (LoFi) */}
            <div className="design-card">
              <h3 className="section-subtitle">Login & Onboarding (Lo-Fi)</h3>
              <p className="section-text">
                Simple login and account creation flow to get users into the app quickly. Minimal friction
                to start browsing new releases immediately.
              </p>
              <img
                src="/images/earlydropLoFi.png"
                alt="EarlyDrop low-fidelity login and home wireframes"
                className="case-study__image design-card-image"
              />
            </div>

            {/* Featured Pre-Orders (HiFi) */}
            <div className="design-card">
              <h3 className="section-subtitle">Featured Pre-Orders (Hi-Fi)</h3>
              <p className="section-text">
                Curated homepage showcasing new releases with album art, artist info, and prominent reward
                points display. One-tap access to pre-order or stream.
              </p>
              <img
                src="/images/earlydropHiFi.png"
                alt="EarlyDrop high-fidelity featured pre-order screen"
                className="case-study__image design-card-image"
              />
            </div>

            {/* Search Results */}
            <div className="design-card">
              <h3 className="section-subtitle">Search & Discovery</h3>
              <p className="section-text">
                Fast search with clear album cards, descriptions, and quick access to pre-order. Easy
                navigation back to browsing.
              </p>
              <img
                src="/images/earlydrop-search.png"
                alt="EarlyDrop search results"
                className="case-study__image design-card-image"
              />
            </div>

            {/* Order Confirmation */}
            <div className="design-card">
              <h3 className="section-subtitle">Order Confirmation</h3>
              <p className="section-text">
                Clean checkout with order summary, total, and reward points earned. Streamlined flow
                reduces abandonment and confirms purchase instantly.
              </p>
              <img
                src="/images/earlydrop-checkout.png"
                alt="EarlyDrop order confirmation"
                className="case-study__image design-card-image"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Key Features */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎵</div>
              <h3 className="feature-title">Early Streaming</h3>
              <p className="feature-description">
                Listen to new albums before public release, giving fans exclusive first access.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛒</div>
              <h3 className="feature-title">One-Tap Pre-Order</h3>
              <p className="feature-description">
                Seamless ordering for vinyl, CD, and digital formats with minimal clicks.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3 className="feature-title">Reward Points</h3>
              <p className="feature-description">
                Earn points for every purchase, redeemable for discounts and exclusive merch.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">Curated Discovery</h3>
              <p className="feature-description">
                Personalized recommendations and featured drops help users find new artists.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Impact & Results */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">Impact & Results</h2>

          <div className="impact-card">
            <h3 className="section-subtitle">Usability Study Findings</h3>
            <ul className="impact-list">
              <li>
                <strong>Simplified checkout:</strong> Participants completed orders in under 2 minutes with minimal errors.
              </li>
              <li>
                <strong>Clear navigation:</strong> Users easily browsed, searched, and added items to cart without confusion.
              </li>
              <li>
                <strong>Reward visibility:</strong> Prominent reward points display increased engagement and repeat intent.
              </li>
              <li>
                <strong>High satisfaction:</strong> Most participants rated the app as easy and enjoyable to use.
              </li>
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* Next Steps */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <div className="next-steps-card">
            <h2 className="section-title">Next Steps</h2>
            <ul className="next-steps-list">
              <li>Refine UI based on updated design trends and accessibility standards.</li>
              <li>Add social sharing features so users can share new discoveries with friends.</li>
              <li>Integrate artist profiles and exclusive content such as interviews and behind-the-scenes.</li>
              <li>Build partnerships with indie labels for exclusive early drops.</li>
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* Bottom Navigation */}
      <div className="case-study__bottom-nav">
        <Link to="/#projects" className="back-btn">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="back-btn"
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ transform: 'rotate(90deg)' }} /> Back to Top
        </button>
      </div>

      {/* Footer */}
      <Footer loading={false} toggleModal={() => {}} />
    </div>
  );
};

export default EarlyDrop;
