import React, { useEffect } from 'react';

const DevHero = () => {
    useEffect(() => {
        const h1 = document.querySelector('.profile-info h1');
        const h2 = document.querySelector('.profile-info h2');
        const availability = document.querySelector('.profile-info .availability');

        setTimeout(() => h1.classList.add('typed'), 500);
        setTimeout(() => h2.classList.add('typed'), 1000);
        setTimeout(() => availability.classList.add('typed'), 1500);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="profile-container">
                    <div className="profile-image-wrapper">
                        <img 
                            src="./public/image/me.png" 
                            alt="Matthieu LLASERA" 
                            className="profile-image"
                        />
                        <div className="image-backdrop"></div>
                    </div>
                    
                    <div className="profile-info">
                        <h1>Matthieu LLASERA</h1>
                        <h2>Développeur Web Full Stack</h2>
                        <p className="availability">
                            <span className="status-dot"></span>
                            Disponible pour de nouvelles opportunités
                        </p>
                        
                        <div className="social-links">
                            <a 
                                href="https://github.com/Matthieullasera" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-button github"
                            >
                                <i className="devicon-github-original"></i>
                                GitHub
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/matthieu-llasera/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-button linkedin"
                            >
                                <i className="devicon-linkedin-plain"></i>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevHero; 