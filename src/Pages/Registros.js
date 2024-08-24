import React from 'react';

import Tabla from '../Components/Tabla';
import { tablaMovimiento } from '../Data/Data';

const Registros = () => {
    return (
        <div className=''>
            <Tabla clase="" atributos={["id_producto", "imagen", "titulo", "tipoMovimiento", "cantidad", "usuario_registro","proveedor"]} tabla={tablaMovimiento} />
        </div>
    )
}
export default Registros