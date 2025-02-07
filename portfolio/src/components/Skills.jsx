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
            { 
                id: 16, 
                name: "Notion", 
                customIcon: true,
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjAuNywyMy4zYzEuOSwxLjUsMi42LDEuNCw2LjEsMS4ybDMzLTJjMC43LDAsMC4xLTAuNy0wLjEtMC44TDUyLjksMTguN2MtMS0wLjgtMi41LTEuOC01LjEtMS41TDEzLjQsMTguOCBjLTEuMiwwLjEtMS40LDAuNy0wLjksMS4yTDIwLjcsMjMuM3ogTTIyLjcsMzFWNjZjMCwxLjksMC45LDIuNiwzLDIuNGwzNi4zLTIuMWMyLjEtMC4xLDIuMy0xLjQsMi4zLTIuOVYzMi45IGMwLTEuNS0wLjYtMi4zLTEuOS0yLjJMMjQuNywzM0MyMy4zLDMzLjEsMjIuNywzMy45LDIyLjcsMzF6IE01OC41LDMyLjljMC4yLDEuMSwwLDIuMS0xLjEsMi4ybC0xLjcsMC40djI1LjcgYy0xLjUsMC44LTIuOSwxLjMtNC4xLDEuM2MtMS45LDAtMi4zLTAuNi0zLjctMi4zbC0xMS40LTE4djE3LjRsMi40LDAuNmMwLDAsMCwyLjEtMi45LDIuMWwtOCwwLjVjLTAuMi0wLjUsMC0xLjYsMC44LTEuOSBsMi4xLTAuNlYzOC42bC0yLjMtMC4yYy0wLjItMS4xLDAuMy0yLjYsMi0yLjdsOC42LTAuNmwxMS45LDE4LjJWMzQuM2wtMy0wLjNjLTAuMi0xLjMsMC43LTIuMiwxLjktMi4zTDU4LjUsMzIuOXogTTExLjUsMTUuMiBsMzMuMy0yLjRjNC4xLTAuNCw1LjEtMC4xLDcuNywxLjhsMTAuNiw3LjVjMS43LDEuMywyLjMsMS42LDIuMywzdjQwLjljMCwyLjYtMC45LDQuMS00LjIsNC4zTDIzLjMsNzIuNiBjLTIuNCwwLjEtMy42LTAuMi00LjktMS45TDExLDU5LjNjLTEuNC0yLjEtMi0zLjUtMi01LjRWMjEuMkM5LDE4LjgsMTAsMTUuMywxMS41LDE1LjJ6Ii8+PC9zdmc+"
            }
        ]
    };

    return (
        <section id="skills" className="skills" aria-labelledby="skills-title">
            <h2 id="skills-title" className="line-title">Compétences</h2>
            <div className="skills-container" role="list">
                {Object.entries(skillCategories).map(([category, skills]) => (
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
                                        {skill.customIcon ? (
                                            <img 
                                                src={skill.icon} 
                                                alt={`${skill.name} icon`}
                                                loading="lazy"
                                                width="56"
                                                height="56"
                                            />
                                        ) : (
                                            <i className={skill.icon}></i>
                                        )}
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