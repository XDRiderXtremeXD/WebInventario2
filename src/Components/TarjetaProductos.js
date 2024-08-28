import React, { useState } from 'react';
import './TarjetaProducto.css';
import TarjetaProductoModificacion from './TarjetaProductoModificacion';

const TarjetaProducto = (props) => {
    const [isModalOpenModifyProduct, setIsModalOpenModifyProduct] = useState({ openModal: false, agregar: true });

    const [estilo, setEstilo] = useState({ display: 'none' });

    const handleMouseOver = () => {
        setEstilo({ display: 'block', transition: "transform 0.3s ease" });
    }

    const handleMouseOut = () => {
        setEstilo({ display: 'none', transform: "scale(1.2)"});
    };

    return (

        <section className="contenedorTarjetaProducto">
            <div className='producto-descripcion' >
                <figure>
                    <img src={props.img} alt="producto" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                    <figcaption>{`${props.nombre}`} </figcaption>
                    <p style={{...estilo,pointerEvents: 'none'}} className='descripcion'>{props.descripcion}</p>
                </figure>
            </div>
            <div className="cajaStock">
                <p>{`Stock: ${props.stock}`}</p>
                <img className='boton-accion' onClick={() => setIsModalOpenModifyProduct({ openModal: true, agregar: true })} src='/signo-mas.png' alt='mas' />
                <img className='boton-accion' onClick={() => setIsModalOpenModifyProduct({ openModal: true, agregar: false })} src='/signo-menos.png' alt='menos' />
            </div>
            {isModalOpenModifyProduct.openModal &&
                <TarjetaProductoModificacion isModalOpenModifyProduct={isModalOpenModifyProduct}
                    producto={props} setIsModalOpenModifyProduct={setIsModalOpenModifyProduct}
                    setActualiceProducts={props.setActualiceProducts} actualiceProducts={props.actualiceProducts}
                    userId={props.userId} />}
        </section>
    )
}

export default TarjetaProducto;