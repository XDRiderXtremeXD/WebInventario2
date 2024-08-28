import React, { useState } from 'react';
import './TarjetaProducto.css';
import TarjetaProductoModificacion from './TarjetaProductoModificacion';

const TarjetaProducto = (props) => {
    const [isModalOpenModifyProduct, setIsModalOpenModifyProduct] = useState({ openModal: false, agregar: true });

    return (
        <section className="contenedorTarjetaProducto">
            <figure>
                <img src={props.img} alt="producto" />
                <figcaption>{`${props.nombre}`} </figcaption>
            </figure>
            <div className="cajaStock">
                <p>{`Stock: ${props.stock}`}</p>
                <img className='boton-accion' onClick={() => setIsModalOpenModifyProduct({ openModal: true, agregar: true })} src='/signo-mas.png' alt='mas'/>
                <img className='boton-accion' onClick={() => setIsModalOpenModifyProduct({ openModal: true, agregar: false })} src='/signo-menos.png' alt='menos'/>
            </div>
            {isModalOpenModifyProduct.openModal &&
                <TarjetaProductoModificacion isModalOpenModifyProduct={isModalOpenModifyProduct} 
                producto={props} setIsModalOpenModifyProduct={setIsModalOpenModifyProduct}
                setActualiceProducts={props.setActualiceProducts} actualiceProducts={props.actualiceProducts} 
                userId={props.userId}/>}
        </section>
    )
}

export default TarjetaProducto;