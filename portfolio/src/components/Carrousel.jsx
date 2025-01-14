import { useState } from 'react';

const Carousel = () => {
    const items = [
        '/path-to-video-or-image1.jpg',
        '/path-to-video-or-image2.jpg',
        '/path-to-video-or-image3.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="carousel">
            <button className="prev" onClick={prevSlide}>←</button>
            <img src={items[currentIndex]} alt="Carousel item" />
            <button className="next" onClick={nextSlide}>→</button>
        </div>
    );
};

export default Carousel;
