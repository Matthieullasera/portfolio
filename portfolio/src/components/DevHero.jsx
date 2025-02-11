import { useEffect, useRef } from 'react';

const DevHero = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    const columns = {
      profile: `/** 
 * 👨‍💻 Développeur Full Stack
 */
const profile = {
  nom: "Développeur Full Stack",
  localisation: "France 🇫🇷",
  disponibilité: "Ouvert aux opportunités ✅",
  
  contact: {
    email: "✉️",
    linkedin: "💼",
    github: "🔗"
  }
}`,

      frontend: `/**
 * 🎨 Frontend Skills
 */
const frontendSkills = {
  frameworks: {
    react:    "⚛️ React.js - Expert",
    vue:      "💚 Vue.js - Avancé",
    next:     "▲ Next.js - Avancé"
  },

  styles: {
    css:      "🎨 CSS/SASS",
    tailwind: "🌊 TailwindCSS",
    styled:   "💅 Styled Components"
  },

  autres: {
    typescript: "📘 TypeScript",
    testing:    "🧪 Jest/Cypress",
    responsive: "📱 Responsive Design"
  }
}`,

      backend: `/**
 * 🔧 Backend Skills
 */
const backendSkills = {
  principal: {
    node:    "💻 Node.js - Expert",
    express: "🚂 Express - Expert",
    django:  "🐍 Django - Avancé"
  },

  databases: {
    postgres: "🐘 PostgreSQL",
    mongo:    "🍃 MongoDB",
    redis:    "🔴 Redis"
  },

  devops: {
    docker: "🐳 Docker",
    aws:    "☁️ AWS",
    ci_cd:  "🔄 CI/CD"
  }
}`
    };

    const columnRefs = {
      profile: document.createElement('pre'),
      frontend: document.createElement('pre'),
      backend: document.createElement('pre')
    };

    if (codeRef.current) {
      codeRef.current.className = 'code-container';
      codeRef.current.innerHTML = '';
      
      Object.keys(columnRefs).forEach(key => {
        columnRefs[key].className = 'code-column';
        codeRef.current.appendChild(columnRefs[key]);
      });
    }

    let currentLine = 0;
    const maxLines = Math.max(...Object.values(columns).map(col => col.split('\n').length));

    const typeCode = () => {
      if (currentLine < maxLines) {
        Object.keys(columns).forEach(key => {
          const lines = columns[key].split('\n');
          const currentText = lines.slice(0, currentLine + 1).join('\n');
          columnRefs[key].innerHTML = `${currentText}<span class="cursor">|</span>`;
        });
        currentLine++;
        setTimeout(typeCode, 200);
      }
    };

    typeCode();
    
    return () => {
      if (codeRef.current) {
        codeRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="profile-container">
          <div className="profile-image-wrapper">
            <img 
              src="./public/image/me.png" 
              alt="Matthieu LLASERA" 
              className="profile-image"
            />
            <div className="image-backdrop"></div>
          </div>
          <div className="profile-text">
            <h1>Matthieu LLASERA</h1>
            <h2>Développeur Full Stack</h2>
          </div>
        </div>
        <div ref={codeRef} className="code-container"></div>
      </div>
    </section>
  );
};

export default DevHero; 