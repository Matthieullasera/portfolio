import Carrousel from './Carrousel';

const About = () => {
    return (
        <section id="about" className="about">
            <h2 className="line-title">À propos</h2>
            <div className="about-content">
                <p>
                    Bonjour et bienvenue sur mon portfolio ! Je m'apelle Matthieu, développeur web passionné, et j'aime avant tout créer des expériences numériques qui répondent aux besoins de chacun. 
                    Je suis arrivé ici en suivant ma curiosité pour le code et mon envie d'explorer sans cesse de nouvelles idées. 
                    À côté, vous découvrirez un carrousel vidéo qui reflète mes passions : un aperçu de ce qui m'anime au quotidien, aussi bien en dehors que derrière l'écran. Bonne visite !
                </p>
                <Carrousel />
            </div>
        </section>
    );
};

export default About;

