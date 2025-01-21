import { useState } from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Projet 1",
            description: "Description détaillée du projet 1",
            image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg"
        },
        {
            id: 2,
            title: "Projet 2",
            description: "Description détaillée du projet 2",
            image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg"
        },
        {
            id: 3,
            title: "Projet 3",
            description: "Description détaillée du projet 3",
            image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg"
        }
        // Ajoutez d'autres projets ici
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="projects" className="game-section">
            <h2 className="line-title">Mes Projets</h2>
            <div className="custom-carousel">
                {projects.map((project, index) => (
                    <div 
                        key={project.id}
                        className={`item ${index === activeIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${project.image})` }}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div className="item-desc">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects; 