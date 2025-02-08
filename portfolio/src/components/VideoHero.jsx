import { useEffect, useRef } from 'react';

const VideoHero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.textContent.split('');
    titleRef.current.textContent = '';
    
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.1}s`;
      titleRef.current.appendChild(span);
    });
  }, []);

  return (
    <div className="video-hero">
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">MONTEUR VIDÉO</h1>
        <div className="hero-subtitle">
          <span>STORYTELLING</span>
          <span className="separator">|</span>
          <span>MOTION DESIGN</span>
          <span className="separator">|</span>
          <span>COLOR GRADING</span>
        </div>
        <p className="hero-text">
          Transformez votre vision en réalité visuelle captivante
        </p>
        <button className="hero-cta">DÉCOUVRIR MON TRAVAIL</button>
      </div>
      <div className="hero-background">
        <div className="grain-overlay"></div>
        <div className="vertical-lines"></div>
      </div>
    </div>
  );
};

export default VideoHero; 