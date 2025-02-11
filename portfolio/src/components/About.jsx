import PropTypes from 'prop-types';
import Carrousel from './Carrousel';

const About = () => {
    return (
        <div className="about-new">
            <div className="about-content">
                <div className="about-left">
                    <h2 className="about-title">À propos</h2>
                    <div className="about-text-content">
                        <p className="about-description">
                            Bonjour ! Je suis Matthieu, développeur web passionné par la création d'expériences numériques innovantes. 
                            Mon parcours est guidé par une curiosité insatiable pour les nouvelles technologies et une volonté constante 
                            de repousser les limites du possible dans le développement web.
                        </p>
                        
                        <div className="about-values">
                            <div className="value-item">
                                <div className="value-icon">🎯</div>
                                <div className="value-content">
                                    <h3>Vision</h3>
                                    <p>Créer des solutions web innovantes qui allient performance et expérience utilisateur</p>
                                </div>
                            </div>
                            
                            <div className="value-item">
                                <div className="value-icon">💡</div>
                                <div className="value-content">
                                    <h3>Approche</h3>
                                    <p>Allier créativité et expertise technique pour des résultats exceptionnels</p>
                                </div>
                            </div>
                            
                            <div className="value-item">
                                <div className="value-icon">🚀</div>
                                <div className="value-content">
                                    <h3>Objectif</h3>
                                    <p>Repousser constamment les limites pour créer des expériences web mémorables</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="about-right">
                    <Carrousel />
                </div>
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

