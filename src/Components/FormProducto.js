import React, { useState, useRef } from 'react';
import { categorias, tablaStock } from '../Data/Data';
import { v4 as uuidv4 } from 'uuid';

const FormProducto = () => {
    const [imagen, setImagen] = useState(null);
    const [categoria_, setCategoria_] = useState(null);
    const fileInputRef = useRef(null);

    const CrearProducto = (e) => {
        e.preventDefault();
        const nombre = e.target.nombreProducto.value;
        const descripcion = e.target.descripcion.value;
        const categoria = e.target.categorias.value;
        let categoriaProducto = categoria;

        if (imagen === null) {
            alert("Debes seleccionar una imagen");
            return;
        }
        if (categoria_ === null) {
            alert("Debes seleccionar una categoria");
            return;
        }
        if (categoria === "Crear Categoria") {
            categoriaProducto = e.target.nuevaCategoria.value;
            if (categoriaProducto === "" || categorias.includes(categoriaProducto)) {
                alert("Debes de digitar una nueva categoria")
                return
            }
        }
        if (!tablaStock.some(producto => producto.titulo === nombre)) {
            tablaStock.push({ imagen: imagen, titulo: nombre, stock: 0, id: uuidv4(), categoria: categoriaProducto, descripcion: descripcion })
            if (!categorias.includes(categoriaProducto)) {
                categorias.push(categoriaProducto)
                setCategoria_(categoriaProducto)
            }
            alert("Producto Creado")
        }
        else
            alert("Error: Existe un producto con el mismo nombre")
    };

    const manejarCambioImagen = (e) => {
        const archivo = e.target.files[0];
        if (archivo) {
            setImagen(URL.createObjectURL(archivo));
        }
    };

    const activarSelectorArchivos = () => {
        fileInputRef.current.click();
    };

    const cambiarCategoria = (e) => {
        setCategoria_(e.target.value)
    }

    return (
        <section className='formSection'>
            <div className="agregar">
                <h2>Añadir Producto</h2>
            </div>
            <form onSubmit={CrearProducto}>
                <label htmlFor="nombre-producto">Nombre Producto:</label>
                <input
                    type="text"
                    id="nombre-producto"
                    name="nombreProducto"
                />

                <label htmlFor="descripcion">Descripción:</label>
                <textarea
                    id="descripcion"
                    name="descripcion"
                ></textarea>

                <label htmlFor="categorias">Categorías:</label>
                <select
                    name="categorias"
                    id="categorias"
                    onChange={cambiarCategoria}
                    value={categoria_ ? categoria_ : "Selecciona Categoria"}
                >
                    <option value={null}>Selecciona Categoria</option>
                    {categorias.map((categoria, index) => (
                        <option key={index} value={categoria}>{categoria}</option>))}
                    <option value="Crear Categoria">Crear Categoria</option>
                </select>

                {categoria_ === "Crear Categoria" &&
                    <section>
                        <label htmlFor="nuevaCategoria">Nueva categoría:</label>
                        <input
                            type="text"
                            id="nuevaCategoria"
                            name="nuevaCategoria"
                        />
                    </section>}
                <label htmlFor="imagen">Imagen:</label>
                <input
                    type="file"
                    id="imagen"
                    accept="image/*"
                    onChange={manejarCambioImagen}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />
                <button type="button" onClick={activarSelectorArchivos}>
                    Escoger Imagen
                </button>

                {imagen && (
                    <div>
                        <h3>Vista previa:</h3>
                        <img
                            src={imagen}
                            alt="Vista previa"
                        />
                    </div>
                )}
                <button type="submit">
                    Crear Producto
                </button>
            </form>
        </section>
    );
};

export default FormProducto;
