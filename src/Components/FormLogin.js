import React, { useEffect } from 'react';
import './FormLogin.css';
import { usuarios } from '../Data/Data';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FormLogin = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (props.userId !== null)
            navigate('/inicio');
    }, [props.userId, navigate]);


    function VerificarLogin(e) {
        e.preventDefault();//para asegurarnos que no reinicialice el componente
        const correo = e.target["correo"].value;
        const password = e.target["password"].value;
        const even = (element) => element.Email === correo && element.password === password;
        const usuario = usuarios.find(even);

        if (usuario !== undefined)
            props.setUserId(usuario.id);
        else {
            Swal.fire({
                icon: "error",
                title: "Error usuario o contraseña",
                text: "Correo o contraseña no valido",
            });
        }
    }

    return (
        <div className='container-login'>
            <section className='formSection formLogin'>
                <div className="agregar">
                    <h2>Iniciar Sesión</h2>
                </div>
                <form onSubmit={VerificarLogin} action="">
                    <label htmlFor="correo">Correo:</label>
                    <input id='correo' type="email" />
                    <label htmlFor="password">Contraseña:</label>
                    <input id='password' type="password" />
                    <input id="submit" type="submit" value="Ingresar" />
                </form>
            </section>
        </div>
    )
}

export default FormLogin;