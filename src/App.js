import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faArrowLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './App.css';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Modal from './components/Modal';
import Footer from './components/Footer';
import TipTrack from './components/TipTrack';
import EarlyDrop from './components/EarlyDrop';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('about');
  const [modalLoading, setModalLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  const toggleTheme = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    document.body.classList.add('theme-transitioning');
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
      setIsTransitioning(false);
    }, 300);
  };

  const openModal = (type) => {
    setModalType(type);
    setModalLoading(true);
    setModalOpen(true);
    setMenuOpen(false);
    setTimeout(() => setModalLoading(false), 800);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalLoading(false);
  };

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToProjects = () => {
    const el = document.querySelector('.projects');
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="App">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-container">
            <Link
              to="/"
              className="nav__logo-text"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Justin Adame
            </Link>

            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>

            <ul className={`nav__link--list ${menuOpen ? 'open' : ''}`}>
              {loading ? (
                <div className="nav__links-skeleton">
                  <Skeleton width="60px" height="20px" />
                  <Skeleton width="70px" height="20px" />
                  <Skeleton width="70px" height="20px" />
                  <Skeleton circle width="44px" height="44px" />
                </div>
              ) : (
                <>
                  <li className="nav__link">
                    <button className="nav__link--anchor" onClick={() => openModal('about')}>
                      About
                    </button>
                  </li>

                  <li className="nav__link">
                    <button className="nav__link--anchor" onClick={scrollToProjects}>
                      Projects
                    </button>
                  </li>

                  <li className="nav__link">
                    <button className="nav__link--anchor" onClick={() => openModal('contact')}>
                      Contact
                    </button>
                  </li>

                  {/* ✅ RESUME LINK */}
                  <li className="nav__link">
                    <a
                      className="nav__link--anchor"
                      href="/Justin_Adame_Front-End_Developer.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      Resume{' '}
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{ marginLeft: '6px', fontSize: '0.85em' }}
                      />
                    </a>
                  </li>

                  {/* THEME TOGGLE */}
                  <li className="nav__link">
                    <button
                      className={`theme-toggle ${isDarkMode ? 'theme-toggle--dark' : ''}`}
                      onClick={toggleTheme}
                      disabled={isTransitioning}
                      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                    >
                      <FontAwesomeIcon
                        icon={isDarkMode ? faSun : faMoon}
                        className="theme-toggle__icon"
                      />
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>

          {menuOpen && <div className="menu-overlay" onClick={closeMenu} />}
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero loading={loading} openModal={openModal} />
                <Projects loading={loading} />

                <div className="back-to-top-container">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="back-to-top-btn"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} style={{ transform: 'rotate(90deg)' }} />
                    Back to Top
                  </button>
                </div>

                <Footer loading={loading} toggleModal={openModal} />
              </>
            }
          />
          <Route path="/projects/tiptrack" element={<TipTrack />} />
          <Route path="/projects/earlydrop" element={<EarlyDrop />} />
        </Routes>

        {/* MODAL */}
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          loading={modalLoading}
          modalType={modalType}
        />
      </div>
    </Router>
  );
}

export default App;
