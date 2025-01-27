import { useState, useEffect, useRef, useCallback } from 'react';

const Carrousel = () => {
    const videos = [
        {
            url: "videos/videofoot.mp4",
            title: "Le football",
            description: "une passion pour ce sport depuis toujours"
        },
        {
            url: "/videos/GX010438.MP4",
            title: "L'adrenaline",
            description: "Depuis petit j'ai toujours cherché à me surpasser ( on ne dirait pas comme ça mais c'est un plongeon de 8m de haut !)"
        },
        {
            url: "videos/Séquence_09_2.mp4",
            title: "Courir pour repousser ses limites",
            description: "J'ai l'année dernière couru le marathon de Barcelone, quel expérience fantastique ! mais aussi douloureuse !"
        },
        {
            url: "/videos/IMG_3235 2.MOV",
            title: "La randonnée",
            description: "des moments hors du temps qui nous coupent du monde"
        },
        {
            url: "videos/Séquence_09.mp4",
            title: "Partir à l'aventure",
            description: "Découvrir le monde, c'est une passion qui me pousse à vivre des expériences inoubliables"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);

    const nextVideo = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, []);

    const prevVideo = () => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        
        if (videoElement) {
            const handleEnded = () => {
                nextVideo();
            };
            
            videoElement.addEventListener('ended', handleEnded);
            
            return () => {
                videoElement.removeEventListener('ended', handleEnded);
            };
        }
    }, [currentIndex, nextVideo]);

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
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                    <source src={videos[currentIndex].url} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
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
