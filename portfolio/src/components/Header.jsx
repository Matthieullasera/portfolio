import PropTypes from 'prop-types';

const Header = ({ currentPortfolio, onTogglePortfolio }) => {
  return (
    <header className="cd-header">
      <div className="header-wrapper">
        <div className="logo">Portfolio</div>
        <div className="portfolio-switcher">
          <button
            className={`switcher-btn ${currentPortfolio === 'dev' ? 'active' : ''}`}
            onClick={() => onTogglePortfolio('dev')}
          >
            Développeur Web
          </button>
          <button
            className={`switcher-btn ${currentPortfolio === 'video' ? 'active' : ''}`}
            onClick={() => onTogglePortfolio('video')}
          >
            Monteur Vidéo
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  currentPortfolio: PropTypes.string.isRequired,
  onTogglePortfolio: PropTypes.func.isRequired
};

export default Header;

