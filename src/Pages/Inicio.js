import React from 'react';
import './Inicio.css';
import Tabla from '../Components/Tabla';
import GraficaBarras from '../Components/GraficaBarras';
import { tablaMovimiento, tablaStock } from '../Data/Data';

const Inicio = () => {

    function Funcion(e) {
        console.log(e);
    }

    function productosConMenorStock(cantidad, data) {
        const productosOrdenados = data.sort((a, b) => a.stock - b.stock);
        return productosOrdenados.slice(0, cantidad);
    }

    //PRODUCTOS CON MENOR STOCK
    let tablaStock2 = productosConMenorStock(10, tablaStock)
    tablaStock2 = tablaStock2.map(function (item) {
        item["Accion"] = { funcion: () => Funcion(item.id), nombre: "agregar", icono: "/agregarProducto.png" }
        return item
    });

    ///ULTIMOS 10 ELEMENTOS
    let tablaMovimiento2 = tablaMovimiento.slice(-10);
    tablaMovimiento2 = tablaMovimiento2.reverse();

    //BARRAS STOCK POR CATEGORIA Y  //BARRAS MENOR STOCK DE PRODUCTOS POR CATEGORIA
    const maximoStockMenor = 20;
    let barrasStockCategoria = [];
    let barrasStockProductosMenoresCategoria = [];
    tablaStock.forEach(element => {
        if (!barrasStockCategoria.some(item => item.nombre === element.categoria)) {
            barrasStockCategoria.push({ nombre: element.categoria, cantidad: 0 })
            barrasStockProductosMenoresCategoria.push({ nombre: element.categoria, cantidad: 0 })
        }

        let indiceCategoria = barrasStockCategoria.findIndex(item => item.nombre === element.categoria);
        barrasStockCategoria[indiceCategoria].cantidad += element.stock;

        if (element.stock < maximoStockMenor)
            barrasStockProductosMenoresCategoria[indiceCategoria].cantidad++;
    });

    return (
        <div className='contenedorInicio'>
            <div className='contenedorGraficas'>
                <div className='graficaStock'>
                    <GraficaBarras titulo="STOCK" barras={barrasStockCategoria} />
                </div>
                <div className='graficaStockMenores'>
                    <GraficaBarras titulo={`Productos con Stock Menores a ${maximoStockMenor}`} barras={barrasStockProductosMenoresCategoria} />
                </div>
            </div>
            <div className='contenedorTablas'>
                <div className='tablaStockMinimo'>
                    <h3>Stock Bajo</h3>
                    <Tabla tabla={tablaStock2} atributos={["imagen", "titulo", "categoria", "stock", "Accion"]} verTitulos={true} />
                </div>
                <div className='tablaMovimiento'>
                    <h3>Últimos movimientos</h3>
                    <Tabla tabla={tablaMovimiento2} atributos={["imagen", "titulo", "tipoMovimiento", "cantidad", "fecha"]} verTitulos={true} />
                </div>
            </div>
        </div>
    );
};

export default Inicio;