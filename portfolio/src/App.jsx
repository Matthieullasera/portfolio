import { useState } from "react";
import Header from './components/Header';
import Me from './components/Me';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingButton';
import Section from './components/Section';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Header />
            <Section>
                <Me />
            </Section>
            <Section>
                <About />
            </Section>
            <Section>
                <Projects />
            </Section>
            <Section>
                <Skills />
            </Section>
            <Section>
                <Contact />
            </Section>
            <FloatingButton />

            {/* Bouton flottant */}
            <button className="floating-button" onClick={openModal}>
                Contact
            </button>

            {/* Modale */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>
                            ×
                        </button>
                        <h2>Contactez-moi</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Nom</label>
                                <input type="text" id="name" placeholder="Votre nom" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Votre email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="4" placeholder="Votre message"></textarea>
                            </div>
                            <button type="submit" className="submit-button">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;


