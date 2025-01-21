import ContactMeButton from "./ContactMeButton"
const Me = () => {
    const bannerText = (
        <>
            <span>Développeur Web Full Stack disponible maintenant </span>
            <span>•</span>
            <span>contactez moi pour plus d'informations</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>JavaScript</span>
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
                        <img src="./test-portfolio.jpg" alt="Avatar" />
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

