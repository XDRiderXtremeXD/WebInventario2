import React from 'react';
import './TarjetaProducto.css';

const TarjetaProducto = (props) => {
    return (
        <section className="contenedorTarjetaProducto">
            <figure>
                <img src={props.img} alt="producto" />
                <figcaption>{`${props.nombre}`} </figcaption>
            </figure>
            <div className="cajaStock">
                <p>{`Stock: ${props.stock}`}</p>
                <button>+</button>
                <button>-</button>
            </div>
        </section>
    )
}

export default TarjetaProducto;