import { useState } from 'react';

const Projects = () => {
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

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="projects" className="game-section">
            <h2 className="line-title">Mes Projets</h2>
            <div className="custom-carousel">
                {projects.map((project, index) => (
                    <div 
                        key={project.id}
                        className={`item ${index === activeIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${project.image})` }}
                        onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                    >
                        <div className="item-desc">
                            <h3>{project.title}</h3>
                            {index === activeIndex ? (
                                <>
                                    <p className="description">{project.description}</p>
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="github-link"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <i className="devicon-github-original"></i>
                                        Voir le code
                                    </a>
                                </>
                            ) : (
                                <div className="click-more">
                                    <span>Cliquez pour voir la description</span>
                                </div>
                            )}
                            <div className="technologies">
                                <span className="formation-tag">{project.formation}</span>
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects; 