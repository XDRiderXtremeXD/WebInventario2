import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='contenedorFooter'>
            <p>Copyright © 2024</p>
            <div className='redes'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img id="facebook" alt="logo" src="/facebook.png" /></a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><img id="whatsapp" alt="logo" src="/whatsapp.png" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img id="instagram" alt="logo" src="/instagram.png" /></a>
            </div>
        </div>
    );
};

export default Footer;