import Section from './Section';
import DevHero from './DevHero';
import DevProjects from './DevProjects';
import DevSkills from './DevSkills';
import About from './About';
import FloatingButton from './FloatingButton';
import { useScrollAnimation } from './ScrollAnimation';

const DevPortfolio = () => {
  return (
    <div className="dev-portfolio">
      <FloatingButton />
      
      <Section>
        <DevHero />
      </Section>
      
      <Section>
        <About isVideo={false} />
      </Section>

      <Section>
        <DevProjects />
      </Section>

      <Section>
        <DevSkills />
      </Section>
    </div>
  );
};

export default DevPortfolio;