import './NavBar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const NavBar = () => {
   
    const [selected, setSelected] = useState('');

    const Selecciono = (e) => {
        setSelected(e.target.innerText); // Guarda el path del link seleccionado
    };
   
    console.log(selected)

    return (
        <div className='contenedorNavBar'>
            <img id='logoNavBar' alt="logo" src="/logo.png" />
            <nav>
                <ul>
                    <li><Link onClick={Selecciono} className={`lista ${selected === 'Inicio' ? 'active' : ''}`} to="/inicio">Inicio</Link></li>
                    <li><Link onClick={Selecciono} className={`lista ${selected === 'Productos' ? 'active' : ''}`} to="/productos">Productos</Link></li>
                    <li><Link onClick={Selecciono} className={`lista ${selected === 'Registros' ? 'active' : ''}`} to="/registros">Registros</Link></li>
                    <li><Link onClick={Selecciono} className={`lista ${selected === 'Configuración' ? 'active' : ''}`} to="/configuracion">Configuración</Link></li>
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