import Header from './components/Header';
import Me from './components/Me'; // Import de Me
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <Header />
            <Me />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
};

export default App;
