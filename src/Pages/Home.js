import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {

    const navigate = useNavigate();

    function rederigir() {
        navigate('/Login'); 
    };

    return (
        <div id='HomePage'>
            <button onClick={rederigir}>Entrar Aplicacion Inventario</button>
        </div>
    )
}


export default Home;
