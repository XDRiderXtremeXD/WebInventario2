import React, { useState } from 'react';
import './TarjetaProductoModificacion.css';
import { proveedores, tablaMovimiento, tablaStock } from '../Data/Data';

const TarjetaProductoModificacion = (props) => {

    const [proveedor_, setProveedor_] = useState(null);

    const GetFechaActual = () => {
        const fecha = new Date();
        const year = fecha.getFullYear();
        const month = String(fecha.getMonth() + 1).padStart(2, '0');
        const day = String(fecha.getDate()).padStart(2, '0');
        const fechaFormateada = `${year}-${month}-${day}`;
        return fechaFormateada
    }

    const Modificar = () => {
        const cantidad = Number(document.getElementById('countInventary').value);
        const productoIndiceFind = (producto) => producto.id === props.producto.id;
        const productoIndice = tablaStock.findIndex(productoIndiceFind)
        let stockActual = tablaStock[productoIndice].stock;
        if (props.isModalOpenModifyProduct.agregar) {
            if (proveedor_ === null) {
                alert('Debes de seleccionar un proveedor');
                return;
            }
            tablaStock[productoIndice] = { ...tablaStock[productoIndice], stock: stockActual + cantidad, proveedor: proveedor_ }

            tablaMovimiento.push({
                id_producto: tablaStock[productoIndice].id,
                imagen: tablaStock[productoIndice].imagen,
                titulo: tablaStock[productoIndice].titulo,
                tipoMovimiento: "Entrada",
                cantidad: cantidad,
                fecha: GetFechaActual(),
                usuario_registro: props.userId,
                proveedor: proveedor_
            })
        }
        else {
            tablaStock[productoIndice] = { ...tablaStock[productoIndice], stock: stockActual - cantidad }

            tablaMovimiento.push({
                id_producto: tablaStock[productoIndice].id,
                imagen: tablaStock[productoIndice].imagen,
                titulo: tablaStock[productoIndice].titulo,
                tipoMovimiento: "Salida",
                cantidad: cantidad,
                fecha: GetFechaActual(),
                usuario_registro: props.userId,
                proveedor: null
            })
        }
        props.setIsModalOpenModifyProduct({ openModal: false, agregar: true });
        props.setActualiceProducts([...tablaStock])
    }
    const CambiarProveedor = (e) => {
        setProveedor_(e.target.value)
    }

    return (
        <div className="modal-cubrir">
            <section id="contenedor-tarjeta-producto-modificacion">
                <button id="salir" onClick={() => props.setIsModalOpenModifyProduct({ openModal: false, agregar: true })}>X</button>
                <figure>
                    <img src={props.producto.img} alt="Celular" />
                    <figcaption>{props.producto.nombre} </figcaption>
                </figure>
                <div className="contenedor-modificacion">
                    <p className='modo-modificacion'>{props.isModalOpenModifyProduct.agregar ? "Agregar" : "Remover"}</p>
                    <div className="cajaCantidad">
                        <p>Cantidad: </p>
                        <input type="number" id="countInventary" name="count" defaultValue="1" min="1" max={!props.isModalOpenModifyProduct.agregar ? `${props.producto.stock}` : "1000000000"} />
                    </div>
                    {props.isModalOpenModifyProduct.agregar &&
                        <select
                            name="proveedores"
                            id="proveedores"
                            onChange={CambiarProveedor}
                            value={proveedor_ ? proveedor_ : "Selecciona Proveedor"}
                        >
                            <option value={null}>Selecciona Proveedor</option>
                            {proveedores.map((proveedor, index) => (
                                <option key={index} value={proveedor}>{proveedor}</option>))}
                            <option value="Crear Proveedor">Crear Proveedor</option>
                        </select>}

                    {proveedor_ === "Crear Proveedor" &&
                        <section className='nuevoProveedor'>
                            <label htmlFor="nuevaProveedor">Nueva proveedor:</label>
                            <input
                                type="text"
                                id="nuevaProveedor"
                                name="nuevaProveedor"
                            />
                        </section>}

                    <div className="cajaGuardar">
                        <button onClick={Modificar}>
                            <p>Guardar cambios</p>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TarjetaProductoModificacion;