import React, { useEffect } from 'react';
import './PaginaNoValida.css';
import { useNavigate } from 'react-router-dom';

const PaginaNoValida = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const segundero = setTimeout(() => {
          navigate('/Login');
        }, 3000);
        return () => clearTimeout(segundero);
      }, [navigate]);

    return (
        <div id='contenedor-pagina-no-valida'>
            <h1>Error: pagina no existe o no esta disponible para tu usuario</h1>
            <div className='contenedor-cargando'>
                <img src='/loading.gif' alt='cargando' />
                <h2>Redirigiendo a la pagina de Inicio en 3 segundos...</h2>
            </div>
        </div>
    )
}

export default PaginaNoValida;