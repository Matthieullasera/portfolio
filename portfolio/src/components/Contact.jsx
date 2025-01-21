const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logique d'envoi du formulaire ici
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p className="contact-description">
                    N'hésitez pas à me contacter pour toute question ou proposition de projet.
                </p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <input type="text" id="name" required className="form-input" placeholder=" " />
                        <label htmlFor="name" className="form-label">Nom</label>
                    </div>

                    <div className="form-group">
                        <input type="email" id="email" required className="form-input" placeholder=" " />
                        <label htmlFor="email" className="form-label">Email</label>
                    </div>

                    <div className="form-group">
                        <input type="text" id="subject" required className="form-input" placeholder=" " />
                        <label htmlFor="subject" className="form-label">Sujet</label>
                    </div>

                    <div className="form-group">
                        <textarea id="message" required className="form-input" placeholder=" " rows="5"></textarea>
                        <label htmlFor="message" className="form-label">Message</label>
                    </div>

                    <button type="submit" className="submit-btn">
                        Envoyer
                        <span className="submit-btn-icon">→</span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
