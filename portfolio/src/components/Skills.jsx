const Skills = () => {
    const skillCategories = {
        "Frontend": [
            { id: 1, name: "React", icon: "devicon-react-original" },
            { id: 3, name: "JavaScript", icon: "devicon-javascript-plain" },
            { id: 4, name: "CSS3", icon: "devicon-css3-plain" },
            { id: 9, name: "HTML5", icon: "devicon-html5-plain" },
            { id: 15, name: "Sass", icon: "devicon-sass-original" },
        ],
        "Backend": [
            { id: 2, name: "Node.js", icon: "devicon-nodejs-plain" },
            { id: 8, name: "MongoDB", icon: "devicon-mongodb-plain" },
            { id: 14, name: "API REST", icon: "devicon-nodejs-plain" },
        ],
        "Outils": [
            { id: 6, name: "Git", icon: "devicon-git-plain" },
            { id: 12, name: "VS Code", icon: "devicon-vscode-plain" },
            { id: 13, name: "Figma", icon: "devicon-figma-plain" },
            { id: 16, name: "Notion", icon: "devicon-notion-plain" },
        ]
    };

    return (
        <section id="skills" className="skills">
            <h2 className="line-title">Compétences</h2>
            <div className="skills-container">
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="skills-category">
                        <h3>{category}</h3>
                        <div className="skills-grid">
                            {skills.map((skill) => (
                                <div key={skill.id} className="skill-card">
                                    <div className="skill-icon">
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

export default Skills;