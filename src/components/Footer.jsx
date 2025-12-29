// Footer: Three-column layout with brand, links, and contact.
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';

const Footer = ({ loading, toggleModal }) => {
  const currentYear = new Date().getFullYear();

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
            <div className="footer__section footer__section--brand">
              <Skeleton width="200px" height="32px" />
              <Skeleton count={2} />
            </div>

            <div className="footer__section">
              <Skeleton width="100px" height="20px" className="footer__section-title-skeleton" />
              {[...Array(4)].map((_, index) => (
                <Skeleton key={index} width="100px" height="16px" className="footer__link-skeleton" />
              ))}
            </div>

            <div className="footer__section">
              <Skeleton width="120px" height="20px" className="footer__section-title-skeleton" />
              <Skeleton width="220px" height="16px" />
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
              Frontend Developer passionate about creating clean, user-friendly web experiences with modern technologies.
            </p>
          </div>

          {/* LINKS */}
          <div className="footer__section">
            <h4 className="footer__section-title">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <button
                  className="footer__link"
                  onClick={() => handleQuickLinkClick('about')}
                  aria-label="Open About section"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="footer__link"
                  onClick={() => handleQuickLinkClick('projects')}
                  aria-label="Go to Projects section"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className="footer__link"
                  onClick={() => handleQuickLinkClick('contact')}
                  aria-label="Open Contact section"
                >
                  Contact
                </button>
              </li>

              {/* ✅ RESUME */}
              <li>
                <a
                  className="footer__link"
                  href="/Justin_Adame_Front-End_Developer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open resume PDF in a new tab"
                >
                  Resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '6px', fontSize: '0.85em' }} />
                </a>
              </li>

              {/* Optional: LinkedIn quick link (delete if you don’t want it here) */}
              <li>
                <a
                  className="footer__link"
                  href="https://www.linkedin.com/in/justin-adame-022b6b97/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile in a new tab"
                >
                  LinkedIn <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '6px', fontSize: '0.85em' }} />
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer__section">
            <h4 className="footer__section-title">Get In Touch</h4>
            <div className="footer__contact">
              <button
                className="footer__contact-item"
                onClick={() => toggleModal('contact')}
                aria-label="Open contact modal"
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
