import { useState } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';

const Contact = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            e.target.reset();
            setShowConfirmation(true);
            // Ferme les deux modales après 2 secondes
            setTimeout(() => {
                setShowConfirmation(false);
                onClose();
                setStatus('');
            }, 2000);
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="contact-modal">
                <div className="modal-overlay" onClick={onClose}></div>
                <section className="contact">
                    <button className="close-button" onClick={onClose}>×</button>
                    <div className="contact-container">
                        <h2>Contactez-moi</h2>
                        <p className="contact-description">
                            N'hésitez pas à me contacter pour toute question ou proposition de projet.
                        </p>
                        
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="user_name" 
                                    required 
                                    className="form-input" 
                                    placeholder=" " 
                                />
                                <label className="form-label">Nom</label>
                            </div>

                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="user_email" 
                                    required 
                                    className="form-input" 
                                    placeholder=" " 
                                />
                                <label className="form-label">Email</label>
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="subject" 
                                    required 
                                    className="form-input" 
                                    placeholder=" " 
                                />
                                <label className="form-label">Sujet</label>
                            </div>

                            <div className="form-group">
                                <textarea 
                                    name="message" 
                                    required 
                                    className="form-input" 
                                    placeholder=" " 
                                    rows="5"
                                ></textarea>
                                <label className="form-label">Message</label>
                            </div>

                            <button 
                                type="submit" 
                                className="submit-btn" 
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
                            </button>

                            <div className="message-container">
                                {status === 'success' && (
                                    <div className="message success">
                                        ✓ Message envoyé avec succès !
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="message error">
                                        ✕ Une erreur est survenue. Veuillez réessayer.
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </section>
            </div>

            {/* Modale de confirmation */}
            {showConfirmation && (
                <div className="confirmation-modal">
                    <div className="confirmation-content">
                        <div className="success-icon">✓</div>
                        <h2>Message envoyé !</h2>
                        <p>Merci pour votre message</p>
                    </div>
                </div>
            )}
        </>
    );
};

Contact.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Contact;
