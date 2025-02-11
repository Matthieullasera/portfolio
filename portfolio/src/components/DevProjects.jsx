import { useState, useEffect } from 'react';

const DevProjects = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const projects = [
        {
            id: 1,
            title: "Kasa - Location Immobilière",
            description: "Application web de location immobilière développée avec React dans le cadre de ma formation OpenClassrooms. Implémentation du front-end avec React Router pour la navigation, composants réutilisables, animations CSS et styling avec SASS. Focus sur l'expérience utilisateur et l'interface moderne.",
            image: "/image/kasa.png",
            technologies: ["React", "React Router", "SASS", "Vite"],
            formation: "OpenClassrooms",
            github: "https://github.com/Matthieullasera/kasa_project"
        },
        {
            id: 2,
            title: "Portfolio Architecte - Sophie Bluel",
            description: "Développement d'une page web dynamique en JavaScript pour une architecte d'intérieur dans le cadre de ma formation OpenClassrooms. Création d'une interface de gestion de galerie avec authentification administrateur, manipulation du DOM et intégration API. Focus sur l'interactivité utilisateur et la gestion des médias.",
            image: "/image/sophie_bluel1.png",
            technologies: ["JavaScript", "API REST", "HTML/CSS", "DOM"],
            formation: "OpenClassrooms",
            github: "https://github.com/Matthieullasera/Portfolio-architecte-sophie-bluel"
        },
        {
            id: 3,
            title: "Mon Vieux Grimoire - Backend",
            description: "Développement du backend d'un site de notation de livres avec Node.js et Express dans le cadre de ma formation OpenClassrooms. Création d'une API RESTful, intégration de MongoDB, système d'authentification sécurisé et gestion optimisée des images. Architecture MVC et respect des principes du Green Code.",
            image: "/image/grimoire.png",
            technologies: ["Node.js", "Express", "MongoDB", "API REST", "JWT"],
            formation: "OpenClassrooms",
            github: "https://github.com/Matthieullasera/Back"
        }
    ];

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveProject((prev) => (prev + 1) % projects.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning) {
                handleNext();
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [activeProject, isTransitioning]);

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Mes Projets</h2>
            
            <div className="projects-showcase">
                <div className="project-container">
                    <div className="project-image" style={{ backgroundImage: `url(${projects[activeProject].image})` }}>
                        <div className="project-overlay">
                            <span className="formation-badge">{projects[activeProject].formation}</span>
                        </div>
                    </div>
                    
                    <div className="project-content">
                        <h3>{projects[activeProject].title}</h3>
                        <p>{projects[activeProject].description}</p>
                        
                        <div className="tech-stack">
                            {projects[activeProject].technologies.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                        
                        <a 
                            href={projects[activeProject].github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Voir le code
                        </a>
                    </div>
                </div>

                <div className="project-controls">
                    <button 
                        className="control-btn prev" 
                        onClick={handlePrev}
                        aria-label="Projet précédent"
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                    </button>
                    
                    <div className="project-indicators">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === activeProject ? 'active' : ''}`}
                                onClick={() => {
                                    if (!isTransitioning && index !== activeProject) {
                                        setIsTransitioning(true);
                                        setActiveProject(index);
                                        setTimeout(() => setIsTransitioning(false), 500);
                                    }
                                }}
                                aria-label={`Projet ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    <button 
                        className="control-btn next" 
                        onClick={handleNext}
                        aria-label="Projet suivant"
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DevProjects; 