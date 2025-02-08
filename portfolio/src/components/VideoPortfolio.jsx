import { useState, useEffect } from 'react';
import Section from './Section';
import VideoHero from './VideoHero';
import VideoShowreel from './VideoShowreel';
import VideoProjects from './VideoProjects';
import VideoServices from './VideoServices';
import VideoContact from './VideoContact';

const VideoPortfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="video-loader">
        <div className="loader-content">
          <div className="loader-bar"></div>
          <span>CHARGEMENT</span>
        </div>
      </div>
    );
  }

  return (
    <div className="video-portfolio">
      <Section>
        <VideoHero />
      </Section>
      
      <Section>
        <VideoShowreel />
      </Section>

      <Section>
        <VideoProjects />
      </Section>

      <Section>
        <VideoServices />
      </Section>

      <Section>
        <VideoContact />
      </Section>
    </div>
  );
};

export default VideoPortfolio; 