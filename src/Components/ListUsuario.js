import React, { useState } from 'react';

import Tabla from '../Components/Tabla';
import { usuarios } from '../Data/Data';
import './ListaUsuario.css';
import FormUsuario from './FormularioUsuario';
import Alertas from '../Auxiliar/Alertas';


const ListUsuario = (props) => {

    const [isModalOpenAddUser, setIsModalOpenAddUser] = useState(false);
    const [users, setUsers] = useState(usuarios);

    function EliminarUsuario(id) {
        if (props.userId === id) {
            Alertas({tipo:"error",frase:"No puede eliminar su propio usuario"})
            return
        }
        let usuario = usuarios.find(usuario => usuario.id === id);

        Alertas({
            tipo: "pregunta", frase: "Deseas eliminar a " + usuario.Nombre + "?",
            funcionAcepta: () => {
                let indice = usuarios.findIndex(usuario => usuario.id === id);
                usuarios.splice(indice, 1);
                setUsers([...usuarios]);
            }
        })
    }

    const tabla = users.map(function (item) {
        item["Accion"] = { funcion: () => EliminarUsuario(item.id), nombre: "agregar", icono: "/quitar-usuario.png" }
        return item
    });

    return (
        <div className='contenedorListUsuario'>
            <button onClick={() => setIsModalOpenAddUser(true)} >Agregar Usuario  <img className="icon" src={"/anadir-usuario.png"} alt='icono-añadir' /></button>
            <Tabla clase="tablaListadoUsuarios" atributos={["id", "Nombre", "Email", "DNI", "TipoUsuario", "Accion"]} tabla={tabla} />
            {isModalOpenAddUser && <section className='modal-cubrir'>
                <FormUsuario cerrar={() => setIsModalOpenAddUser(false)} setUsers={setUsers} />
            </section>}
        </div>
    )
}

export default ListUsuario