import TarjetaProducto from '../Components/TarjetaProductos';
import { tablaStock } from '../Data/Data';
import './Productos.css';
import React, { useState } from 'react';

const AsideFilter = (props) => {
    //SACAR CATEGORIAS
    let categorias = [];
    tablaStock.forEach(element => {
        if (!categorias.includes(element.categoria))
            categorias.push(element.categoria)
    });

    let Buscar = (e) =>
        props.setState({ ...props.state, match: e.target.value })


    let CheckCategoria = (e) => {
        let categoriasFiltradas = [...props.state.categorias];
        let categoriaSeleccionada = e.target.name;
        if (e.target.checked) {
            if (!categoriasFiltradas.includes(categoriaSeleccionada))
                categoriasFiltradas.push(categoriaSeleccionada);
            props.setState({ ...props.state, categorias: categoriasFiltradas })
        }
        else {
            categoriasFiltradas = categoriasFiltradas.filter((e) => e !== categoriaSeleccionada)
            props.setState({ ...props.state, categorias: categoriasFiltradas })
        }
    }

    let CambioCondicionStock = (e) =>
        props.setState({ ...props.state, esStockMayorIgualA: e.target.checked })


    let CambioCantidad = (e) =>
        props.setState({ ...props.state, cantidad: Number(e.target.value) })


    return (
        <aside className="AsideNav">
            <div className='contenedorBuscar'>
                <label htmlFor="fname">Buscar:</label>
                <input type="text" id="buscar" name="buscar" onChange={Buscar} />
            </div>

            <div className='checkboxCategorias'>
                {categorias.map((categoria, index) => (
                    <label key={index}><input type="checkbox" id={`cbox${index}`} name={categoria} onChange={CheckCategoria} />{categoria}</label>
                ))}
            </div>
            <p id='titleStock'>Stock</p>
            <div className='switchDiv'>
                <p>Menor Igual a</p>
                <label className="switch">
                    <input type="checkbox" onChange={CambioCondicionStock} defaultChecked={true} />
                    <span className="slider round"></span>
                </label>
                <p>Mayor Igual a</p>
            </div>
            <div className='cantidadDiv'>
                <p>Cantidad: </p>
                <input type="number" id="count" name="count" defaultValue="0" onChange={CambioCantidad} />
            </div>
        </aside>)
}

const TarjetasProductos = (props) => {
    let tablaFiltrada = props.actualiceProducts.filter(producto => props.state.categorias.length===0 || props.state.categorias.includes(producto.categoria));
    tablaFiltrada=tablaFiltrada.filter(producto => props.state.match==="" || producto.titulo.toLowerCase().includes(props.state.match.toLowerCase()));
    tablaFiltrada=tablaFiltrada.filter(producto => props.state.esStockMayorIgualA?(producto.stock>=props.state.cantidad):(producto.stock<=props.state.cantidad))
   
    
   return (<div className='contenedorTarjetas'>
        {tablaFiltrada.map((elemento, index) =>
            <TarjetaProducto key={index} img={elemento.imagen} 
            nombre={elemento.titulo} id={elemento.id} stock={elemento.stock} 
             setActualiceProducts={props.setActualiceProducts} actualiceProducts={props.actualiceProducts}
             userId={props.userId}/>
        )}
    </div>)
}


const Productos = (props) => {
    const [state, setState] = useState({ match: "", categorias: [], esStockMayorIgualA: true, cantidad: 0 });
    const [actualiceProducts, setActualiceProducts] = useState(tablaStock)
    return (
        <div>
            <div className="contenedorConfiguracion">
                <AsideFilter state={state} setState={setState} />
                <TarjetasProductos setActualiceProducts={setActualiceProducts} actualiceProducts={actualiceProducts} state={state} userId={props.userId}/>
            </div>
        </div>
    );
};

export default Productos

