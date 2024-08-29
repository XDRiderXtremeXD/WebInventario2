import FormProducto from '../Components/FormProducto';
import ListUsuario from '../Components/ListUsuario';
import { usuarios } from '../Data/Data';
import './Configuracion.css';
import React, { useState } from 'react';

const AsideNav = ({ opcion, setOpcion, activarUsuarios }) => {
    return (
        <aside className="AsideNav">
            <ul>
                {activarUsuarios && <li onClick={() => setOpcion(1)} className={opcion === 1 ? "liSeleccionado" : "lis"}>Usuarios</li>}
                <li onClick={() => setOpcion(2)} className={opcion === 2 ? "liSeleccionado" : "lis"}>Productos</li>
            </ul>
        </aside>)
}


const Configuracion = (props) => {
    const [opcion, setOpcion] = useState(2);
    const usuario = usuarios.find(usuario => usuario.id === props.userId)

    return (
        <div>
            <div className="contenedorConfiguracion">
                <AsideNav opcion={opcion} setOpcion={setOpcion} activarUsuarios={usuario.TipoUsuario === "Master"} />
                {opcion === 1 && <ListUsuario userId={props.userId} />}
                {opcion === 2 && <FormProducto />}
            </div>
        </div>
    );
};

export default Configuracion

