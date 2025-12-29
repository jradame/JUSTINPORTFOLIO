import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './App.css';

import Navbar from './components/Navbar';
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
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToProjects = () => {
    const el = document.querySelector('.projects');
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="App">
        {/* ✅ NAVBAR COMPONENT (no inline nav in App anymore) */}
        <Navbar
          loading={loading}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          isTransitioning={isTransitioning}
          openModal={openModal}
          scrollToProjects={scrollToProjects}
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />

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
        <Modal isOpen={modalOpen} onClose={closeModal} loading={modalLoading} modalType={modalType} />
      </div>
    </Router>
  );
}

export default App;
