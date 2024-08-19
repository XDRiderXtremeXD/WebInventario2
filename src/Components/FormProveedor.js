import React from 'react';

const FormProveedor = () => {
    return (
        <section className='formSection'>
            <form action="">
                <label for="">Agregar Proveedor:</label>
                <div class="icon-input">
                    <input type="text" />
                    <img className='icon' src="/anadir-usuario.png" alt="añadir usuario" />
                </div>
                <label for="">Eliminar Proveedor:</label>
                <div class="icon-input">
                    <select name="proveedor" id="proveedor">
                        <option value="1">Proveedor1</option>
                        <option value="2">Proveedor2</option>
                        <option value="3">Proveedor3</option>
                        <option value="4">Proveedor4 </option>
                    </select>
                    <img className='icon' src="/quitar-usuario.png" alt="quitar usuario" />
                </div>
            </form>
        </section>
    )
}

export default FormProveedor