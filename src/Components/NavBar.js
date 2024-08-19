import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className='contenedorNavBar'>
            <img id='logoNavBar' alt="logo" src="/logo.png" />
            <nav>
                <ul>
                    <li><Link to="/inicio">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/registros">Registros</Link></li>
                    <li><Link to="/configuracion">Configuración</Link></li>
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