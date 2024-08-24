import React, { useEffect } from 'react';
import './FormLogin.css';
import { usuarios } from '../Data/Data';
import { useNavigate } from 'react-router-dom';

const FormLogin = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.userId !== null)
            navigate('/inicio');
    }, [props.userId,navigate]);


    function VerificarLogin(e) {
        e.preventDefault();
        const correo = e.target[0].value;
        const password = e.target[1].value;
        const even = (element) => element.Email === correo && element.password === password;
        const elemento = usuarios.find(even);

        if (elemento !== undefined) 
            props.setUserId(elemento.id);
        else
            alert("No se ingreso bien el correo o contraseña");
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