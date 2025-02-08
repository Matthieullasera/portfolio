import PropTypes from 'prop-types';
import Carrousel from './Carrousel';

const About = ({ isVideo }) => {
    return (
        <section id="about" className="about">
            <h2 className="line-title">À propos</h2>
            <div className="about-content">
                <p>
                    {isVideo ? (
                        "Passionné par l'art du montage vidéo, je m'efforce de donner vie aux histoires à travers une narration visuelle captivante. Mon approche créative combine technique et sensibilité artistique pour créer des contenus qui marquent les esprits."
                    ) : (
                        "Bonjour et bienvenue sur mon portfolio ! Je m'appelle Matthieu, développeur web passionné, et j'aime avant tout créer des expériences numériques qui répondent aux besoins de chacun. Je suis arrivé ici en suivant ma curiosité pour le code et mon envie d'explorer sans cesse de nouvelles idées."
                    )}
                </p>
                <Carrousel />
            </div>
        </section>
    );
};

About.propTypes = {
    isVideo: PropTypes.bool
};

About.defaultProps = {
    isVideo: false
};

export default About;

