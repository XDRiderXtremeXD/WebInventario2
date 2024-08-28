import './NavBar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useLocation,useNavigate} from 'react-router-dom';
import { usuarios } from '../Data/Data';
import Swal from 'sweetalert2';

const NavBar = (props) => {

    const location = useLocation();
    const navigate = useNavigate();
    const usuario = usuarios.find(usuario => usuario.id === props.userId);

    function desloguearAccion() {

        Swal.fire({
            title: "Deseas cerrar sesion?",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: "No"
          }).then((result) => {
            if (result.isConfirmed) {
                props.desloguear();
                navigate('/Login');
            } else if (result.isDenied) {
              Swal.fire("Tu potencial es infinito, atrévete a explorarlo", "", "");
            }
          });
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