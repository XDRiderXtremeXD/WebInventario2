import React from 'react';
import './GraficaBarras.css';

const GraficaBarras = (props) => {

    let mayorCantidad = (props.barras.reduce((max = 0, barra) => barra.cantidad > max.cantidad ? barra : max));
    mayorCantidad = mayorCantidad.cantidad
    
    let widthBarraContenedor=`${parseInt(100/props.barras.length)}%`

    function SacarHeightPorcentaje(cantidad){
       return `${parseInt(((cantidad / mayorCantidad) * 100))}%`
    }

    return (
        <div className='contenedorGraficaBarras'>
            <h3>{props.titulo}</h3>
            <div className='barras'>
                {props.barras.map((item, index) => (
                    <div className='barraNombre' key={index} style={{width:widthBarraContenedor}}>
                        <div className='barraHeightTotal'> 
                            <div className='barra' style={{ height: SacarHeightPorcentaje(item.cantidad) }}>
                                <p>{item.cantidad}</p>
                            </div>
                        </div>
                        <p className='subId'>{item.nombre}</p>
                    </div>
                ))}</div>
        </div>
    );
};

export default GraficaBarras;
