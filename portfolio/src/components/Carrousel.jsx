import { useState, useRef, useCallback } from 'react';

const Carrousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const videoRef = useRef(null);
    const nextVideoRef = useRef(null);

    const videos = [
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/c4porjpqoyhmuei6vpl6",
            title: "Le football",
            description: "une passion pour ce sport depuis toujours"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/xdttqvuep9gohrnpqk8u",
            title: "L'adrenaline",
            description: "Depuis petit j'ai toujours cherché à me surpasser ( on ne dirait pas comme ça mais c'est un plongeon de 8m de haut !)"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/bgkidjx9prltvqi5javr",
            title: "Courir pour repousser ses limites",
            description: "J'ai l'année dernière couru le marathon de Barcelone, quel expérience fantastique ! mais aussi douloureuse !"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/gccu9ept2jdlpof3bclc",
            title: "La randonnée",
            description: "des moments hors du temps qui nous coupent du monde"
        },
        {
            url: "https://res.cloudinary.com/dr1zmiycg/video/upload/v1/ieufftsoogn5gnpcvnpu",
            title: "Partir à l'aventure",
            description: "Découvrir le monde, c'est une passion qui me pousse à vivre des expériences inoubliables"
        }
    ];

    const nextVideo = useCallback(() => {
        setIsTransitioning(true);
        const nextIndex = (currentIndex + 1) % videos.length;
        
        if (nextVideoRef.current) {
            nextVideoRef.current.src = videos[nextIndex].url;
            nextVideoRef.current.load();
        }
        
        setTimeout(() => {
            setCurrentIndex(nextIndex);
            setIsTransitioning(false);
        }, 300);
    }, [currentIndex]);

    const prevVideo = () => {
        setIsTransitioning(true);
        const nextIndex = (currentIndex - 1 + videos.length) % videos.length;
        
        if (nextVideoRef.current) {
            nextVideoRef.current.src = videos[nextIndex].url;
            nextVideoRef.current.load();
        }
        
        setTimeout(() => {
            setCurrentIndex(nextIndex);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className="carousel">
            <button className="carousel-btn prev" onClick={prevVideo} aria-label="Vidéo précédente"></button>
            <div className="video-container">
                <video 
                    ref={videoRef}
                    key={videos[currentIndex].url}
                    autoPlay 
                    muted 
                    playsInline
                    className={`video-current ${isTransitioning ? 'fade-out' : 'fade-in'}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                    <source src={videos[currentIndex].url} type="video/mp4" />
                </video>
                <video 
                    ref={nextVideoRef}
                    className="video-next"
                    muted 
                    playsInline
                    style={{ display: 'none' }}
                >
                    <source src="" type="video/mp4" />
                </video>
                <div className="video-overlay">
                    <div className="video-info">
                        <h3>{videos[currentIndex].title}</h3>
                        <p>{videos[currentIndex].description}</p>
                    </div>
                </div>
                <div className="progress-indicator">
                    {videos.map((_, index) => (
                        <div 
                            key={index} 
                            className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
                            aria-label={`Vidéo ${index + 1} sur ${videos.length}`}
                        ></div>
                    ))}
                </div>
            </div>
            <button className="carousel-btn next" onClick={nextVideo} aria-label="Vidéo suivante"></button>
        </div>
    );
};

export default Carrousel;
