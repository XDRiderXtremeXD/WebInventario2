import './NavBar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useLocation,useNavigate} from 'react-router-dom';
import { usuarios } from '../Data/Data';
import Alertas from '../Auxiliar/Alertas';

const NavBar = (props) => {

    const location = useLocation();
    const navigate = useNavigate();
    const usuario = usuarios.find(usuario => usuario.id === props.userId);

    function desloguearAccion() {
        Alertas({
            tipo: "pregunta",frase:"frase: Deseas cerrar sesion?",
            funcionAcepta: () => {
                props.desloguear();
                navigate('/Login');
            },funcionDeniega:() => {
                Alertas({tipo:"info",frase:"Tu potencial es infinito, atrévete a explorarlo"})
            } 
        })
    }

    return (
        <div className='contenedorNavBar'>
            <img id='logoNavBar' alt="logo" src="/logo.png" />
            <nav>
                <ul>
                    <li><Link className={`lista ${location.pathname === '/inicio' ? 'active' : ''}`} to="/inicio">Inicio</Link></li>
                    <li><Link className={`lista ${location.pathname === '/productos' ? 'active' : ''}`} to="/productos">Productos</Link></li>
                    <li><Link className={`lista ${location.pathname === '/registros' ? 'active' : ''}`} to="/registros">Registros</Link></li>
                    <li><Link className={`lista ${location.pathname === '/configuracion' ? 'active' : ''}`} to="/configuracion">Configuración</Link></li>
                </ul>
            </nav>

            <figure>
                <div className='figureFlex'>
                    <img src="/avatar.png" alt="avatar" />
                    <figcaption>{usuario.Nombre}</figcaption>
                    <img onClick={desloguearAccion} id="apagar" src="/apagar.png" alt="apagar" />
                </div>
            </figure>
        </div>
    );
};

export default NavBar;