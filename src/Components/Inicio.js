import React from 'react';
import './Inicio.css';
import Tabla from './Tabla';
import GraficaBarras from './GraficaBarras';

const Inicio = () => {

    let tablaStock = [{ imagen: "/imagenesProductos/tornillo.jpg", titulo: "Tornillo Cabeza Plana", stock: 2, id: 1 },
    { imagen: "/imagenesProductos/mesavidrio.jpg", titulo: "Mesa de Vidrio", stock: 1, id: 2 },
    { imagen: "/imagenesProductos/sillagamer.jpg", titulo: "Celular Sansung A15", stock: 2, id: 3 }];

    function Redireccionar(e) {
        console.log(e);
    }

    tablaStock = tablaStock.map(function (item) {
        item["accion"] = { funcion: () => Redireccionar(item.id), nombre: "agregar", icono: "/agregarProducto.png" }
        delete item.id;
        return item
    });

    let tablaMovimiento = [{ imagen: "/imagenesProductos/tornillo.jpg", titulo: "Tornillo Cabeza Plana", tipoMovimiento: "Entrada", cantidad: 3 },
    { imagen: "/imagenesProductos/mesavidrio.jpg", titulo: "Mesa de Vidrio", tipoMovimiento: "Salida", cantidad: 2 },
    { imagen: "/imagenesProductos/sillagamer.jpg", titulo: "Celular Sansung A15", tipoMovimiento: "Entrada", cantidad: 1 }];


    tablaMovimiento = tablaMovimiento.map(function (item) {
        item.cantidad = "cant: " + item.cantidad;
        return item
    });

    return (
        <div className='contenedorInicio'>
            <div className='contenedorGraficas'>
                <div className='graficaStock'>
                    <GraficaBarras />
                </div>
                <div className='graficaStockMenores'>
                    <GraficaBarras />
                </div>
            </div>
            <div className='contenedorTablas'>
                <div className='tablaStockMinimo'>
                    <h3>Stock Bajo</h3>
                    <Tabla tabla={tablaStock} verTitulos={false} />
                </div>
                <div className='tablaMovimiento'>
                    <h3>Últimos movimientos</h3>
                    <Tabla tabla={tablaMovimiento} verTitulos={false} />
                </div>
            </div>
        </div>
    );
};

export default Inicio;