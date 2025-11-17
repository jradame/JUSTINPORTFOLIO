import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCode, faPalette, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faFigma } from '@fortawesome/free-brands-svg-icons';

const Modal = ({ isOpen, onClose, modalType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* DETECT MOBILE */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* MODAL VISIBILITY */
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 50);
      document.body.classList.add('modal-open');
    } else {
      setIsVisible(false);
      setTimeout(() => {
        setShouldRender(false);
        document.body.classList.remove('modal-open');
      }, 600);
    }
  }, [isOpen]);

  /* FORM HANDLERS */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 3000);
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!shouldRender) return null;

  /* RENDER */
  return (
    <div
      className={`modal-overlay ${isVisible ? 'open' : 'close'}`}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.4s ease-in-out',
        padding: isMobile ? '0.5rem' : '0',
        overflowY: isMobile ? 'auto' : 'hidden'
      }}
    >
      <div
        className={`modal ${isVisible ? 'open' : 'close'}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#1f2937',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          width: isMobile ? '95%' : '90%',
          maxWidth: isMobile ? '95%' : '1000px',
          maxHeight: isMobile ? '85vh' : 'auto',
          minHeight: isMobile ? 'auto' : '500px',
          height: isMobile ? 'auto' : '650px',
          overflow: isMobile ? 'auto' : 'hidden',
          position: 'relative',
          boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
          transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          margin: 'auto'
        }}
      >
        <button
          className="modal__exit"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: isMobile ? '0.5rem' : '1rem',
            right: isMobile ? '0.5rem' : '1rem',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            cursor: 'pointer',
            zIndex: 10001
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* --- LEFT SIDE --- */}
        <div
          className="modal__half modal__left"
          style={{
            flex: 1,
            padding: isMobile ? '1.5rem' : '2rem',
            background: '#111827',
            color: '#fff',
            overflowY: isMobile ? 'visible' : 'auto',
            height: isMobile ? 'auto' : '100%',
            width: isMobile ? '100%' : '50%',
            transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.5s ease'
          }}
        >
          {modalType === 'about' ? (
            <div className="modal__about">
              <div className="about-content--balanced" style={{ justifyContent: isMobile ? 'flex-start' : 'space-between', gap: isMobile ? '1.5rem' : '0' }}>
                <div className="about-content__header">
                  <h1 className="modal__title--about" style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>
                    I'm Justin Adame
                  </h1>
                  <h2 className="modal__sub-title--about" style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
                    A <span className="blue">Frontend Developer</span> passionate about creating amazing web experiences
                  </h2>
                </div>
                <div className="about-content__body">
                  <p className="modal__para" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                    I specialize in building modern, responsive web applications using <span className="blue">React</span>, JavaScript, and CSS. I love turning complex problems into simple, beautiful, and intuitive designs.
                  </p>
                  <p className="modal__para" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                    When I'm not coding, you can find me exploring new technologies, or enjoying a good cup of coffee.
                  </p>
                </div>
                <div className="about-content__footer" style={{ marginTop: isMobile ? '1.5rem' : 'auto' }}>
                  <div className="modal__languages" style={{ gap: isMobile ? '0.4rem' : '0.8rem' }}>
                    <div className="tech-icon html-icon" style={{ height: isMobile ? '48px' : '60px', width: isMobile ? '48px' : '60px' }}>
                      <FontAwesomeIcon icon={faHtml5} /><span className="tech-name">HTML5</span>
                    </div>
                    <div className="tech-icon css-icon" style={{ height: isMobile ? '48px' : '60px', width: isMobile ? '48px' : '60px' }}>
                      <FontAwesomeIcon icon={faCss3Alt} /><span className="tech-name">CSS3</span>
                    </div>
                    <div className="tech-icon js-icon" style={{ height: isMobile ? '48px' : '60px', width: isMobile ? '48px' : '60px' }}>
                      <FontAwesomeIcon icon={faJs} /><span className="tech-name">JavaScript</span>
                    </div>
                    <div className="tech-icon react-icon" style={{ height: isMobile ? '48px' : '60px', width: isMobile ? '48px' : '60px' }}>
                      <FontAwesomeIcon icon={faReact} /><span className="tech-name">React</span>
                    </div>
                    <div className="tech-icon figma-icon" style={{ height: isMobile ? '48px' : '60px', width: isMobile ? '48px' : '60px' }}>
                      <FontAwesomeIcon icon={faFigma} /><span className="tech-name">Figma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="modal__contact-info">
              <div className="contact-info-content" style={{ justifyContent: isMobile ? 'flex-start' : 'space-between', gap: isMobile ? '1.5rem' : '0' }}>
                <div>
                  <div className="contact-info__header">
                    <h1 className="modal__title--contact-info" style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>
                      Let Me Build Something Amazing for You
                    </h1>
                    <h2 className="modal__sub-title--contact-info" style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
                      Custom <span className="blue">Web Solutions</span> tailored to your needs
                    </h2>
                  </div>
                  <div className="contact-info__body">
                    <p className="modal__para" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                      Every business is unique. I create <span className="blue">custom web applications</span> from scratch that perfectly match your vision and brand.
                    </p>
                    <p className="modal__para" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                      No templates, no limitations – just a beautifully crafted solution built for you.
                    </p>
                    <p className="modal__para" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                      From stunning UI/UX designs to seamless and responsive development, I provide the expertise to bring your ideas to life.
                    </p>
                  </div>
                </div>

                <div className="contact-info__footer" style={{ position: isMobile ? 'static' : 'relative', bottom: isMobile ? 'auto' : '6.6rem', marginTop: isMobile ? '2rem' : '0' }}>
                  <h3 className="services-title" style={{ fontSize: isMobile ? '1.1rem' : '1.25rem' }}>
                    My Services
                  </h3>
                  <div className="modal__services" style={{ gap: isMobile ? '0.4rem' : '1rem' }}>
                    <div className="tech-icon code-icon" style={{ height: isMobile ? '48px' : '60px', width: isMobile ? '48px' : '60px' }}>
                      <FontAwesomeIcon icon={faCode} />
                      <span className="tech-name">Web Dev</span>
                    </div>
                    <div className="tech-icon design-icon" style={{ height: isMobile ? '48px' : '60px', width: isMobile ? '48px' : '60px' }}>
                      <FontAwesomeIcon icon={faPalette} />
                      <span className="tech-name">UI/UX</span>
                    </div>
                    <div className="tech-icon responsive-icon" style={{ height: isMobile ? '48px' : '60px', width: isMobile ? '48px' : '60px' }}>
                      <FontAwesomeIcon icon={faMobileAlt} />
                      <span className="tech-name">Responsive</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- RIGHT SIDE --- */}
        <div
          className="modal__half modal__right"
          style={{
            flex: 1,
            padding: isMobile ? '1.5rem' : '2rem',
            background: '#1f2937',
            color: '#fff',
            overflowY: isMobile ? 'visible' : 'auto',
            height: isMobile ? 'auto' : '100%',
            width: isMobile ? '100%' : '50%',
            transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.5s ease'
          }}
        >
          <div className="modal__contact">
            <div className="contact-form-content" style={{ justifyContent: isMobile ? 'flex-start' : 'space-between', gap: isMobile ? '1.5rem' : '0' }}>
              <div>
                <h1 className="modal__title--contact" style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>
                  Let's Work Together
                </h1>
                <h2 className="modal__sub-title--contact" style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
                  Ready to bring your ideas to life? Get in touch!
                </h2>
              </div>
              {isSubmitted ? (
                <div className="form__success">
                  <div className="success-icon">✓</div>
                  <h4>Message Sent!</h4>
                  <p>Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form__item">
                    <label className="form__item--label">Name</label>
                    <input 
                      className="input" 
                      type="text" 
                      name="name" 
                      placeholder="Your name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', padding: isMobile ? '0.75rem' : '10px 14px' }}
                    />
                  </div>
                  <div className="form__item">
                    <label className="form__item--label">Email</label>
                    <input 
                      className="input" 
                      type="email" 
                      name="email" 
                      placeholder="your.email@example.com" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', padding: isMobile ? '0.75rem' : '10px 14px' }}
                    />
                  </div>
                  <div className="form__item">
                    <label className="form__item--label">Message</label>
                    <textarea 
                      className="input" 
                      name="message" 
                      rows={isMobile ? "3" : "4"} 
                      placeholder="Tell me about your project..." 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      required 
                      style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', padding: isMobile ? '0.75rem' : '10px 14px', minHeight: isMobile ? '80px' : 'auto' }}
                    />
                  </div>
                  <button 
                    className={`form__submit ${isSubmitting ? 'form__submit--loading' : ''}`} 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{ fontSize: isMobile ? '0.9rem' : '1.09rem', padding: isMobile ? '0.75rem 1.5rem' : '0.8rem 1.5rem' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;