import Carrousel from './Carrousel';

const About = () => {
    return (
        <section id="about" className="about">
            <h2>À propos</h2>
            <div className="about-content">
                <p>
                    Je suis un développeur web passionné qui aime créer et innover. Voici quelques-unes des choses que j apprécie :
                </p>
                <Carrousel />
            </div>
        </section>
    );
};

export default About;
