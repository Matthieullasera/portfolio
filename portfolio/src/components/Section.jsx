import { useScrollAnimation } from './ScrollAnimation';

const Section = ({ children, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section; 
