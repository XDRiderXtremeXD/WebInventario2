import React from 'react';

import Tabla from '../Components/Tabla';
import { usuarios } from '../Data/Data';


const ListUsuario = () => {
    
    function Funcion(e) {
        console.log(e);
    }

    const tabla = usuarios.map(function (item) {
        item["Accion"] = { funcion: () => Funcion(item.id), nombre: "agregar", icono: "/quitar-usuario.png" }
        return item
    });

    return (
        <div className='contenedorListUsuario'>
            <p>Agregar Usuario</p>
            <Tabla clase="tablaListadoUsuarios" atributos={["id","Nombre","Email","DNI","TipoUsuario","Accion"]} tabla={tabla} />
        </div>
    )
}

export default ListUsuario