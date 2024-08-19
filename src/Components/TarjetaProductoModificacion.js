import React from 'react';
import './TarjetaProductoModificacion.css';

const TarjetaProducto = (props) => {
    return (
        <section id="contenedorTarjetaProducto">
            <figure>
                <img src={props.img} alt="Celular" />
                <figcaption>{props.nombre} </figcaption>
            </figure>
            <div class="contenedorModificacion">
                <p>Guardar</p>
                <div class="cajaCantidad">
                    <p>Cantidad: </p>
                    <input type="number" id="countInventary" name="count" defaultValue="1" />
                </div>
                <div class="cajaGuardar">
                    <button>
                        <p>Guardar cambios</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TarjetaProducto;