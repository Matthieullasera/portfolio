import { useState } from "react";
import Header from './components/Header';
import DevPortfolio from './components/DevPortfolio';
import VideoPortfolio from './components/VideoPortfolio';

const App = () => {
    const [activePortfolio, setActivePortfolio] = useState('dev');

    const handlePortfolioChange = (type) => {
        setActivePortfolio(type);
        document.body.className = type === 'video' ? 'video-theme' : '';
    };

    return (
        <>
            <Header 
                activePortfolio={activePortfolio} 
                onPortfolioChange={handlePortfolioChange} 
            />
            {activePortfolio === 'dev' ? (
                <DevPortfolio />
            ) : (
                <VideoPortfolio />
            )}
        </>
    );
};

export default App;


