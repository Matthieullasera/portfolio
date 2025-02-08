import { useState, useRef } from 'react';

const VideoShowreel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-showreel">
      <div className="showreel-container">
        <video
          ref={videoRef}
          className="showreel-video"
          poster="/image/showreel-poster.jpg"
          playsInline
        >
          <source src="/video/showreel.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
        
        <button 
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={handlePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <span className="play-icon"></span>
        </button>

        <div className="showreel-overlay">
          <h2 className="section-title">SHOWREEL</h2>
          <p className="section-subtitle">Une sélection de mes meilleures réalisations</p>
        </div>
      </div>
    </div>
  );
};

export default VideoShowreel; 