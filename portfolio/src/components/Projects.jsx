import { useState } from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Kasa - Location Immobilière",
            description: "Application web de location immobilière développée avec React. Implémentation du front-end avec React Router pour la navigation, composants réutilisables, animations CSS et styling avec SASS. Focus sur l'expérience utilisateur et l'interface moderne.",
            image: "https://wallpapercave.com/wp/wp4924054.jpg",
            technologies: ["React", "React Router", "SASS", "Vite"]
        },
        {
            id: 2,
            title: "Portfolio Architecte - Sophie Bluel",
            description: "Développement d'une page web dynamique en JavaScript pour une architecte d'intérieur. Création d'une interface de gestion de galerie avec authentification administrateur, manipulation du DOM et intégration API. Focus sur l'interactivité utilisateur et la gestion des médias.",
            image: "https://wallpapercave.com/wp/wp4924063.jpg",
            technologies: ["JavaScript", "API REST", "HTML/CSS", "DOM"]
        },
        {
            id: 3,
            title: "Mon Vieux Grimoire - Backend",
            description: "Développement du backend d'un site de notation de livres avec Node.js et Express. Création d'une API RESTful, intégration de MongoDB, système d'authentification sécurisé et gestion optimisée des images. Architecture MVC et respect des principes du Green Code.",
            image: "https://wallpapercave.com/wp/wp4924066.jpg",
            technologies: ["Node.js", "Express", "MongoDB", "API REST", "JWT"]
        }
        // Ajoutez d'autres projets ici
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
                                <p className="description">{project.description}</p>
                            ) : (
                                <div className="click-more">
                                    <span>Cliquez pour voir la description</span>
                                </div>
                            )}
                            <div className="technologies">
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