import React from 'react';

const FormCategoria = () => {
    return (
        <section className='formSection'>
            <form action="">
                <label for="">Agregar Categoria:</label>
                <div class="icon-input">
                    <input type="text" />
                    <img className='icon' src="/anadir-usuario.png" alt="añadir usuario" />
                </div>
                <label for="">Eliminar Categoria:</label>
                <div class="icon-input">
                    <select name="proveedor" id="proveedor">
                        <option value="1">Categoria1</option>
                        <option value="2">Categoria2</option>
                        <option value="3">Categoria3</option>
                        <option value="4">Categoria4 </option>
                    </select>
                    <img className='icon' src="/quitar-usuario.png" alt="quitar usuario" />
                </div>
            </form>
        </section>
    )
}

export default FormCategoria