import { useState, useRef, useCallback } from 'react';

const Carrousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const videoRef = useRef(null);

    const videos = [
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/c4porjpqoyhmuei6vpl6",
            title: "Le football",
            description: "Une passion pour ce sport depuis toujours"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/xdttqvuep9gohrnpqk8u",
            title: "L'adrénaline",
            description: "Depuis petit j'ai toujours cherché à me surpasser (on ne dirait pas comme ça mais c'est un plongeon de 8m de haut !)"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/bgkidjx9prltvqi5javr",
            title: "Courir pour repousser ses limites",
            description: "J'ai l'année dernière couru le marathon de Barcelone, quelle expérience fantastique ! mais aussi douloureuse !"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/gccu9ept2jdlpof3bclc",
            title: "La randonnée",
            description: "Des moments hors du temps qui nous coupent du monde"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/ieufftsoogn5gnpcvnpu",
            title: "Partir à l'aventure",
            description: "Découvrir le monde, c'est une passion qui me pousse à vivre des expériences inoubliables"
        }
    ];

    const handleNavigation = (direction) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        
        const nextIndex = direction === 'next' 
            ? (currentIndex + 1) % videos.length
            : (currentIndex - 1 + videos.length) % videos.length;

        setTimeout(() => {
            setCurrentIndex(nextIndex);
            setIsTransitioning(false);
        }, 500);
    };

    return (
        <section className="video-carousel">
            <div className="carousel-inner">
                <div className="video-wrapper">
                    <video 
                        ref={videoRef}
                        key={videos[currentIndex].url}
                        autoPlay 
                        muted 
                        loop
                        playsInline
                        className={isTransitioning ? 'transitioning' : ''}
                    >
                        <source src={videos[currentIndex].url} type="video/mp4" />
                    </video>
                </div>

                <div className="content-overlay">
                    <div className="content-wrapper">
                        <h2>{videos[currentIndex].title}</h2>
                        <p>{videos[currentIndex].description}</p>
                    </div>
                </div>

                <div className="navigation">
                    <button 
                        className="nav-btn prev"
                        onClick={() => handleNavigation('prev')}
                        aria-label="Précédent"
                    >
                        <span>←</span>
                    </button>
                    <div className="dots">
                        {videos.map((_, idx) => (
                            <button
                                key={idx}
                                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                                onClick={() => {
                                    if (!isTransitioning && idx !== currentIndex) {
                                        setIsTransitioning(true);
                                        setTimeout(() => {
                                            setCurrentIndex(idx);
                                            setIsTransitioning(false);
                                        }, 500);
                                    }
                                }}
                                aria-label={`Slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <button 
                        className="nav-btn next"
                        onClick={() => handleNavigation('next')}
                        aria-label="Suivant"
                    >
                        <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Carrousel;
