import ContactMeButton from "./ContactMeButton"
const Me = () => {
    const bannerText = (
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
        <section id="me" className="me">
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
                            <h2>Développeur Web</h2>
                            <span className="highlight">Full Stack</span>
                        </div>
                    </div>
                    <p className="bio">
                        Passionné par le développement web et spécialisé dans la création 
                        d'applications modernes et performantes.
                    </p>
                </div>
                <div className="avatar-container">
                    <div className="avatar">
                        <img src="src/image/me.png" alt="Avatar" />
                    </div>
                    <div className="avatar-backdrop"></div>
                </div>
                <div className="button-wrapper">
                    <ContactMeButton />
                </div>
            </div>
        </section>
    );
};

export default Me;

