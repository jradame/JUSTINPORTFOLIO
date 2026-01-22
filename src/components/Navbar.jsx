// Sticky header with dark mode toggle + mobile menu + external links
import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({
  loading,
  isDarkMode,
  toggleTheme,
  isTransitioning,
  openModal,
  scrollToProjects,
  menuOpen,
  toggleMenu,
  closeMenu,
}) => {
  const RESUME_URL = '/Justin_Adame_Front-End_Developer.pdf';
  const GITHUB_URL = 'https://github.com/jradame';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/justin-adame';

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link
          to="/"
          className="nav__logo-text"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();
          }}
          aria-label="Go to homepage"
        >
          Justin Adame
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Links */}
        <ul className={`nav__link--list ${menuOpen ? 'open' : ''}`}>
          {loading ? (
            <div className="nav__links-skeleton">
              <Skeleton width="60px" height="20px" />
              <Skeleton width="70px" height="20px" />
              <Skeleton width="70px" height="20px" />
              <Skeleton width="70px" height="20px" />
              <Skeleton width="70px" height="20px" />
              <Skeleton circle width="44px" height="44px" />
            </div>
          ) : (
            <>
              <li className="nav__link">
                <button
                  className="nav__link--anchor"
                  onClick={() => {
                    openModal('about');
                    closeMenu();
                  }}
                  type="button"
                >
                  About
                </button>
              </li>

              <li className="nav__link">
                <button
                  className="nav__link--anchor"
                  onClick={() => {
                    scrollToProjects();
                    closeMenu();
                  }}
                  type="button"
                >
                  Projects
                </button>
              </li>

              <li className="nav__link">
                <button
                  className="nav__link--anchor"
                  onClick={() => {
                    openModal('contact');
                    closeMenu();
                  }}
                  type="button"
                >
                  Contact
                </button>
              </li>

              {/* Resume */}
              <li className="nav__link">
                <a
                  className="nav__link--anchor"
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <FontAwesomeIcon icon={faFilePdf} style={{ marginRight: '8px' }} />
                  Resume
                </a>
              </li>

              {/* GitHub */}
              <li className="nav__link">
                <a
                  className="nav__link--anchor"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
                  GitHub
                </a>
              </li>

              {/* LinkedIn */}
              <li className="nav__link">
                <a
                  className="nav__link--anchor"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} />
                  LinkedIn
                </a>
              </li>

              {/* Theme Toggle */}
              <li className="nav__link">
                <button
                  className={`theme-toggle ${isDarkMode ? 'theme-toggle--dark' : ''}`}
                  onClick={toggleTheme}
                  disabled={isTransitioning}
                  aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                  type="button"
                >
                  <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="theme-toggle__icon" />
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu} aria-label="Close menu" />}
    </nav>
  );
};

export default Navbar;
