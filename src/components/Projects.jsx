import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Skeleton from 'react-loading-skeleton';
import ScrollReveal from './ScrollReveal';

// Data split into two arrays for clarity/readability
const webProjects = [
  {
    title: 'SkinStric Skin Care Platform 🏥',
    description: 'Professional dermatology web application built for SkinStric. Features patient portal, image upload/processing for skin analysis, and API integrations with responsive design.',
    imageUrl: '/images/skinstric-preview.png',
    liveUrl: 'https://skinstricapp-fresh.vercel.app/',
    githubUrl: 'https://github.com/jradame/skinstric-project',
    technologies: ['React', 'Tailwind CSS', 'REST APIs', 'Image Processing', 'Vercel'],
    category: 'Web Development',
    status: 'LIVE',
    featured: true,
    clientWork: true,
    timeline: '2-month project • Completed Oct 2025'
  },
  {
    title: 'CineScope 🎬',
    description: 'Search movies, TV shows, and games using the OMDb API. Features modals, skeleton loaders, and smooth UI interactions.',
    imageUrl: '/images/cinescope-preview.png',
    liveUrl: 'https://cinescope-project.vercel.app',
    githubUrl: 'https://github.com/jradame/CINESCOPE-PROJECT',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'OMDb API', 'Vercel'],
    category: 'Web Development',
    status: 'LIVE'
  },
  {
    title: 'Library Project 📚',
    description: 'A responsive React web app that simulates an online bookstore. Users can browse, filter, sort by price or rating, and see which books are on sale.',
    imageUrl: '/images/library-screenshot.png',
    liveUrl: 'https://libraryproject-beryl.vercel.app',
    githubUrl: 'https://github.com/jradame/LIBRARYPROJECT',
    technologies: ['React', 'CSS3', 'JavaScript', 'Vercel'],
    category: 'Web Development',
    status: 'LIVE'
  },
  {
    title: 'Ultraverse NFT Marketplace 🖼️',
    description: 'React NFT marketplace with dark/light themes and smooth navigation. Built from scratch and deployed on Vercel.',
    imageUrl: '/images/ultraverse-screenshot.png',
    liveUrl: 'https://ultraverse-nft-project.vercel.app/',
    githubUrl: 'https://github.com/jradame/ultraverse-nft-project',
    technologies: ['React', 'CSS3', 'JavaScript', 'React Router', 'Vercel'],
    category: 'Web Development',
    status: 'LIVE'
  }
];

const uxProjects = [
  {
    title: 'TipTrack 💰',
    description: 'Mobile app UX case study helping bartenders track tips, calculate tip-outs, and understand their real take-home income. Includes user research, wireframes, and high-fidelity mockups.',
    imageUrl: '/images/tiptrack-preview.png',
    projectUrl: '/projects/tiptrack', // Internal link to dedicated page (or PDF if preferred)
    technologies: ['UX Research', 'Figma', 'Personas', 'Wireframing', 'Prototyping'],
    category: 'UX Design',
    status: 'CASE STUDY',
    featured: true,
    timeline: '4-week project • Nov 2025'
  }
  // Add more UX/UI projects here as grid grows!
];

const Projects = ({ loading }) => (
  <section id="projects" className="projects">
    <div className="projects__container">

      {/* Page Title */}
      <ScrollReveal direction="up" delay={100}>
        <h1 className="section__title">
          Here are a few of my <span className="blue">projects</span>
        </h1>
      </ScrollReveal>

      {/* -- WEB DEVELOPMENT SECTION -- */}
      <ScrollReveal direction="up" delay={200}>
        <h2 className="projects__section-title">Web Development Projects</h2>
      </ScrollReveal>

      <div className="projects__cards">
        {loading ? (
          [...Array(4)].map((_, i) => (
            <div key={i} className="project-block project-block--loading">
              <Skeleton height="100%" />
              <Skeleton height={24} width="70%" />
              <Skeleton height={40} count={2} />
              <div className="project-simple-links"><Skeleton width={100} height={35} /></div>
              <div className="project-simple-tags">{[...Array(3)].map((_, t) => <Skeleton key={t} width={60} height={24} />)}</div>
            </div>
          ))
        ) : (
          webProjects.map((project, index) => (
            <ScrollReveal key={project.title} direction="up" delay={300 + index * 100}>
              <div className={`project-block ${project.featured ? 'project-block--featured' : ''}`}>
                {project.featured && (
                  <div className="project-badge-featured">⭐ Client Project</div>
                )}
                <div className="project-image-container">
                  <img src={project.imageUrl} alt={project.title + ' screenshot'} className="project-image-simple" />
                </div>
                <div className="project-simple-info">
                  <h3 className="project-simple-title">{project.title}</h3>
                  <p className="project-simple-desc">{project.description}</p>
                  {project.timeline && (<p className="project-timeline"><small>{project.timeline}</small></p>)}
                  <div className="project-simple-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-simple-btn">
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-simple-btn project-simple-btn-github">
                        <FontAwesomeIcon icon={faGithub} /> View Code
                      </a>
                    )}
                  </div>
                  <div className="project-simple-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-simple-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))
        )}
      </div>

      {/* -- UX/UI SECTION -- */}
      <ScrollReveal direction="up" delay={1200}>
        <h2 className="projects__section-title">UX/UI Design Projects</h2>
      </ScrollReveal>

      <div className="projects__cards">
        {loading ? (
          [...Array(2)].map((_, i) => (
            <div key={i} className="project-block project-block--loading">
              <Skeleton height="100%" />
              <Skeleton height={24} width="70%" />
              <Skeleton height={40} count={2} />
              <div className="project-simple-links"><Skeleton width={100} height={35} /></div>
              <div className="project-simple-tags">{[...Array(3)].map((_, t) => <Skeleton key={t} width={60} height={24} />)}</div>
            </div>
          ))
        ) : (
          uxProjects.map((project, index) => (
            <ScrollReveal key={project.title} direction="up" delay={1300 + index * 100}>
              <div className={`project-block project-block--ux ${project.featured ? 'project-block--featured' : ''}`}>
                {project.featured && (
                  <div className="project-badge-featured project-badge-ux">⭐ UX Case Study</div>
                )}
                <div className="project-image-container">
                  <img src={project.imageUrl} alt={project.title + ' preview'} className="project-image-simple" />
                </div>
                <div className="project-simple-info">
                  <h3 className="project-simple-title">{project.title}</h3>
                  <p className="project-simple-desc">{project.description}</p>
                  {project.timeline && (<p className="project-timeline"><small>{project.timeline}</small></p>)}
                  <div className="project-simple-links">
                    <a href={project.projectUrl} className="project-simple-btn project-simple-btn--ux">
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> View Case Study
                    </a>
                  </div>
                  <div className="project-simple-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-simple-tag project-simple-tag--ux">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))
        )}
      </div>

    </div>
  </section>
);

export default Projects;
