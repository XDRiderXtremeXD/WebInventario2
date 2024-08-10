import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='contenedorFooter'>
            <p>copyright © 2024</p>
            <div className='redes'>
            <img id='facebook' alt="logo" src="/facebook.png" />
            <img id='whatsapp' alt="logo" src="/whatsapp.png" />
            <img id='instagram' alt="logo" src="/instagram.png" />
            </div>
        </div>
    );
};

export default Footer;