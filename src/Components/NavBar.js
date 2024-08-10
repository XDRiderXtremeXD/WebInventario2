import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='contenedorNavBar'>
            <img id='logoNavBar' alt="logo" src="/logo.png" />
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Registros</li>
                    <li>Configuración</li>
                </ul>
            </nav>

            <figure>
                <div className='figureFlex'>
                    <img src="/avatar.png" alt="avatar" />
                    <figcaption>Nombre Apellido</figcaption>
                </div>
            </figure>
        </div>
    );
};

export default NavBar;