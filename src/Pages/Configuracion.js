import FormCategoria from '../Components/FormCategoria';
import FormProducto from '../Components/FormProducto';
import FormProveedor from '../Components/FormProveedor';
import ListUsuario from '../Components/ListUsuario';
import './Configuracion.css';
import React, { useState } from 'react';

const AsideNav = ({ opcion, setOpcion }) => {
    return (
        <aside className="AsideNav">
            <ul>
                <li onClick={() => setOpcion(1)} className={opcion === 1 ? "liSeleccionado" : "lis"}>Usuario</li>
                <li onClick={() => setOpcion(2)} className={opcion === 2 ? "liSeleccionado" : "lis"}>Productos</li>
                <li onClick={() => setOpcion(3)} className={opcion === 3 ? "liSeleccionado" : "lis"}>Proveedores</li>
                <li onClick={() => setOpcion(4)} className={opcion === 4 ? "liSeleccionado" : "lis"}>Categorias</li>
            </ul>
        </aside>)
}


const Configuracion = () => {
    const [opcion, setOpcion] = useState(1);
    return (
        <div>
            <div className="contenedorConfiguracion">
                <AsideNav opcion={opcion} setOpcion={setOpcion} />
                {opcion === 1 && <ListUsuario />}
                {opcion === 2 && <FormProducto />}
                {opcion === 3 && <FormProveedor />}
                {opcion === 4 && <FormCategoria />}
            </div>
        </div>
    );
};

export default Configuracion

