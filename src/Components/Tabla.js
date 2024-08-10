import React from 'react';
import './Tabla.css';

const TdTabla = (props) => {
    return (
        <td>{
            props.keyProp === "imagen" ?
            <img src={props.item[props.keyProp]} alt={props.keyProp} /> 
            :
            props.keyProp === "accion" ?
                <img onClick={() => props.item.accion.funcion(props.item.id)} className="icon" src={props.item.accion.icono} alt={props.item.accion.nombre}  /> 
            :
            props.item[props.keyProp]
            }</td>
    )
}

const Tabla = (props) => {
    let keys = props.tabla.length !== 0 ? Object.keys(props.tabla[0]) : [];

    return (
        <table className={props.clase}>
            {(props.verTitulos === undefined || props.verTitulos) &&
                <thead>
                    <tr>
                        {keys.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
            }
            <tbody>
                {props.tabla.map((item, rowIndex) => (
                    <tr key={rowIndex}>
                        {keys.map((key, colIndex) => 
                            (<TdTabla key={colIndex} keyProp={key} item={item} />)
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Tabla;
