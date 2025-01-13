import Header from './components/Header';
import Me from './components/Me';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Me/>
            <About />
            <Projects/>
            <Skills />
            <Footer />
        </div>
    );
};

export default App;
