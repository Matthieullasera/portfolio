import { useState, useEffect } from 'react';
import Header from './components/Header';
import DevPortfolio from './components/DevPortfolio';
import VideoPortfolio from './components/VideoPortfolio';

const App = () => {
  const [currentPortfolio, setCurrentPortfolio] = useState('dev');

  useEffect(() => {
    document.body.className = currentPortfolio === 'video' ? 'video-theme' : '';
  }, [currentPortfolio]);

  return (
    <div className="app">
      <Header 
        currentPortfolio={currentPortfolio}
        onTogglePortfolio={setCurrentPortfolio}
      />
      {currentPortfolio === 'dev' ? (
        <DevPortfolio />
      ) : (
        <VideoPortfolio />
      )}
    </div>
  );
};

export default App;


