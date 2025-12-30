// Footer: Three-column layout with brand, links, and contact.
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Skeleton from 'react-loading-skeleton';

const Footer = ({ loading, toggleModal }) => {
  // Get current year automatically.
  const currentYear = new Date().getFullYear();

  // External links
  const RESUME_URL = '/Justin_Adame_Front-End_Developer.pdf';
  const GITHUB_URL = 'https://github.com/jradame';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/justin-adame-022b6b97/';

  /* SCROLL */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  /* HANDLERS */
  const handleQuickLinkClick = (type) => {
    if (type === 'projects') {
      const element = document.querySelector('.projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      toggleModal(type);
    }
  };

  /* LOADING STATE */
  if (loading) {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            {/* Brand Skeleton */}
            <div className="footer__section footer__section--brand">
              <Skeleton width="200px" height="32px" />
              <Skeleton count={2} />
            </div>

            {/* Links Skeleton */}
            <div className="footer__section">
              <Skeleton width="100px" height="20px" className="footer__section-title-skeleton" />
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} width="80px" height="16px" className="footer__link-skeleton" />
              ))}
            </div>

            {/* Contact Skeleton */}
            <div className="footer__section">
              <Skeleton width="120px" height="20px" className="footer__section-title-skeleton" />
              <Skeleton width="200px" height="16px" />
              <Skeleton width="180px" height="16px" />
            </div>
          </div>

          <div className="footer__bottom">
            <Skeleton width="300px" height="16px" />
          </div>
        </div>
      </footer>
    );
  }

  /* RENDER */
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* BRAND */}
          <div className="footer__section footer__section--brand">
            <button
              className="footer__brand footer__brand-button"
              onClick={scrollToTop}
              type="button"
              aria-label="Scroll to top"
            >
              Justin Adame
            </button>
            <p className="footer__description">
              Frontend Developer focused on clean UI, thoughtful UX, and modern web experiences.
            </p>
          </div>

          {/* LINKS */}
          <div className="footer__section">
            <h4 className="footer__section-title">Quick Links</h4>

            {/* Primary site navigation (keep as text for usability) */}
            <ul className="footer__links">
              <li>
                <button
                  className="footer__link"
                  onClick={() => handleQuickLinkClick('about')}
                  aria-label="Open About section"
                  type="button"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="footer__link"
                  onClick={() => handleQuickLinkClick('projects')}
                  aria-label="Go to Projects section"
                  type="button"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className="footer__link"
                  onClick={() => handleQuickLinkClick('contact')}
                  aria-label="Open Contact section"
                  type="button"
                >
                  Contact
                </button>
              </li>
            </ul>

            {/* Subtle icon-only external links */}
            <div className="footer__social footer__social--icons" aria-label="External links">
              <a
                className="footer__social-link"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume PDF"
                title="Resume"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>

              <a
                className="footer__social-link"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                className="footer__social-link"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div className="footer__section">
            <h4 className="footer__section-title">Get In Touch</h4>
            <div className="footer__contact">
              <button
                className="footer__contact-item"
                onClick={() => toggleModal('contact')}
                aria-label="Open contact modal"
                type="button"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>jradame@gmail.com</span>
              </button>
              <p className="footer__contact-text">
                Let’s connect and build something great.
              </p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer__bottom">
          <p>
            © {currentYear} Justin Adame. Made with{' '}
            <FontAwesomeIcon icon={faHeart} className="footer__heart" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
