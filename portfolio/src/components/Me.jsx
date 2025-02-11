import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import ContactMeButton from "./ContactMeButton"

const Me = ({ isVideo }) => {
    const bioRef = useRef(null);

    useEffect(() => {
        const code = `/**
 * @dev Matthieu LLASERA
 * @role Développeur Full Stack Passionné
 */

class Developer {
  constructor() {
    this.identity = {
      firstName: "Matthieu",
      lastName: "LLASERA",
      role: "Développeur Full Stack",
      location: "🇫🇷 France"
    }

    this.skills = {
      frontend: [
        "⚛️ React.js",
        "💚 Vue.js",
        "📱 Responsive Design"
      ],
      backend: [
        "💻 Node.js",
        "🚀 Express",
        "🔄 API REST"
      ],
      database: [
        "🗄️ PostgreSQL",
        "🍃 MongoDB",
        "📊 SQL/NoSQL"
      ]
    }

    this.interests = [
      "🎯 Clean Code",
      "🔧 Architecture",
      "🚀 Innovation"
    ]
  }

  getStatus() {
    return "✨ Disponible pour nouveaux projets"
  }
}

// Initialisation
const matthieu = new Developer()
matthieu.getStatus()`;

        let currentLine = 0;
        const lines = code.split('\n');
        
        const typeCode = () => {
            if (bioRef.current && currentLine < lines.length) {
                const currentText = lines.slice(0, currentLine + 1).join('\n');
                bioRef.current.innerHTML = `${currentText}<span class="cursor">|</span>`;
                currentLine++;
                setTimeout(typeCode, 100);
            }
        };

        typeCode();
    }, []);

    const bannerText = isVideo ? (
        <>
            <span>Monteur Vidéo Professionnel</span>
            <span>•</span>
            <span>Motion Design</span>
            <span>•</span>
            <span>Color Grading</span>
            <span>•</span>
            <span>Sound Design</span>
            <span>•</span>
            <span>Disponible pour nouveaux projets</span>
            <span>•</span>
        </>
    ) : (
        <>
            <span>Développeur Web Full Stack React & Node.js</span>
            <span>•</span>
            <span>Création d'applications web modernes</span>
            <span>•</span>
            <span>Responsive Design</span>
            <span>•</span>
            <span>Interfaces utilisateur dynamiques</span>
            <span>•</span>
            <span>API REST</span>
            <span>•</span>
            <span>Disponible pour nouveaux projets</span>
            <span>•</span>
        </>
    );

    return (
        <section className="me-section">
            <div className="me-header">
                <h1>Matthieu LLASERA</h1>
                <h2>Développeur Full Stack</h2>
            </div>
            <div className="me-container">
                <div className="me-profile">
                    <div className="profile-image-container">
                        <img 
                            src="me.png" 
                            alt="Matthieu LLASERA" 
                            className="profile-image"
                        />
                        <div className="image-backdrop"></div>
                    </div>
                </div>
                <div className="me-code">
                    <pre ref={bioRef} className="code-block"></pre>
                </div>
            </div>
            <div className="banner">
                <div className="banner-content">
                    {bannerText}
                    {bannerText}
                    {bannerText}
                </div>
            </div>
            <div className="me-content">
                <div className="text-content">
                    <div className="title-wrapper">
                        <h1>Matthieu LLASERA</h1>
                        <div className="subtitle-wrapper">
                            <h2>{isVideo ? "Monteur Vidéo" : "Développeur Web"}</h2>
                            <span className="highlight">
                                {isVideo ? "Créatif" : "Full Stack"}
                            </span>
                        </div>
                    </div>
                    <p className="bio">
                        {isVideo 
                            ? "Passionné par la création audiovisuelle et spécialisé dans le montage vidéo créatif. Expert en post-production et effets visuels."
                            : "Passionné par le développement web et spécialisé dans la création d'applications modernes et performantes."
                        }
                    </p>
                </div>
                <div className="button-wrapper">
                    <ContactMeButton />
                </div>
            </div>
        </section>
    );
};

Me.propTypes = {
    isVideo: PropTypes.bool
};

Me.defaultProps = {
    isVideo: false
};

export default Me;

