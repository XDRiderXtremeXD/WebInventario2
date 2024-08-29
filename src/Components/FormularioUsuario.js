import React from 'react';
import { usuarios } from '../Data/Data';
import { v4 as uuidv4 } from 'uuid';
import Alertas from '../Auxiliar/Alertas';

const FormUsuario = (props) => {


    function generarContrasenna(longitud = 12) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        let contrasenna = '';
        for (let i = 0; i < longitud; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            contrasenna += caracteres[indice];
        }
        return contrasenna;
    }


    function CrearUsuario(e) {
        e.preventDefault();
        const nombre = e.target[0].value
        const correo = e.target[1].value
        const telefono = e.target[2].value
        const direccion = e.target[3].value
        const dni = e.target[4].value
        const tipoUsuario = e.target[5].value
        const id = uuidv4()
        const password = generarContrasenna(8);

        if (nombre.length < 4) {
            Alertas({ tipo: "error", frase: "El nombre debe tener como minimo 4 caracteres" })
            return;
        }
        
        if (!/\S+@\S+\.\S+/.test(correo)) {
            Alertas({ tipo: "error", frase: "Ingrese un correo electrónico válido." })
            return;
        }

        if (((telefono.length !== 7 && telefono.length !== 9) ||
            (telefono.length === 7 && !/^[2456]/.test(telefono)) ||
            (telefono.length === 9 && !/^9/.test(telefono))) && /^[0-9]*$/.test(telefono)) {
            Alertas({ tipo: "error", frase: 'El teléfono debe tener 7 dígitos y comenzar con 2, 4, 5 o 6, o tener 9 dígitos y comenzar con 9.' })
            return;
        }


        if (direccion.length < 10) {
            Alertas({ tipo: "error", frase: "La direccion debe tener como minimo 10 caracteres" })
            return;
        }

        if (dni.length !== 8 || !/^[0-9,$]*$/.test(dni)) {
            Alertas({ tipo: "error", frase: "DNI tiene que tener 8 digitos numericos." })
            return;
        }   

        if (usuarios.some(usuario => usuario.Email === correo)) {
            Alertas({ tipo: "error", frase: "Error: email ya registrado" });
        }
        else {
            usuarios.push({ id, Nombre: nombre, Email: correo, DNI: dni, TipoUsuario: tipoUsuario, password: password, direccion: direccion, telefono: telefono })
            props.setUsers(usuarios);
            Alertas({ tipo: "ok", frase: "Usuario  Agregado" });
            console.log({ password });
            props.cerrar();
        }
    }


    return (
        <section className='formSection formUser' >
            <img onClick={() => props.cerrar()} id="salir" src='/boton-x.png' alt='boton salir' />
            <div className="agregar">
                <h2> Añadir Usuario</h2>
            </div>
            <form onSubmit={CrearUsuario}>
                <label htmlFor="nombre-apellido">Nombre Apellido:</label>
                <input id="nombre-apellido" type="text" />
                <label htmlFor="correo">Correo:</label>
                <input id="correo" type="email" />
                <label htmlFor="telefono">Telefono:</label>
                <input id="telefono" type="numeric" />
                <label htmlFor="direccion">Direccion:</label>
                <input id="direccion" type="text" />
                <label htmlFor="dni">DNI:</label>
                <input id="dni" type="numeric" />
                <label htmlFor="usuario-tipo">Elige el tipo de usuario:</label>
                <select name="tipo-usuarios" id="usuario-tipo">
                    <option value="User">User</option>
                    <option value="Master">Master</option>
                </select>
                <input id="submit" type="submit" value="Guardar" />
            </form>
        </section>
    )
}

export default FormUsuario