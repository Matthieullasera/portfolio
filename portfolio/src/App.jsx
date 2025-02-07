import { useState } from "react";
import Header from './components/Header';
import Me from './components/Me';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingButton';
import Section from './components/Section';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Header />
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

export default App;


