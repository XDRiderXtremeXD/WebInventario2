import React from 'react';

const FormProducto = () => {
    return (
        <section className='formSection'>
            <div class="agregar">
                <h2> Añadir Producto</h2>
            </div>
            <form action="">
                <label for="">Nombre Producto:</label>
                <input type="text" />
                <label for="">Descripcion:</label>
                <textarea></textarea>
                <label for="">Categorias:</label>
                <select name="categorias" id="categorias">
                    <option value="1">categorias1</option>
                    <option value="2">categorias2</option>
                    <option value="3">categorias3</option>
                    <option value="4">categorias4 </option>
                </select>
                <label for="">Imagenes:</label>
                <input type="image" src="logo192.png" aria-label="submit Form" />
                <input type="submit" value="Subir Imagen" />
            </form>
        </section>
    )
}

export default FormProducto