import { useState } from 'react';

const DevSkills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skills = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Vue.js', level: 85, icon: '🟩' },
      { name: 'TypeScript', level: 85, icon: '📘' },
      { name: 'TailwindCSS', level: 90, icon: '🎨' },
      { name: 'Next.js', level: 80, icon: '▲' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Express', level: 85, icon: '⚡' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'PostgreSQL', level: 75, icon: '🐘' },
      { name: 'GraphQL', level: 70, icon: '◈' }
    ],
    tools: [
      { name: 'Git', level: 90, icon: '📚' },
      { name: 'Docker', level: 75, icon: '🐳' },
      { name: 'AWS', level: 70, icon: '☁️' },
      { name: 'Linux', level: 80, icon: '🐧' },
      { name: 'CI/CD', level: 75, icon: '🔄' }
    ]
  };

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];

  return (
    <div className="dev-skills">
      <h2>Compétences</h2>
    </div>
  );
};

export default DevSkills; 