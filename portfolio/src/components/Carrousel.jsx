import { useState, useEffect } from 'react';

const Carrousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const videos = [
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/c4porjpqoyhmuei6vpl6",
            title: "Le football",
            description: "Une passion pour ce sport depuis toujours",
            icon: "⚽"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/xdttqvuep9gohrnpqk8u",
            title: "L'adrénaline",
            description: "Depuis petit j'ai toujours cherché à me surpasser",
            icon: "🎯"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/bgkidjx9prltvqi5javr",
            title: "Courir pour repousser ses limites",
            description: "Marathon de Barcelone, quelle expérience fantastique !",
            icon: "🏃"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/gccu9ept2jdlpof3bclc",
            title: "La randonnée",
            description: "Des moments hors du temps qui nous coupent du monde",
            icon: "🏔️"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/ieufftsoogn5gnpcvnpu",
            title: "Partir à l'aventure",
            description: "Découvrir le monde, vivre des expériences inoubliables",
            icon: "✈️"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning) {
                handleNext();
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [activeIndex, isTransitioning]);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prev) => (prev + 1) % videos.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    return (
        <div className="carousel-new">
            <div className="carousel-container">
                <div className="video-wrapper">
                    <video
                        key={videos[activeIndex].url}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={isTransitioning ? 'transitioning' : ''}
                    >
                        <source src={videos[activeIndex].url} type="video/mp4" />
                    </video>
                    
                    <div className="video-overlay">
                        <div className="video-info">
                            <h3>
                                {videos[activeIndex].title}
                                <span className="video-icon">{videos[activeIndex].icon}</span>
                            </h3>
                            <p>{videos[activeIndex].description}</p>
                        </div>
                    </div>
                </div>

                <div className="carousel-controls">
                    <button 
                        className="control-btn prev" 
                        onClick={handlePrev}
                        aria-label="Précédent"
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path 
                                fill="currentColor" 
                                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                            />
                        </svg>
                    </button>
                    
                    <button 
                        className="control-btn next" 
                        onClick={handleNext}
                        aria-label="Suivant"
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path 
                                fill="currentColor" 
                                d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="carousel-indicators">
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => {
                                if (!isTransitioning && index !== activeIndex) {
                                    setIsTransitioning(true);
                                    setActiveIndex(index);
                                    setTimeout(() => setIsTransitioning(false), 500);
                                }
                            }}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carrousel;
