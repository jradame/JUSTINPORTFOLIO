import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const TipTrack = () => {
  // Scroll to top on mount
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
          <p className="case-study__tagline">
            Helping bartenders track tips and take control of their finances
          </p>
          <img 
            src="/images/tiptrack-hero.png" 
            alt="TipTrack app mockups" 
            className="case-study__hero-image"
          />
        </section>
      </ScrollReveal>

      {/* Embedded Google Slides */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__slides" style={{ margin: "2.5rem auto", maxWidth: 960 }}>
          <iframe
            title="TipTrack Google Slides"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQd-ZfLpCwJV7qyzEYfg1ZD21oCEjS9pKQQ6vRQ_Z7Kd9rpnkw862vFQABlJrlehbXaVYB5_gDZSJMO/pubembed?start=false&loop=false&delayms=3000"
            width="100%"
            height="569"
            allowFullScreen
            frameBorder="0"
            style={{
              border: 0,
              width: "100%",
              minHeight: 400,
              maxWidth: "100%",
              margin: "0 auto",
              display: "block"
            }}
          />
          <a
            href="https://docs.google.com/presentation/d/1YrqSt84y2GthTqC1OnSmYxiybb9julY2ArU-g-CGgHM/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: "block", margin: "1.1rem auto 0", maxWidth: 320, textAlign: "center" }}
          >
            Open Slides in Google Slides
          </a>
        </section>
      </ScrollReveal>

      {/* Project Overview */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__overview">
          <h2 className="section-title">Project Overview</h2>
          <div className="overview-grid">
            <div className="overview-item"><h3>Role</h3><p>UX Designer</p></div>
            <div className="overview-item"><h3>Duration</h3><p>4 weeks</p></div>
            <div className="overview-item"><h3>Tools</h3><p>Figma, Google Slides, User Interviews</p></div>
            <div className="overview-item"><h3>Platform</h3><p>Mobile (iOS/Android)</p></div>
          </div>
        </section>
      </ScrollReveal>

      {/* The Problem */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">The Problem</h2>
          <p className="section-text">
            Bartenders earn inconsistent income from cash tips, credit card tips, and must tip-out 
            support staff—yet most track earnings using memory, notes apps, or pen and paper. Without 
            clear visibility into actual take-home pay, bartenders like Justin struggle to budget and 
            often feel money disappears between shifts.
          </p>
        </section>
      </ScrollReveal>

      {/* The Solution */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">The Solution</h2>
          <p className="section-text">
            TipTrack is a mobile-first app designed for speed and clarity. Bartenders can log complete 
            shifts in under 30 seconds, automatically calculate tip-outs, visualize earnings patterns, 
            and track their real income across multiple venues—helping them take control of their finances.
          </p>
        </section>
      </ScrollReveal>

      {/* Design Process - Wireframes */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">Design Process</h2>
          <h3 className="section-subtitle">Low-Fidelity Wireframes</h3>
          <p className="section-text">
            Early sketches exploring TipTrack's core screens: Dashboard for quick earnings overview, 
            Add Shift for 30-second logging with automatic tip-out calculations, and Analytics for 
            identifying profitable patterns across shifts and venues.
          </p>
          <img 
            src="/images/tiptrack-wireframes.png" 
            alt="TipTrack wireframes" 
            className="case-study__image"
          />
        </section>
      </ScrollReveal>

      {/* High-Fidelity Mockups */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h3 className="section-subtitle">High-Fidelity Mockups</h3>
          <p className="section-text">
            Refined designs featuring TipTrack branding and intuitive navigation. The green color scheme 
            emphasizes financial success and positive earnings tracking.
          </p>
          <img 
            src="/images/tiptrack-hifi.png" 
            alt="TipTrack high-fidelity mockups" 
            className="case-study__image"
          />
        </section>
      </ScrollReveal>

      {/* Key Features */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>⚡ 30-Second Logging</h3>
              <p>Pre-filled fields and smart defaults reduce entry time from 3+ minutes to under 30 seconds</p>
            </div>
            <div className="feature-card">
              <h3>💰 Automatic Calculations</h3>
              <p>Instant tip-out calculations show real take-home pay, eliminating manual math errors</p>
            </div>
            <div className="feature-card">
              <h3>📊 Visual Analytics</h3>
              <p>Identify your best earning days (like Fridays) and most profitable venues at a glance</p>
            </div>
            <div className="feature-card">
              <h3>✅ Financial Control</h3>
              <p>Reliable income tracking enables effective budgeting and savings planning</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Impact & Results */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">Impact & Results</h2>
          <img 
            src="/images/tiptrack-impact.png" 
            alt="TipTrack before and after" 
            className="case-study__image"
          />
        </section>
      </ScrollReveal>

      {/* Download PDF */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__download">
          <h2 className="section-title">Full Case Study</h2>
          <p className="section-text">
            Download the complete case study presentation including user research, personas, 
            journey maps, competitive analysis, and detailed design process.
          </p>
          <a 
            href="/files/TipTrack_Case_Study.pdf" 
            download
            className="download-btn"
          >
            <FontAwesomeIcon icon={faDownload} />
            Download Full Case Study (PDF)
          </a>
        </section>
      </ScrollReveal>

      {/* Next Steps */}
      <ScrollReveal direction="up" delay={100}>
        <section className="case-study__section">
          <h2 className="section-title">Next Steps</h2>
          <ul className="next-steps-list">
            <li>Conduct usability testing with 5-8 bartenders</li>
            <li>Iterate based on user feedback</li>
            <li>Build iOS/Android MVP</li>
            <li>Partner with restaurant management platforms for integration</li>
          </ul>
        </section>
      </ScrollReveal>

      {/* Back to Projects */}
      <div className="case-study__back case-study__back--bottom">
        <Link to="/#projects" className="back-btn">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default TipTrack;
