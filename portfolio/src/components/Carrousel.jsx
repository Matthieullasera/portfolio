import { useState, useEffect, useRef, useCallback } from 'react';

const Carrousel = () => {
    const videos = [
        {
            url: "",
            title: ""
        },
        {
            url: "",
            title: ""
        },
        {
            url: "",
            title: ""
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
            <button className="carousel-btn prev" onClick={prevVideo}>←</button>
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
            <button className="carousel-btn next" onClick={nextVideo}>→</button>
        </div>
    );
};

export default Carrousel;
