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
            <h1>Matthieu LLASERA</h1>
            <h2>Développeur Web</h2>
            <div className="avatar">
                <img src="./test-portfolio.jpg" alt="Avatar" />
            </div>
            <div className="button-container">
                <ContactMeButton />
            </div>
        </section>
    );
};

export default Me;

