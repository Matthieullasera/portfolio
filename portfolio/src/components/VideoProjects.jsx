import { useState } from 'react';

const VideoProjects = () => {
    const projects = [
        {
            id: 1,
            title: "Clip Musical - Artiste X",
            description: "Montage rythmique et dynamique d'un clip musical, avec effets visuels et transitions créatives. Synchronisation précise avec la musique et color grading personnalisé.",
            image: "/image/clip.jpg",
            technologies: ["Premiere Pro", "After Effects", "Color Grading"],
            type: "Clip Musical"
        },
        {
            id: 2,
            title: "Film Corporate - Entreprise Y",
            description: "Réalisation d'une vidéo corporate mettant en valeur l'identité et les valeurs de l'entreprise. Montage professionnel avec voice-over et animations graphiques.",
            image: "/image/corporate.jpg",
            technologies: ["Premiere Pro", "Motion Design", "Sound Design"],
            type: "Corporate"
        },
        {
            id: 3,
            title: "Court-métrage - Festival Z",
            description: "Montage d'un court-métrage narratif avec une attention particulière portée au rythme et à l'émotion. Travail approfondi sur l'ambiance sonore et les transitions.",
            image: "/image/court-metrage.jpg",
            technologies: ["DaVinci Resolve", "Pro Tools", "Color Grading"],
            type: "Court-métrage"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="projects" className="game-section">
            <h2 className="line-title">Réalisations</h2>
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
                                <span className="formation-tag">{project.type}</span>
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

export default VideoProjects; 