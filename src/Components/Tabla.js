import React from 'react';
import './Tabla.css';

const TdTabla = (props) => {
    return (
        <td>{
            props.keyProp === "imagen" ?
            <img src={props.item[props.keyProp]} alt={props.keyProp} /> 
            :
            props.keyProp === "Accion" ?
                <img onClick={() => props.item.Accion.funcion(props.item.id)} className="icon" src={props.item.Accion.icono} alt={props.item.Accion.nombre}  /> 
            :
            props.item[props.keyProp]
            }</td>
    )
}

const Tabla = (props) => {
    
    function filtrarAtributos(atributos, datos) {
        return datos.map(item => {
            let nuevoObjeto = {};
            atributos.forEach(atributo => {
                if (item.hasOwnProperty(atributo)) {
                    nuevoObjeto[atributo] = item[atributo];
                }
            });
            return nuevoObjeto;
        });
    }
   
    const tabla=filtrarAtributos(props.atributos,props.tabla)
    let atributos = props.atributos;

    return (
        <table className={props.clase}>
            {(props.verTitulos === undefined || props.verTitulos) &&
                <thead>
                    <tr>
                        {atributos.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
            }
            <tbody>
                {tabla.map((item, rowIndex) => (
                    <tr key={rowIndex}>
                        {atributos.map((key, colIndex) => 
                            (<TdTabla key={colIndex} keyProp={key} item={item} />)
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Tabla;
