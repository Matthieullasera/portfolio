import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const DevContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderIcon = (name) => {
    switch (name) {
      case 'GitHub':
        return <FaGithub size={20} />;
      case 'LinkedIn':
        return <FaLinkedin size={20} />;
      case 'Twitter':
        return <FaTwitter size={20} />;
      case 'Email':
        return <FaEnvelope size={20} />;
      default:
        return null;
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: '#0077B5'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      color: '#1DA1F2'
    },
    {
      name: 'Email',
      url: 'mailto:contact@example.com',
      color: '#EA4335'
    }
  ];

  return (
    <div className="dev-contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default DevContact; 