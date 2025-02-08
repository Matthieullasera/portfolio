import { useState } from 'react';

const VideoContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log('Form submitted:', formData);
  };

  return (
    <div className="video-contact">
      <div className="contact-content">
        <div className="contact-info">
          <h2 className="section-title">COLLABORONS</h2>
          <p className="contact-text">
            Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos idées 
            et créer ensemble un contenu vidéo qui vous démarquera.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📧</span>
              <a href="mailto:contact@example.com">contact@example.com</a>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <a href="tel:+33600000000">+33 6 00 00 00 00</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="Type de projet"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet..."
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            ENVOYER
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoContact; 