import PropTypes from 'prop-types';
import Carrousel from './Carrousel';

const About = ({ isVideo }) => {
    return (
        <div className="about-container">
            <div className="about-text">
                <h2>À propos</h2>
                <p>
                    Bonjour ! Je suis Matthieu, développeur web passionné par la création d'expériences numériques innovantes. 
                    Mon parcours est guidé par une curiosité insatiable pour les nouvelles technologies et une volonté constante 
                    de repousser les limites du possible dans le développement web.
                </p>
                <p>
                    À droite, découvrez en images ce qui me passionne en dehors du code : le sport, l'aventure et les défis personnels. 
                    Ces vidéos illustrent ma personnalité et mon goût pour le dépassement de soi, des qualités que j'applique 
                    également dans mes projets de développement.
                </p>
                <div className="about-cards">
                    <div className="card">
                        <span className="icon">🎯</span>
                        <h4>Vision</h4>
                        <p>Créer des solutions web innovantes qui allient performance et expérience utilisateur</p>
                    </div>
                    <div className="card">
                        <span className="icon">💡</span>
                        <h4>Approche</h4>
                        <p>Allier créativité et expertise technique pour des résultats exceptionnels</p>
                    </div>
                    <div className="card">
                        <span className="icon">🚀</span>
                        <h4>Objectif</h4>
                        <p>Repousser constamment les limites pour créer des expériences web mémorables</p>
                    </div>
                </div>
            </div>
            <div className="about-carousel">
                <Carrousel />
            </div>
        </div>
    );
};

About.propTypes = {
    isVideo: PropTypes.bool
};

About.defaultProps = {
    isVideo: false
};

export default About;

