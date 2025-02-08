import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Header = ({ activePortfolio, onPortfolioChange }) => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsNavActive(!isNavActive);
  };

  const handleNavClick = () => {
    setIsNavActive(false);
  };

  useEffect(() => {
    if (isNavActive) {
      document.body.classList.add('nav-active');
    } else {
      document.body.classList.remove('nav-active');
    }
  }, [isNavActive]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <header className={`cd-header ${visible ? '' : 'header-hidden'}`}>
        <div className="header-wrapper">
          <div className="nav-but-wrap">
            <div className={`menu-icon hover-target ${isNavActive ? 'active' : ''}`} onClick={toggleMenu}>
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line menu-icon__line-middle"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
          </div>
          <div className="portfolio-switcher">
            <button 
              className={`switcher-btn ${activePortfolio === 'dev' ? 'active' : ''}`}
              onClick={() => onPortfolioChange('dev')}
            >
              Développeur Web
            </button>
            <button 
              className={`switcher-btn ${activePortfolio === 'video' ? 'active' : ''}`}
              onClick={() => onPortfolioChange('video')}
            >
              Monteur Vidéo
            </button>
          </div>
          <div className="logo-wrap">
            <a href="#" className="hover-target">
              <span>M</span>L
            </a>
          </div>
        </div>
      </header>

      <div className={`nav ${isNavActive ? 'active' : ''}`}>
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item active-nav">
              <a href="#me" className="hover-target" onClick={handleNavClick}>Home</a>
            </li>
            <li className="nav__list-item">
              <a href="#about" className="hover-target" onClick={handleNavClick}>À propos</a>
            </li>
            <li className="nav__list-item">
              <a href="#projects" className="hover-target" onClick={handleNavClick}>Projets</a>
            </li>
            <li className="nav__list-item">
              <a href="#skills" className="hover-target" onClick={handleNavClick}>Compétences</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  activePortfolio: PropTypes.string.isRequired,
  onPortfolioChange: PropTypes.func.isRequired
};

export default Header;

