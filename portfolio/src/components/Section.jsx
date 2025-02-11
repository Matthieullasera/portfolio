import PropTypes from 'prop-types';
import { useScrollAnimation } from './ScrollAnimation';

const Section = ({ children }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default Section; 
