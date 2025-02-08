import { useState } from 'react';

const VideoServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Montage Vidéo",
      icon: "🎬",
      description: "Montage professionnel pour tous types de projets : clips musicaux, films d'entreprise, courts-métrages, contenus web...",
      details: [
        "Montage rythmique et dynamique",
        "Synchronisation audio/vidéo",
        "Transitions créatives",
        "Optimisation du storytelling"
      ]
    },
    {
      id: 2,
      title: "Motion Design",
      icon: "✨",
      description: "Création d'animations graphiques et d'effets visuels pour dynamiser vos contenus et renforcer votre message.",
      details: [
        "Animation de logos",
        "Habillage graphique",
        "Titres animés",
        "Infographies animées"
      ]
    },
    {
      id: 3,
      title: "Color Grading",
      icon: "🎨",
      description: "Étalonnage couleur professionnel pour donner une identité visuelle unique à vos projets.",
      details: [
        "Correction colorimétrique",
        "Look cinématographique",
        "Harmonisation des plans",
        "Ambiance visuelle personnalisée"
      ]
    },
    {
      id: 4,
      title: "Sound Design",
      icon: "🎵",
      description: "Travail approfondi sur l'ambiance sonore pour une expérience immersive.",
      details: [
        "Mix audio professionnel",
        "Habillage sonore",
        "Sound effects (SFX)",
        "Mastering audio"
      ]
    }
  ];

  return (
    <div className="video-services">
      <h2 className="section-title">SERVICES</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`service-card ${activeService === service.id ? 'active' : ''}`}
            onClick={() => setActiveService(activeService === service.id ? null : service.id)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-details">
              <ul>
                {service.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoServices; 