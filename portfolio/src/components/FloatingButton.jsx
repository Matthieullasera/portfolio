import { useState } from 'react';
import Contact from './Contact';

const FloatingButton = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <button 
                className="floating-button" 
                onClick={() => setIsContactOpen(true)}
            >
                Contact
            </button>
            <Contact 
                isOpen={isContactOpen} 
                onClose={() => setIsContactOpen(false)} 
            />
        </>
    );
};

export default FloatingButton;