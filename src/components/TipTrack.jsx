import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import Footer from '../components/Footer';

const TipTrack = () => {
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
          <h1 className="case-study__title">TipTrack</h1>
          <h2 className="case-study__subtitle">A Mobile Tip Tracking App</h2>
          <p className="case-study__tagline">
            Helping bartenders track tips and take control of their finances
          </p>
          <img
            src="/images/tiptrack-preview.png"
            alt="TipTrack app feature mockups"
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
              <div className="overview-card-content">UX Designer</div>
            </div>
            <div className="overview-card">
              <div className="overview-card-icon" role="img" aria-label="Duration">
                ⏳
              </div>
              <div className="overview-card-title">Duration</div>
              <div className="overview-card-content">4 weeks</div>
            </div>
            <div className="overview-card">
              <div className="overview-card-icon" role="img" aria-label="Tools">
                🛠️
              </div>
              <div className="overview-card-title">Tools</div>
              <div className="overview-card-content">
                <span title="Figma">🎨</span> Figma, <span title="Slides">📊</span> Slides,{' '}
                <span title="Interviews">🗣️</span> Interviews
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-card-icon" role="img" aria-label="Platform">
                📱
              </div>
              <div className="overview-card-title">Platform</div>
              <div className="overview-card-content">Mobile (iOS/Android)</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Embedded Google Slides */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__slides" style={{ margin: '2.5rem auto', maxWidth: 960 }}>
          <iframe
            title="TipTrack Google Slides"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQd-ZfLpCwJV7qyzEYfg1ZD21oCEjS9pKQQ6vRQ_Z7Kd9rpnkw862vFQABlJrlehbXaVYB5_gDZSJMO/pubembed?start=false&loop=false&delayms=3000"
            width="100%"
            height="569"
            allowFullScreen
            frameBorder="0"
            style={{
              border: 0,
              width: '100%',
              minHeight: 400,
              maxWidth: '100%',
              margin: '0 auto',
              display: 'block',
            }}
          />
          <a
            href="https://docs.google.com/presentation/d/1YrqSt84y2GthTqC1OnSmYxiybb9julY2ArU-g-CGgHM/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: 'block', margin: '1.1rem auto 0', maxWidth: 320, textAlign: 'center' }}
          >
            Open Slides in Google Slides
          </a>
        </section>
      </ScrollReveal>

      {/* Problem & Solution */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">The Problem</h2>

          <div className="case-study__problem-solution">
            <div className="ps-card ps-card--problem">
              <h3 className="section-subtitle">The Problem</h3>
              <p className="section-text">
                Bartenders earn inconsistent income from cash tips, credit tips, and mandatory tip-outs,
                but most still track earnings with memory, notes apps, or pen and paper. Without a clear
                view of real take-home pay, it's hard to budget, plan, or see whether shifts are truly worth
                it.
              </p>
            </div>

            <div className="ps-card ps-card--solution">
              <h3 className="section-subtitle">The Solution</h3>
              <p className="section-text">
                TipTrack is a mobile-first app that lets bartenders log a full shift in under 30 seconds,
                automatically calculate tip-outs, and instantly see true take-home pay. Clear weekly and
                monthly views help them spot patterns, choose better shifts, and feel in control of their
                money.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Design Process – Lo‑Fi & Hi‑Fi Cards */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">Design Process</h2>

          <div className="design-process-grid">
            {/* Low‑Fidelity Wireframes Card */}
            <div className="design-card">
              <h3 className="section-subtitle">Low-Fidelity Wireframes</h3>
              <p className="section-text">
                Started with quick sketches and low-fidelity wireframes to map the core flow: logging a
                shift, viewing weekly earnings, and comparing venues. This made it easy to test navigation,
                field order, and screen hierarchy with bartenders before investing in visual design.
              </p>
              <ul className="design-list">
                <li>Focused on a 30-second shift logging flow from first tap to saved entry.</li>
                <li>Explored home layouts to surface weekly earnings and trends.</li>
                <li>Compared tab vs. bottom navigation for faster access to key screens.</li>
              </ul>
              <img
                src="/images/lofiwireframe1.png"
                alt="TipTrack low-fidelity wireframes"
                className="case-study__image design-card-image"
              />
            </div>

            {/* High‑Fidelity Mockups Card */}
            <div className="design-card">
              <h3 className="section-subtitle">High-Fidelity Mockups</h3>
              <p className="section-text">
                Refined the wireframes into a clean, production-ready UI using TipTrack branding, clear
                typography, and a green palette that reinforces financial growth. Screens highlight
                at-a-glance earnings, fast shift entry, and simple analytics.
              </p>
              <ul className="design-list">
                <li>Clarified visual hierarchy for earnings vs. secondary stats.</li>
                <li>Aligned colors and iconography with the "money clarity" concept.</li>
                <li>Polished interaction details for buttons, cards, and graphs.</li>
              </ul>
              <img
                src="/images/tiptrack-preview.png"
                alt="TipTrack high-fidelity mockups"
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
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">30-Second Logging</h3>
              <p className="feature-description">
                Pre-filled fields and smart defaults reduce entry time from 3+ minutes to under 30 seconds.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">Automatic Calculations</h3>
              <p className="feature-description">
                Instant tip-out calculations show real take-home pay, eliminating manual math errors.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Visual Analytics</h3>
              <p className="feature-description">
                Identify your best earning days and most profitable venues at a glance.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3 className="feature-title">Financial Control</h3>
              <p className="feature-description">
                Reliable income tracking enables effective budgeting and savings planning.
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
            <h3 className="section-subtitle">Key Outcomes</h3>
            <ul className="impact-list">
              <li>
                <strong>3+ minutes → 30 seconds:</strong> Shift logging time reduced by 90% with smart
                defaults and pre-filled fields.
              </li>
              <li>
                <strong>Clear financial visibility:</strong> Bartenders can instantly see real take-home pay
                after tip-outs, eliminating guesswork.
              </li>
              <li>
                <strong>Better budgeting:</strong> Weekly and monthly earnings views help users identify
                profitable shifts and plan finances.
              </li>
              <li>
                <strong>Reduced errors:</strong> Automatic calculations eliminate manual math mistakes in
                tip-out tracking.
              </li>
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* Download PDF */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <div className="download-card">
            <h2 className="section-title">Full Case Study</h2>
            <p className="download-description">
              Download the complete case study presentation including user research, personas, journey maps,
              competitive analysis, and detailed design process.
            </p>
            <a href="/files/TipTrack_Case_Study.pdf" download className="download-btn">
              <FontAwesomeIcon icon={faDownload} />
              Download Full Case Study (PDF)
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* Next Steps */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <div className="next-steps-card">
            <h2 className="section-title">Next Steps</h2>
            <ul className="next-steps-list">
              <li>Conduct usability testing with 5–8 bartenders to validate the design.</li>
              <li>Iterate on the prototype based on real user feedback and pain points.</li>
              <li>Build an iOS/Android MVP with core features: shift logging, tip-outs, and analytics.</li>
              <li>Partner with restaurant management platforms for seamless integration.</li>
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* Bottom Navigation - Side by Side */}
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

export default TipTrack;
