import { useState } from 'react';
import emailjs from '@emailjs/browser';

const FloatingButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                e.target,
                'YOUR_PUBLIC_KEY'
            );
            alert('Message envoyé avec succès!');
            setIsModalOpen(false);
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue');
        }
    };

    return (
        <>
            <button className="floating-button" onClick={() => setIsModalOpen(true)}>
                Contact
            </button>

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setIsModalOpen(false)}>
                            ×
                        </button>
                        <h2>Contactez-moi</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input type="text" id="floating-name" required className="form-input" placeholder=" " name="name" />
                                <label htmlFor="floating-name" className="form-label">Nom</label>
                            </div>

                            <div className="form-group">
                                <input type="email" id="floating-email" required className="form-input" placeholder=" " name="email" />
                                <label htmlFor="floating-email" className="form-label">Email</label>
                            </div>

                            <div className="form-group">
                                <textarea id="floating-message" required className="form-input" placeholder=" " rows="4" name="message"></textarea>
                                <label htmlFor="floating-message" className="form-label">Message</label>
                            </div>

                            <button type="submit" className="submit-btn">
                                Envoyer
                                <span className="submit-btn-icon">→</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingButton;