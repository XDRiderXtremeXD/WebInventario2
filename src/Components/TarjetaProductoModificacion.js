import React, { useState } from 'react';
import './TarjetaProductoModificacion.css';
import { proveedores, tablaMovimiento, tablaStock } from '../Data/Data';
import Swal from 'sweetalert2';
import Alertas from '../Auxiliar/Alertas';

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

    const AgregarTablaMovimiento = (movimiento) => {
        let { productoIndice, cantidad, tipoMovimiento, proveedor } = movimiento

        tablaMovimiento.push({
            id_producto: tablaStock[productoIndice].id,
            imagen: tablaStock[productoIndice].imagen,
            titulo: tablaStock[productoIndice].titulo,
            fecha: GetFechaActual(),
            usuario_registro: props.userId,
            cantidad,
            tipoMovimiento,
            proveedor
        })
    }

    const Modificar = () => {
        const cantidad = Number(document.getElementById('countInventary').value);
        const productoIndiceFind = (producto) => producto.id === props.producto.id;
        const productoIndice = tablaStock.findIndex(productoIndiceFind)
        let stockActual = tablaStock[productoIndice].stock;
        let proveedor=proveedor_;

        if (proveedor === "Crear Proveedor") {
            proveedor = document.getElementById('nuevoProveedor').value;
            if (proveedor === "" || proveedores.includes(proveedor)) {
                Alertas({ tipo: "error", frase: "Digite nuevo proveedor" });
                return;
            }
        }

        if (props.isModalOpenModifyProduct.agregar) {
            if (proveedor === null) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: 'Debes de seleccionar un proveedor'
                });
                return;
            }
            tablaStock[productoIndice] = { ...tablaStock[productoIndice], stock: stockActual + cantidad, proveedor: proveedor }
            AgregarTablaMovimiento({ productoIndice, cantidad: cantidad, tipoMovimiento: 'Entrada', proveedor: proveedor })
            if(proveedor_==="Crear Proveedor")proveedores.push(proveedor);
        }
        else {
            tablaStock[productoIndice] = { ...tablaStock[productoIndice], stock: stockActual - cantidad }
            AgregarTablaMovimiento({ productoIndice: productoIndice, cantidad: cantidad, tipoMovimiento: 'Salida', proveedor: null })
        }

        props.setIsModalOpenModifyProduct({ openModal: false, agregar: true });
        props.setActualiceProducts([...tablaStock])

        Alertas({ tipo: "ok", frase: "Productos Actualizados" })
    }
    const CambiarProveedor = (e) => {
        setProveedor_(e.target.value)
    }

    return (
        <div className="modal-cubrir">
            <section id="contenedor-tarjeta-producto-modificacion">
                <img onClick={() => props.setIsModalOpenModifyProduct({ ...props.isModalOpenModifyProduct, openModal: false })} id="salir" src='/boton-x.png' alt='boton salir' />
                <figure>
                    <img src={props.producto.img} alt="imagen producto" />
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
                            <label htmlFor="nuevaProveedor">Nuevo proveedor:</label>
                            <input
                                type="text"
                                id="nuevoProveedor"
                                name="nuevoProveedor"
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