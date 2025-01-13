import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'; // Si tu utilises SCSS pour les styles globaux

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
