import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss'; 
import { init } from '@emailjs/browser';
init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
