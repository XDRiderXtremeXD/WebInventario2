import React from 'react';

import Tabla from '../Components/Tabla';
import { tablaMovimiento } from '../Data/Data';
import './Registros.css';

const Registros = () => {

    const tablaRegistro=[...tablaMovimiento].reverse();
    return (
        <div className=''>
            <Tabla clase="tabla-registros" atributos={["id_producto", "imagen", "titulo", "tipoMovimiento", "cantidad", "usuario_registro","proveedor"]} tabla={tablaRegistro} />
        </div>
    )
}
export default Registros