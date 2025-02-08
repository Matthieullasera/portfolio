import Me from './Me';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Section from './Section';
import FloatingButton from './FloatingButton';

const DevPortfolio = () => {
  return (
    <div>
      <Section>
        <Me />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <Contact />
      </Section>
      <FloatingButton />
    </div>
  );
};

export default DevPortfolio;