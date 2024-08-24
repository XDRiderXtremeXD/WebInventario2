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
                <button onClick={() => setIsModalOpenModifyProduct({ openModal: true, agregar: true })}>+</button>
                <button onClick={() => setIsModalOpenModifyProduct({ openModal: true, agregar: false })}>-</button>
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