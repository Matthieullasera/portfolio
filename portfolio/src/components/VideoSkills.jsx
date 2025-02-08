const VideoSkills = () => {
    const videoSkillCategories = {
        "Montage": [
            { id: 1, name: "Premiere Pro", icon: "devicon-premierepro-plain" },
            { id: 2, name: "After Effects", icon: "devicon-aftereffects-plain" },
            { id: 3, name: "DaVinci Resolve", icon: "devicon-davinciresolve-plain" }
        ],
        "Audio": [
            { id: 4, name: "Audition", icon: "devicon-audition-plain" },
            { id: 5, name: "Pro Tools", icon: "devicon-protools-plain" }
        ],
        "Autres": [
            { id: 6, name: "Photoshop", icon: "devicon-photoshop-plain" },
            { id: 7, name: "Media Encoder", icon: "devicon-mediaencoder-plain" }
        ]
    };

    return (
        <section id="skills" className="skills" aria-labelledby="skills-title">
            <h2 id="skills-title" className="line-title">Compétences</h2>
            <div className="skills-container" role="list">
                {Object.entries(videoSkillCategories).map(([category, skills]) => (
                    <div key={category} className="skills-category" role="listitem">
                        <h3>{category}</h3>
                        <div className="skills-grid" role="list">
                            {skills.map((skill) => (
                                <div 
                                    key={skill.id} 
                                    className="skill-card" 
                                    role="listitem"
                                    aria-label={`Compétence en ${skill.name}`}
                                >
                                    <div className="skill-icon" aria-hidden="true">
                                        <i className={skill.icon}></i>
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoSkills; 