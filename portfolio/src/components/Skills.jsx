const Skills = () => {
    const skills = [
        { id: 1, name: "React", icon: "devicon-react-original" },
        { id: 2, name: "Node.js", icon: "devicon-nodejs-plain" },
        { id: 3, name: "JavaScript", icon: "devicon-javascript-plain" },
        { id: 4, name: "CSS3", icon: "devicon-css3-plain" },
        { id: 6, name: "Git", icon: "devicon-git-plain" },
        { id: 8, name: "NoSQL", icon: "devicon-nosql-plain" },
        { id: 9, name: "HTML5", icon: "devicon-html5-plain" },
        { id: 10, name: "Sass", icon: "devicon-sass-original" },
        { id: 11, name: "Bootstrap", icon: "devicon-bootstrap-plain" },
    ];

    return (
        <section id="skills" className="skills">
            <h2>Compétences</h2>
            <div className="skills-circle">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-item">
                        <i className={skill.icon}></i>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;